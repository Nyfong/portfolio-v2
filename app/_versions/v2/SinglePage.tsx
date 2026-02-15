"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Experiences" },
  { id: "contact", label: "Contact" },
];

const cvUrl = "/CV%20(NY%20FONG).pdf";

function getDurationMonths(startYear: number, startMonth: number): number {
  const start = new Date(startYear, startMonth - 1, 1);
  const now = new Date();
  return (
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())
  );
}

const hardSkills = [
  "Java",
  "JavaScript",
  "Python",
  "C++",
  "PHP",
  "TypeScript",
  "React.js",
  "Next.js",
  "HTML5",
  "CSS",
  "TailwindCSS",
  "NextUI",
  "shadcn/ui",
  "Figma",
  "Spring Boot",
  "FastAPI",
  "PostgreSQL",
  "Burp Suite",
  "Maltego",
  "Bettercap",
  "Kali Linux",
  "Ubuntu",
  "Sqlmap",
  "OSINT Framework",
  "Shodan",
  "SonarQube",
  "Nmap",
  "Netcat",
  "Git",
  "GitHub",
  "Swagger",
  "Postman",
  "Draw.IO",
  "Docker",
  "Nginx",
  "Keycloak",
  "k6",
  "Grafana",
  "Locust",
  "Trivy",
];

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

export function V2SinglePage() {
  const [skillsExpanded, setSkillsExpanded] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [workPage, setWorkPage] = useState(0);
  const [workDirection, setWorkDirection] = useState(0);
  const [workViewMode, setWorkViewMode] = useState<"pages" | "scroll">("scroll");

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
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
      {/* Minimal nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            Ny Fong
          </button>
          <div className="flex items-center gap-8">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
              >
                {s.label}
              </button>
            ))}
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View CV
            </a>
            <a
              href={cvUrl}
              download="CV-NY-FONG.pdf"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Download CV
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-12">
        {/* Hero */}
        <section
          id="hero"
          className="min-h-[80vh] flex flex-col lg:flex-row lg:items-center lg:gap-12 justify-center py-14"
        >
          <div className="flex-1 order-2 lg:order-none">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">
              Designer & Developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.1]">
              Building digital experiences that inspire
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">
              Full-stack developer crafting beautiful, performant web
              applications. Available for new projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <a href="mailto:litongfong12@gmail.com">Get in touch</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={cvUrl} target="_blank" rel="noopener noreferrer">
                  View CV
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={cvUrl} download="CV-NY-FONG.pdf">
                  Download CV
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a
                  href="https://github.com/Nyfong"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a
                  href="https://www.linkedin.com/in/ny-fong-5b1ab528a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          <div className="shrink-0 order-1 lg:order-none mt-0 mb-6 lg:mb-0 flex justify-center lg:justify-end">
            <Image
              src="/fong-image.png"
              alt="Ny Fong"
              width={400}
              height={400}
              className="rounded-full object-cover aspect-square w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
              priority
            />
          </div>
        </section>

        {/* QR – Open for remote work (full size) */}
        <section className="py-10 border-t border-border/50">
          <a
            href="https://www.linkedin.com/in/ny-fong-5b1ab528a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 w-full p-4 rounded-2xl border-2 border-border/50 bg-white dark:bg-muted/40 hover:border-primary/50 transition-all duration-200"
          >
            <Image
              src="/openfoorwork.jpeg"
              alt="QR code – Open for remote work (LinkedIn)"
              width={480}
              height={480}
              className="rounded-lg object-contain w-full max-w-[280px] sm:max-w-[320px] md:max-w-[400px] aspect-square"
            />
            <span className="text-lg font-semibold text-center">Open for remote work</span>
          </a>
        </section>

        {/* About */}
        <section
          id="about"
          className="py-14 border-t border-border/50 scroll-mt-20"
        >
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            <div className="flex-1 min-w-0 space-y-4 text-muted-foreground max-w-2xl">
              <p className="text-lg leading-relaxed">
                Full-stack developer with 3+ years of experience building modern
                web applications. I focus on clean code, performance, and creating
                intuitive user experiences.
              </p>
              <p className="leading-relaxed">
                From startups to established products, I bring ideas to life with
                React, Next.js, TypeScript, and modern tooling.
              </p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["3+ Years", "10+ Projects", "20+ Technologies"].map((stat) => (
                  <div
                    key={stat}
                    className="text-center p-4 rounded-lg border border-border/50 bg-card/50"
                  >
                    <span className="text-lg font-medium text-foreground">
                      {stat.split(" ")[0]}
                    </span>
                    <span className="text-sm text-muted-foreground block mt-0.5">
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
                className="rounded-xl border border-border/50 w-full max-w-[240px] mx-auto lg:mx-0"
              />
            </div>
          </div>
        </section>

        {/* Hard Skills */}
        <section
          id="skills"
          className="py-14 border-t border-border/50 scroll-mt-20"
        >
          <div className="rounded-2xl border border-border/40 bg-card/20 overflow-hidden">
            <button
              type="button"
              onClick={() => setSkillsExpanded((p) => !p)}
              className="w-full text-left group flex items-center justify-between gap-4 p-4 hover:bg-muted/20 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="min-w-[2.25rem] h-9 sm:min-w-10 sm:h-10 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center px-1.5 group-hover:bg-primary/20 transition-colors shrink-0">
                  <span className="text-sm sm:text-lg font-semibold text-primary tabular-nums">
                    {hardSkills.length}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    Hard Skills
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    Things I love working with to bring ideas to life
                  </p>
                </div>
              </div>
              <div
                className={`shrink-0 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center transition-all duration-300 ${
                  skillsExpanded
                    ? "rotate-180 bg-primary/10"
                    : "group-hover:bg-muted"
                }`}
                aria-hidden
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
                skillsExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-4 pb-4 pt-0">
                  <div className="rounded-xl bg-muted/20 dark:bg-muted/5 p-4 border border-border/30">
                    <div className="flex flex-wrap gap-2">
                      {hardSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg text-sm text-foreground/90 bg-background/60 dark:bg-background/40 border border-border/40 hover:border-primary/30 hover:text-primary transition-all duration-150"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="projects"
          className="py-14 border-t border-border/50 scroll-mt-20"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <h2 className="text-2xl font-semibold">Work Experiences</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-1 hidden sm:inline">Layout:</span>
              <button
                type="button"
                onClick={() => setWorkViewMode("pages")}
                aria-label="Pages"
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  workViewMode === "pages"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border/50 hover:bg-muted/30"
                }`}
              >
                Pages
              </button>
              <button
                type="button"
                onClick={() => setWorkViewMode("scroll")}
                aria-label="Scroll"
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  workViewMode === "scroll"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border/50 hover:bg-muted/30"
                }`}
              >
                Scroll
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
                    className="p-2 rounded-lg border border-border/50 hover:bg-muted/30 disabled:opacity-40 disabled:pointer-events-none transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-muted-foreground min-w-16 text-center">
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
                    className="p-2 rounded-lg border border-border/50 hover:bg-muted/30 disabled:opacity-40 disabled:pointer-events-none transition-colors"
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
                <div
                  key={i}
                  className="group flex flex-col gap-4 p-4 rounded-2xl border border-border/50 bg-muted/20 transition-all duration-200 hover:bg-muted/40 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 cursor-default"
                >
                  <div className="shrink-0 flex justify-start">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-background/80 border border-border/50 flex items-center justify-center transition-all duration-200 group-hover:border-primary/40 group-hover:ring-2 group-hover:ring-primary/10">
                      <Image
                        src={item.logo}
                        alt=""
                        width={80}
                        height={80}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground mb-1">
                      {"date" in item
                        ? item.date
                        : (() => {
                            const mos = Math.max(0, item.durationMonths());
                            return `${item.dateStart} – ${item.dateEnd} · ${mos} ${mos === 1 ? "mo" : "mos"}`;
                          })()}
                    </p>
                    <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {(item.org || ("role" in item && item.role)) && (
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.org ?? ("role" in item ? item.role : "")}
                      </p>
                    )}
                    <p className="mt-2 text-muted-foreground text-sm">
                      {item.description}
                    </p>
                    {item.badges && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.badges.map((badge) => (
                          <span
                            key={badge}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.bullets && (
                      <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-2">
                            <span className="text-primary mt-0.5">●</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="relative overflow-hidden min-h-[320px]">
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
                      <div
                        key={workPage * 2 + i}
                        className="group flex flex-col gap-4 p-4 rounded-2xl border border-border/50 bg-muted/20 transition-all duration-200 hover:bg-muted/40 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 cursor-default"
                      >
                        <div className="shrink-0 flex justify-start">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-background/80 border border-border/50 flex items-center justify-center transition-all duration-200 group-hover:border-primary/40 group-hover:ring-2 group-hover:ring-primary/10">
                            <Image
                              src={item.logo}
                              alt=""
                              width={80}
                              height={80}
                              className="w-full h-full object-contain p-1"
                            />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm text-muted-foreground mb-1">
                            {"date" in item
                              ? item.date
                              : (() => {
                                  const mos = Math.max(0, item.durationMonths());
                                  return `${item.dateStart} – ${item.dateEnd} · ${mos} ${mos === 1 ? "mo" : "mos"}`;
                                })()}
                          </p>
                          <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          {(item.org || ("role" in item && item.role)) && (
                            <p className="text-sm text-muted-foreground mt-0.5">
                              {item.org ?? ("role" in item ? item.role : "")}
                            </p>
                          )}
                          <p className="mt-2 text-muted-foreground text-sm">
                            {item.description}
                          </p>
                          {item.badges && (
                            <div className="mt-3 flex flex-wrap gap-2">
                              {item.badges.map((badge) => (
                                <span
                                  key={badge}
                                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          )}
                          {item.bullets && (
                            <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                              {item.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-2">
                                  <span className="text-primary mt-0.5">●</span>
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
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
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-xl mb-6">
            Open to new opportunities and collaborations. Reach out anytime.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <a href="mailto:litongfong12@gmail.com">litongfong12@gmail.com</a>
          </Button>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ny Fong
          </p>
        </footer>
      </main>

      {/* Back to top */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
