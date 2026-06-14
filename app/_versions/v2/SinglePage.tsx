"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Code2,
  LayoutTemplate,
  Database,
  ShieldAlert,
  FlaskConical,
  Container,
  Download,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TypingAnimation } from "@/components/ui/terminal";
import { GlitchText } from "@/components/ui/glitch-text";
import { MatrixRain } from "@/components/matrix-rain";
import { ScanlineOverlay } from "@/components/scanline-overlay";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Experiences" },
  { id: "contact", label: "Contact" },
];

const cvUrl = "/NyFong%20Resume.pdf";

const heroImages = ["/image-fong.jpg", "/fongfong.jpeg"];

function getDurationMonths(startYear: number, startMonth: number): number {
  const start = new Date(startYear, startMonth - 1, 1);
  const now = new Date();
  return (
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())
  );
}

const hardSkills = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "Python", "C++", "PHP", "TypeScript"],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS",
      "TailwindCSS",
      "NextUI",
      "shadcn/ui",
      "Figma",
    ],
  },
  {
    category: "Backend",
    skills: ["Spring Boot", "FastAPI", "PostgreSQL"],
  },
  {
    category: "Cybersecurity",
    skills: [
      "Burp Suite",
      "Maltego",
      "Bettercap",
      "Kali Linux",
      "Sqlmap",
      "OSINT Framework",
      "Shodan",
      "Nmap",
      "Netcat",
      "Trivy",
    ],
  },
  {
    category: "QA & Testing",
    skills: ["SonarQube", "k6", "Locust", "Postman", "Swagger"],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Nginx",
      "Keycloak",
      "Grafana",
      "Ubuntu",
      "Draw.IO",
    ],
  },
];

const totalHardSkills = hardSkills.reduce(
  (sum, group) => sum + group.skills.length,
  0
);

const categoryIcons: Record<string, typeof Code2> = {
  Languages: Code2,
  Frontend: LayoutTemplate,
  Backend: Database,
  Cybersecurity: ShieldAlert,
  "QA & Testing": FlaskConical,
  "DevOps & Tools": Container,
};

const selectedWorkRaw = [
  {
    type: "project",
    date: "Oct 2025 – Dec 2025",
    sortDate: new Date(2025, 11, 1), // Dec 2025
    title: "Backend Developer",
    description:
      "AI-powered Penetration Testing Tool, Implemented based on black box and white box concepts, integrated with SAST tool.",
    badges: [
      "SAST (Static Application Security Testing)",
      "DAST (Dynamic Application Security Testing)",
    ],
    bullets: [
      "Backend: Building API using Python FastAPI and LLM Ollama for AI-powered penetration testing for black box and enhancement tools for white box and black box testing",
      "Setting up Proxy using Nginx and Certbot for certificate", "Setting Autorization and Authentication with Keycloa",
      "Setting DNS with Hostinger",
      "Using Git and GitHub for teamwork, collaboration, and source code tracking",
      "Frontend: Next.js, fetching API, and designing reusable components",
    ],
    logo: "/screen-0.png",
  },
  {
    type: "project",
    date: "Jun 2025 – Sep 2025",
    sortDate: new Date(2025, 8, 1), // Sep 2025
    title: "Frontend Developer & Team Leader",
    role: "Frontend Developer & Team Leader",
    description:
      "Service Provider Comparison Platform, A platform that helps users make informed decisions by allowing them to explore and compare various service providers. It also supports providers by offering a space to showcase their skills, services, and credentials to potential customers.",
    bullets: [
      "Using Git and GitHub for teamwork, collaboration, and source code tracking",
      "Design and mockup User Interface efficiently using Figma",
      "Frontend using React.js, fetching API, and designing reusable components with Flowbite, ShadCn and HeroUI for style guides",
      "Lead team and deliver efficient work and smooth team collaboration",
      "Propose and guide modern Frontend technology",
    ],
    logo: "/screen-0.png",
  },
  {
    type: "experience",
    dateStart: "Jan 2026",
    dateEnd: "Present",
    durationMonths: () => getDurationMonths(2026, 1),
    sortDate: () => new Date(), // Present = always latest
    title: "Penetration Tester, Quality Assurance, and Software Developer",
    org: "General Secretariat for the National Social Protection Council",
    description:
      "Full-time role focused on application security, software quality, and reliable system development.",
    bullets: [
      "Code analysis and static/dynamic security scanning",
      "Unit testing and test automation",
      "Stress testing and load testing",
      "VAPT (Vulnerability Assessment and Penetration Testing)",
      "Cyber governance and ISO compliance",
    ],
    logo: "/logo-gsnspc.png",
  },
];

const selectedWork = [...selectedWorkRaw].sort((a, b) => {
  const dateA = typeof a.sortDate === "function" ? a.sortDate() : a.sortDate;
  const dateB = typeof b.sortDate === "function" ? b.sortDate() : b.sortDate;
  return (dateB as Date).getTime() - (dateA as Date).getTime();
});

const SCROLL_TOP_THRESHOLD = 400;

type WorkEntry = (typeof selectedWork)[number];

function WorkLogEntry({ item }: { item: WorkEntry }) {
  const isActive = "dateEnd" in item && item.dateEnd === "Present";
  const dateLabel =
    "date" in item
      ? item.date
      : (() => {
          const mos = Math.max(0, item.durationMonths());
          return `${item.dateStart} – ${item.dateEnd} · ${mos} ${mos === 1 ? "mo" : "mos"}`;
        })();

  return (
    <div className="group flex flex-col gap-4 p-4 rounded-2xl border border-border/50 bg-card/30 transition-all duration-200 hover:border-primary/30 box-glow-hover cursor-default">
      <div className="flex items-start justify-between gap-2">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-background/80 border border-border/50 flex items-center justify-center transition-all duration-200 group-hover:border-primary/40 group-hover:ring-2 group-hover:ring-primary/10">
          <Image
            src={item.logo}
            alt=""
            width={80}
            height={80}
            className="w-full h-full object-contain p-1"
          />
        </div>
        <span
          className={`shrink-0 font-mono text-xs px-2 py-1 rounded-md border tracking-wide ${
            isActive
              ? "border-primary/50 text-primary animate-pulse-glow"
              : "border-border/50 text-muted-foreground"
          }`}
        >
          {isActive ? "[ACTIVE]" : "[COMPLETED]"}
        </span>
      </div>
      <div className="min-w-0">
        <p className="font-mono text-sm text-primary mb-1">{dateLabel}</p>
        <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
          {item.title}
        </h3>
        {(item.org || ("role" in item && item.role)) && (
          <p className="text-sm text-muted-foreground mt-0.5">
            {item.org ?? ("role" in item ? item.role : "")}
          </p>
        )}
        <p className="mt-2 text-muted-foreground text-sm">{item.description}</p>
        {item.badges && (
          <div className="mt-3 flex flex-wrap gap-2 font-mono">
            {item.badges.map((badge) => (
              <span
                key={badge}
                className="text-xs px-2 py-1 rounded-md border border-primary/30 text-primary"
              >
                &lt;{badge}&gt;
              </span>
            ))}
          </div>
        )}
        {item.bullets && (
          <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="font-mono text-primary mt-0.5">{">"}</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function V2SinglePage() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [workPage, setWorkPage] = useState(0);
  const [workDirection, setWorkDirection] = useState(0);
  const [workViewMode, setWorkViewMode] = useState<"pages" | "scroll">("scroll");
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || heroImages.length < 2) return;

    const interval = setInterval(() => {
      setHeroImageIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > SCROLL_TOP_THRESHOLD);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background layers */}
      <MatrixRain />
      <ScanlineOverlay />

      {/* Minimal nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            Ny <span className="text-primary">Fong</span>
          </button>
          <div className="flex items-center gap-6">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors hidden sm:block"
              >
                {s.label}
              </button>
            ))}
            <Button
              asChild
              size="sm"
              variant="outline"
              className="rounded-md box-glow-hover hidden sm:inline-flex"
            >
              <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </Button>
            <a
              href={cvUrl}
              download="CV-NY-FONG.pdf"
              aria-label="Download resume"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 box-glow-hover transition-colors"
            >
              <Download className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-12">
        {/* Hero */}
        <section
          id="hero"
          className="min-h-[80vh] flex items-center justify-center py-14"
        >
          <div className="w-full rounded-2xl border border-border/60 bg-card/40 overflow-hidden box-glow">
            {/* Terminal title bar */}
            <div className="flex items-center gap-2 border-b border-border/50 bg-muted/20 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                bash — fong@security:~
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 p-8 sm:p-12 lg:p-16">
              <div className="flex-1 order-2 lg:order-none">
                <p className="font-mono text-sm text-primary mb-2">$ whoami</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.1]">
                  <GlitchText
                    text="Ny Fong"
                    as="span"
                    className="text-primary text-glow"
                  />
                </h1>
                <div className="mt-4 min-h-[1.75rem] font-mono text-base sm:text-lg text-muted-foreground">
                  <TypingAnimation
                    duration={35}
                    startOnView={false}
                    className="font-mono text-base sm:text-lg tracking-normal!"
                  >
                    {"> Penetration Tester | Full-Stack Developer | Security Researcher"}
                  </TypingAnimation>
                  <span className="cursor-blink text-primary">_</span>
                </div>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">
                  Full-stack developer crafting beautiful, performant web
                  applications. Available for new projects.
                </p>
                <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-md box-glow animate-pulse-glow"
                  >
                    <a href="mailto:litongfong12@gmail.com">./contact.sh</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-md box-glow-hover"
                  >
                    <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                      cat resume.pdf
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-md box-glow-hover"
                  >
                    <a href={cvUrl} download="CV-NY-FONG.pdf">
                      wget resume.pdf
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-md box-glow-hover"
                  >
                    <a
                      href="https://github.com/Nyfong"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      git clone github
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-md box-glow-hover"
                  >
                    <a
                      href="https://www.linkedin.com/in/ny-fong-5b1ab528a/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ssh linkedin
                    </a>
                  </Button>
                </div>
              </div>
              <div className="shrink-0 order-1 lg:order-none mt-0 mb-6 lg:mb-0 flex flex-col items-center lg:items-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setHeroImageIndex((i) => (i + 1) % heroImages.length)
                  }
                  aria-label="Swap profile photo"
                  className="relative w-48 sm:w-56 lg:w-64 aspect-3/4 cursor-pointer"
                >
                  <span className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-primary" />
                  <span className="absolute -top-2 -right-2 h-6 w-6 border-t-2 border-r-2 border-primary" />
                  <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-primary" />
                  <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-primary" />
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={heroImages[heroImageIndex]}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 rounded-lg overflow-hidden border border-border/60"
                    >
                      <Image
                        src={heroImages[heroImageIndex]}
                        alt="Ny Fong"
                        fill
                        sizes="(min-width: 1024px) 16rem, (min-width: 640px) 14rem, 12rem"
                        className="object-cover object-top"
                        priority={heroImageIndex === 0}
                      />
                    </motion.div>
                  </AnimatePresence>
                </button>
                {heroImages.length > 1 && (
                  <div className="flex gap-1.5">
                    {heroImages.map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setHeroImageIndex(i)}
                        aria-label={`Show photo ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === heroImageIndex
                            ? "w-6 bg-primary box-glow"
                            : "w-1.5 bg-border/60 hover:bg-primary/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* QR – Open for remote work (full size) */}
        <section className="py-10 border-t border-border/50">
          <a
            href="https://www.linkedin.com/in/ny-fong-5b1ab528a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full rounded-2xl border border-border/50 bg-card/30 overflow-hidden box-glow-hover"
          >
            <div className="flex items-center gap-2 border-b border-border/50 bg-muted/20 px-4 py-2.5 font-mono text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-2">./scan_to_connect.sh</span>
            </div>
            <div className="flex flex-col items-center gap-4 p-6">
              <div className="rounded-lg bg-white p-2">
                <Image
                  src="/openfoorwork.jpeg"
                  alt="QR code – Open for remote work (LinkedIn)"
                  width={480}
                  height={480}
                  className="rounded object-contain w-full max-w-60 sm:max-w-70 md:max-w-100 aspect-square"
                />
              </div>
              <span className="font-mono text-sm text-primary text-glow group-hover:underline">
                &gt; status: open_for_remote_work
              </span>
            </div>
          </a>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-14 border-t border-border/50 scroll-mt-20"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            About
            <span className="mt-2 block h-1 w-10 rounded-full bg-primary box-glow" />
          </h2>
          <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden box-glow-hover">
            <div className="flex items-center gap-2 border-b border-border/50 bg-muted/20 px-4 py-2.5 font-mono text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-2">cat about.txt</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start p-6">
              <div className="flex-1 min-w-0 space-y-4 text-muted-foreground max-w-2xl">
                <p className="text-lg leading-relaxed">
                  <span className="font-mono text-primary">{">"} </span>
                  Full-stack developer with 3+ years of experience building modern
                  web applications. I focus on clean code, performance, and creating
                  intuitive user experiences.
                </p>
                <p className="leading-relaxed">
                  <span className="font-mono text-primary">{">"} </span>
                  From startups to established products, I bring ideas to life with
                  React, Next.js, TypeScript, and modern tooling.
                </p>
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
                  {["3+ Years", "10+ Projects", "20+ Technologies"].map((stat) => (
                    <div
                      key={stat}
                      className="text-center p-4 rounded-lg border border-border/50 bg-background/40 box-glow-hover"
                    >
                      <span className="text-lg font-medium text-primary text-glow">
                        {stat.split(" ")[0]}
                      </span>
                      <span className="text-xs text-muted-foreground block mt-0.5 uppercase tracking-wide">
                        {stat.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0 w-full lg:w-auto lg:max-w-xs">
                <img
                  src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyeHE4cDdiOGt6MGZuZHFzc2s0Y3o4eDNzemxtM2F0NjFqZjM0bTNhNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ZVik7pBtu9dNS/source.gif"
                  alt=""
                  className="rounded-xl border border-border/50 w-full max-w-60 mx-auto lg:mx-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hard Skills */}
        <section
          id="skills"
          className="py-14 border-t border-border/50 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Skills
              <span className="mt-2 block h-1 w-10 rounded-full bg-primary box-glow" />
            </h2>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground">
              <span className="text-primary text-glow">{totalHardSkills}</span> modules ·{" "}
              <span className="text-primary text-glow">{hardSkills.length}</span> categories ·{" "}
              <span className="text-primary">status: ok</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {hardSkills.map((group) => {
              const Icon = categoryIcons[group.category] ?? Code2;
              return (
                <div
                  key={group.category}
                  className="group relative rounded-xl border border-border/40 bg-card/20 overflow-hidden box-glow-hover transition-colors duration-200"
                >
                  <span className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-transparent group-hover:border-primary transition-colors duration-200" />
                  <span className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-transparent group-hover:border-primary transition-colors duration-200" />
                  <div className="flex items-center justify-between gap-2 border-b border-border/40 bg-muted/10 px-4 py-2.5 font-mono">
                    <div className="flex items-center gap-2 text-primary">
                      <Icon className="w-4 h-4 shrink-0" />
                      <span className="text-xs tracking-widest uppercase">
                        {group.category}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      [{String(group.skills.length).padStart(2, "0")}]
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 p-4 font-mono">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs text-foreground/90 bg-background/60 border border-border/40 hover:border-primary/50 hover:text-primary box-glow-hover transition-all duration-150"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="projects"
          className="py-14 border-t border-border/50 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Experience
              <span className="mt-2 block h-1 w-10 rounded-full bg-primary box-glow" />
            </h2>
            <div className="flex items-center gap-2 font-mono text-sm">
              <span className="text-muted-foreground mr-1 hidden sm:inline">view:</span>
              <button
                type="button"
                onClick={() => setWorkViewMode("pages")}
                aria-label="Pages"
                className={`px-3 py-1.5 rounded-md border transition-colors ${
                  workViewMode === "pages"
                    ? "bg-primary text-primary-foreground border-primary box-glow"
                    : "border-border/50 hover:border-primary/40 hover:text-primary"
                }`}
              >
                pages
              </button>
              <button
                type="button"
                onClick={() => setWorkViewMode("scroll")}
                aria-label="Scroll"
                className={`px-3 py-1.5 rounded-md border transition-colors ${
                  workViewMode === "scroll"
                    ? "bg-primary text-primary-foreground border-primary box-glow"
                    : "border-border/50 hover:border-primary/40 hover:text-primary"
                }`}
              >
                scroll
              </button>
              {workViewMode === "pages" && (
                <>
                  <span className="w-px h-5 bg-border/50 mx-1" />
                  <button
                    type="button"
                    onClick={() => {
                      setWorkDirection(-1);
                      setWorkPage((p) => Math.max(0, p - 1));
                    }}
                    disabled={workPage === 0}
                    aria-label="Previous"
                    className="p-2 rounded-md border border-border/50 hover:border-primary/40 hover:text-primary disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-muted-foreground min-w-16 text-center">
                    {workPage + 1} / {Math.max(1, Math.ceil(selectedWork.length / 2))}
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setWorkDirection(1);
                      const maxPage = Math.max(0, Math.ceil(selectedWork.length / 2) - 1);
                      setWorkPage((p) => Math.min(maxPage, p + 1));
                    }}
                    disabled={workPage >= Math.ceil(selectedWork.length / 2) - 1}
                    aria-label="Next"
                    className="p-2 rounded-md border border-border/50 hover:border-primary/40 hover:text-primary disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
          {workViewMode === "scroll" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedWork.map((item, i) => (
                <WorkLogEntry key={i} item={item} />
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden min-h-80">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={workPage}
                  initial={{ opacity: 0, x: workDirection === 1 ? 24 : -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: workDirection === 1 ? -24 : 24 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {selectedWork
                    .slice(workPage * 2, workPage * 2 + 2)
                    .map((item, i) => (
                      <WorkLogEntry key={workPage * 2 + i} item={item} />
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>
          )}
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-14 border-t border-border/50 scroll-mt-20"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
            Contact
            <span className="mt-2 block h-1 w-10 rounded-full bg-primary box-glow" />
          </h2>
          <div className="rounded-2xl border border-border/50 bg-card/30 overflow-hidden box-glow-hover">
            <div className="flex items-center gap-2 border-b border-border/50 bg-muted/20 px-4 py-2.5 font-mono text-xs text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-2">./connect.sh</span>
            </div>
            <div className="p-6 space-y-6">
              <div className="font-mono text-sm space-y-1">
                <p className="text-primary">$ ./connect.sh --email</p>
                <p className="text-muted-foreground">
                  {">"} Open to new opportunities and collaborations. Reach out anytime.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="rounded-md font-mono box-glow animate-pulse-glow w-full sm:w-auto h-auto whitespace-normal break-all text-center py-3"
              >
                <a href="mailto:litongfong12@gmail.com">litongfong12@gmail.com</a>
              </Button>
              <div className="flex flex-col sm:flex-row gap-3 font-mono text-sm">
                <a
                  href="https://github.com/Nyfong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/50 hover:border-primary/50 hover:text-primary box-glow-hover transition-colors"
                >
                  <span className="text-primary">$</span> ssh github@nyfong
                </a>
                <a
                  href="https://www.linkedin.com/in/ny-fong-5b1ab528a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border/50 hover:border-primary/50 hover:text-primary box-glow-hover transition-colors"
                >
                  <span className="text-primary">$</span> curl linkedin.com/in/ny-fong
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/50">
          <p className="font-mono text-sm text-muted-foreground flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {`// © ${new Date().getFullYear()} ny_fong.dev — all systems operational`}
          </p>
        </footer>
      </main>

      {/* Back to top */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-md border border-border/50 bg-card/80 text-primary backdrop-blur hover:border-primary/50 box-glow-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
