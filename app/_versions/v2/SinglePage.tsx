"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Radar,
  LayoutTemplate,
  Database,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
  ArrowRight,
  Download,
  ArrowUp,
  Menu,
  X,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Images,
  Network,
  Wifi,
  Terminal,
  Globe,
  Search,
  Bug,
  Binary,
  KeyRound,
  Activity,
  Fingerprint,
  Link2,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiPhp,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiNextui,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiSpringboot,
  SiFastapi,
  SiPostgresql,
  SiBurpsuite,
  SiKalilinux,
  SiTrivy,
  SiSonarqube,
  SiK6,
  SiPostman,
  SiSwagger,
  SiGit,
  SiGithub,
  SiDocker,
  SiNginx,
  SiKeycloak,
  SiGrafana,
  SiUbuntu,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const cvUrl = "/NyFong%20Resume.pdf";
const email = "litongfong12@gmail.com";
const githubUrl = "https://github.com/Nyfong";
const linkedinUrl = "https://www.linkedin.com/in/ny-fong-5b1ab528a/";
const heroImages = ["/image-fong.jpg", "/fongfong.jpeg"];

const nav = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "awards", label: "Awards" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

// Flip to true to show the "Featured projects" section and its nav link.
const SHOW_PROJECTS = false;
const navItems = SHOW_PROJECTS
  ? nav
  : nav.filter((item) => item.id !== "projects");

/* Each service card shows a logo. By default it uses the built-in `icon`;
   to use your own logo image, drop a file in /public and set
   `logo: "/my-logo.png"` on that entry (see card 01 below). */
type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  logo?: string;
};

const services: Service[] = [
  {
    icon: ShieldCheck,
    title: "Penetration Testing",
    desc: "Black-box & white-box VAPT to find and fix vulnerabilities before attackers do.",
    logo: "/logo-web.png", // ← example logo — replace with your own or delete this line
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "End-to-end web apps built with React, Next.js, FastAPI and Spring Boot.",
  },
  {
    icon: Radar,
    title: "Security Research",
    desc: "SAST/DAST tooling, OSINT and AI-assisted testing pipelines for deeper coverage.",
  },
  {
    icon: LayoutTemplate,
    title: "Frontend Engineering",
    desc: "Accessible, responsive interfaces with React, Next.js, Tailwind and shadcn/ui.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    desc: "Reliable APIs and services with FastAPI, Spring Boot and PostgreSQL.",
  },
  {
    icon: FlaskConical,
    title: "QA & Load Testing",
    desc: "Automated tests, k6 / Locust load testing and SonarQube quality gates.",
  },
];

const hardSkills = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C++", "PHP"],
  },
  {
    category: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "shadcn/ui",
      "NextUI",
      "HTML5",
      "CSS",
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
      "Nmap",
      "Netcat",
      "Shodan",
      "Trivy",
      "OSINT",
      "Pwntools",
      "Cryptography",
      "SIEM",
      "Forensics",
      "Attack Chaining",
      "Qualys",
    ],
  },
  {
    category: "QA & Testing",
    skills: ["SonarQube", "k6", "Locust", "Postman", "Swagger"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Nginx", "Keycloak", "Grafana", "Ubuntu"],
  },
];

function getDurationMonths(startYear: number, startMonth: number): number {
  const start = new Date(startYear, startMonth - 1, 1);
  const now = new Date();
  return (
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())
  );
}

type ExperienceItem = {
  date: string;
  sortDate: () => Date;
  present: boolean;
  durationMonths?: () => number;
  title: string;
  org: string;
  description: string;
  bullets: string[];
  logo: string;
};

const experienceRaw: ExperienceItem[] = [
  {
    date: "Jan 2026 – Present",
    sortDate: () => new Date(),
    present: true,
    durationMonths: () => getDurationMonths(2026, 1),
    title: "Penetration Tester, QA & Software Developer",
    org: "General Secretariat for the National Social Protection Council",
    description:
      "Full-time role focused on application security, software quality and reliable system development.",
    bullets: [
      "Code analysis and static / dynamic security scanning",
      "Unit testing and test automation",
      "Stress testing and load testing",
      "VAPT — Vulnerability Assessment & Penetration Testing",
      "Cyber governance and ISO compliance",
    ],
    logo: "/logo-gsnspc.png",
  },
  {
    date: "Oct 2025 – Dec 2025",
    sortDate: () => new Date(2025, 11, 1),
    present: false,
    title: "Backend Developer — AI Penetration Testing Tool",
    org: "Capstone Project",
    description:
      "AI-powered penetration-testing platform built on black-box and white-box concepts, integrated with a SAST engine.",
    bullets: [
      "Built APIs with Python FastAPI and the Ollama LLM for AI-assisted black-box testing",
      "Configured Nginx + Certbot reverse proxy and TLS certificates",
      "Set up authentication & authorization with Keycloak, DNS via Hostinger",
      "Frontend in Next.js — API integration and reusable components",
    ],
    logo: "/screen-0.png",
  },
  {
    date: "Jun 2025 – Sep 2025",
    sortDate: () => new Date(2025, 8, 1),
    present: false,
    title: "Frontend Developer & Team Leader",
    org: "Service Provider Comparison Platform",
    description:
      "A platform that helps users compare service providers and gives providers a space to showcase their skills and credentials.",
    bullets: [
      "Led the team and drove smooth, efficient collaboration",
      "Designed and prototyped the UI in Figma",
      "Built the frontend in React.js with Flowbite, shadcn/ui and HeroUI",
      "Proposed and guided modern frontend technology choices",
    ],
    logo: "/screen-0.png",
  },
];

const experience = [...experienceRaw].sort(
  (a, b) => b.sortDate().getTime() - a.sortDate().getTime()
);

/* ------------------------------------------------------------------ */
/*  Projects                                                           */
/*                                                                     */
/*  Copy a block to add a new project. `links` is optional.            */
/* ------------------------------------------------------------------ */

type Project = {
  title: string;
  period: string;
  role: string;
  description: string;
  tags: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "AI-Powered Penetration Testing Tool",
    period: "Oct 2025 – Dec 2025",
    role: "Backend Developer",
    description:
      "A black-box & white-box pentesting platform with an integrated SAST engine and an Ollama LLM assistant. FastAPI backend, Next.js frontend, secured with Nginx + Keycloak.",
    tags: ["FastAPI", "Ollama LLM", "Next.js", "Nginx", "Keycloak", "SAST/DAST"],
    links: [{ label: "GitHub", href: githubUrl }],
  },
  {
    title: "Service Provider Comparison Platform",
    period: "Jun 2025 – Sep 2025",
    role: "Frontend Lead",
    description:
      "Helps users explore and compare service providers, and gives providers a space to showcase their skills and credentials. Led the team and built the frontend.",
    tags: ["React.js", "shadcn/ui", "HeroUI", "Figma", "Team Lead"],
    links: [{ label: "GitHub", href: githubUrl }],
  },
  {
    title: "Add your next project",
    period: "2025",
    role: "Your role",
    description:
      "This is a template card. Replace the title, description and tags with your own work. Copy this block to add more.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: [{ label: "GitHub", href: githubUrl }],
  },
];

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "10+", label: "Projects shipped" },
  { value: "20+", label: "Technologies" },
];

/* Awards — images live in /public/compi. Each award can hold several
   images; the lightbox scrolls through all of them. Add a block for more. */
type AwardItem = {
  title: string;
  issuer: string;
  badge: string;
  year: string;
  images: string[];
};

const awards: AwardItem[] = [
  {
    title: "Top Team Award",
    issuer: "Korea Software HRD Center · 13th Basic Course",
    badge: "Top 1",
    year: "2025",
    images: [
      "/compi/hrd-top-team-award.jpg",
      "/compi/hrd-top-team-award-2.jpg",
    ],
  },
  {
    title: "Coding Challenge — 3rd Prize",
    issuer: "Korea Software HRD Center · Basic Course",
    badge: "Top 3",
    year: "2025",
    images: ["/compi/hrd-coding-challenge-3rd.jpg"],
  },
  {
    title: "Cyber Arena 2026",
    issuer: "National Cybersecurity Competition · Team H1T, backup among 100+ teams",
    badge: "Team H1T",
    year: "2026",
    images: ["/compi/cyber-arena-2026.jpg"],
  },
];

// Flattened image list for the lightbox + each award's starting index.
const awardImages = awards.flatMap((a) =>
  a.images.map((src) => ({ src, title: a.title, issuer: a.issuer }))
);
const awardStart = awards.reduce<number[]>((acc, a, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + awards[i - 1].images.length);
  return acc;
}, []);

const socials = [
  { icon: Github, label: "GitHub", href: githubUrl },
  { icon: Linkedin, label: "LinkedIn", href: linkedinUrl },
  { icon: Mail, label: "Email", href: `mailto:${email}` },
];

/* Brand logo per skill. Tools without an official logo (Maltego, Bettercap,
   sqlmap, Nmap, Netcat, Shodan, OSINT, Locust) fall back to a letter badge. */
const skillIcons: Record<string, { icon: IconType; color: string }> = {
  Java: { icon: FaJava, color: "#E76F00" },
  JavaScript: { icon: SiJavascript, color: "#E8A400" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Python: { icon: SiPython, color: "#3776AB" },
  "C++": { icon: SiCplusplus, color: "#00599C" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  "React.js": { icon: SiReact, color: "#149ECA" },
  "Next.js": { icon: SiNextdotjs, color: "#0f1115" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  "shadcn/ui": { icon: SiShadcnui, color: "#0f1115" },
  NextUI: { icon: SiNextui, color: "#0f1115" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss3, color: "#1572B6" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  "Burp Suite": { icon: SiBurpsuite, color: "#FF6633" },
  "Kali Linux": { icon: SiKalilinux, color: "#367BF0" },
  Trivy: { icon: SiTrivy, color: "#1904DA" },
  SonarQube: { icon: SiSonarqube, color: "#4E9BCD" },
  k6: { icon: SiK6, color: "#7D64FF" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Swagger: { icon: SiSwagger, color: "#6BA539" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#181717" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Nginx: { icon: SiNginx, color: "#009639" },
  Keycloak: { icon: SiKeycloak, color: "#008AAA" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Ubuntu: { icon: SiUbuntu, color: "#E95420" },
};

/* Tools/concepts with no official brand logo — represented by a fitting
   lucide icon (Invicti/Qualys use their real brand colors). */
const fallbackSkillIcons: Record<string, { icon: LucideIcon; color: string }> = {
  Maltego: { icon: Network, color: "#12A594" },
  Bettercap: { icon: Wifi, color: "#0EA5A5" },
  Sqlmap: { icon: Database, color: "#C2410C" },
  Nmap: { icon: Radar, color: "#6741D9" },
  Netcat: { icon: Terminal, color: "#475569" },
  Shodan: { icon: Globe, color: "#E01E1E" },
  OSINT: { icon: Search, color: "#2563EB" },
  Locust: { icon: Bug, color: "#7CB342" },
  Pwntools: { icon: Binary, color: "#111114" },
  Cryptography: { icon: KeyRound, color: "#C79A2B" },
  SIEM: { icon: Activity, color: "#E8590C" },
  Forensics: { icon: Fingerprint, color: "#7048E8" },
  "Attack Chaining": { icon: Link2, color: "#DB2777" },
  Qualys: { icon: ShieldAlert, color: "#C8102E" },
};

/* ------------------------------------------------------------------ */
/*  Small building blocks                                              */
/* ------------------------------------------------------------------ */

function Eyebrow({
  children,
  className,
  tone = "accent",
}: {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "light";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.2em]",
        tone === "accent" ? "text-[#4f46e5]" : "text-indigo-300",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          tone === "accent" ? "bg-[#4f46e5]" : "bg-indigo-300"
        )}
      />
      {children}
    </div>
  );
}

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SkillIcon({ name }: { name: string }) {
  const entry = skillIcons[name] ?? fallbackSkillIcons[name];
  if (entry) {
    const Icon = entry.icon;
    return (
      <Icon className="h-4 w-4 shrink-0" style={{ color: entry.color }} aria-hidden />
    );
  }
  return (
    <span
      className="grid h-4 w-4 shrink-0 place-items-center rounded-[3px] bg-[#ececef] text-[9px] font-bold uppercase text-[#8a8a93]"
      aria-hidden
    >
      {name.charAt(0)}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function V2SinglePage() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // force light regardless of any stored theme
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
  }, []);

  // active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    nav.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // back-to-top visibility
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // rotate hero photo
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || heroImages.length < 2) return;
    const id = setInterval(
      () => setHeroIndex((i) => (i + 1) % heroImages.length),
      6000
    );
    return () => clearInterval(id);
  }, []);

  // lightbox: keyboard nav + scroll lock while open
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowLeft")
        setLightbox((n) =>
          n === null ? n : (n - 1 + awardImages.length) % awardImages.length
        );
      else if (e.key === "ArrowRight")
        setLightbox((n) => (n === null ? n : (n + 1) % awardImages.length));
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-[#0f1115] antialiased selection:bg-[#4f46e5] selection:text-white">
      {/* ---------------------------------------------------------- */}
      {/*  Header                                                     */}
      {/* ---------------------------------------------------------- */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#f0f0f2] bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => scrollTo("hero")}
            className="text-base font-semibold tracking-tight"
          >
            Ny Fong<span className="text-[#4f46e5]">.</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative text-sm transition-colors",
                  active === item.id
                    ? "text-[#0f1115]"
                    : "text-[#6b6b76] hover:text-[#0f1115]"
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-[#4f46e5]"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-[#111114] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2a2a30] sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ececef] text-[#0f1115] md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* mobile menu */}
        {menuOpen && (
          <div className="animate-fade-in border-t border-[#f0f0f2] bg-white shadow-lg md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "border-b border-[#f4f4f6] py-3 text-left text-sm transition-colors last:border-b-0",
                    active === item.id
                      ? "font-medium text-[#4f46e5]"
                      : "text-[#56565f] hover:text-[#0f1115]"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="my-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#111114] px-5 py-2.5 text-sm font-medium text-white"
              >
                Resume <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="pt-16">
        {/* -------------------------------------------------------- */}
        {/*  Hero                                                     */}
        {/* -------------------------------------------------------- */}
        <section id="hero" className="mx-auto max-w-6xl px-6 pb-20 pt-16 sm:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ececef] bg-white px-3.5 py-1.5 text-xs font-medium text-[#6b6b76]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4f46e5] opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4f46e5]" />
                  </span>
                  Available for new projects
                </div>

                <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-[#0f1115] sm:text-5xl lg:text-6xl">
                  I build software, then
                  <br />
                  <span className="text-[#4f46e5]">break</span> it before
                  attackers do.
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#56565f]">
                  I&apos;m{" "}
                  <span className="font-medium text-[#0f1115]">Ny Fong</span> — a
                  penetration tester and full-stack developer. I ship reliable
                  products and break them before attackers can, blending clean
                  engineering with an offensive-security mindset.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollTo("services")}
                    className="inline-flex items-center gap-2 rounded-full bg-[#111114] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2a2a30]"
                  >
                    View my work
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={cvUrl}
                    download="CV-Ny-Fong.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-[#e0e0e5] bg-white px-6 py-3 text-sm font-medium text-[#0f1115] transition-colors hover:border-[#111114]"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>

                <div className="mt-9 flex items-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#ececef] text-[#6b6b76] transition-colors hover:border-[#111114] hover:text-[#0f1115]"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="relative mx-auto w-full max-w-sm lg:mx-0"
            >
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-[#4f46e5]/8" />
              <button
                type="button"
                onClick={() => setHeroIndex((i) => (i + 1) % heroImages.length)}
                aria-label="Swap photo"
                className="relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[#ececef] bg-[#f5f5f6]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={heroImages[heroIndex]}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroImages[heroIndex]}
                      alt="Ny Fong"
                      fill
                      sizes="(min-width: 1024px) 24rem, 100vw"
                      className="object-cover object-top"
                      priority={heroIndex === 0}
                    />
                  </motion.div>
                </AnimatePresence>
              </button>
            </motion.div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  About + stats                                            */}
        {/* -------------------------------------------------------- */}
        <section
          id="about"
          className="scroll-mt-16 border-t border-[#f0f0f2] bg-[#fafafa]"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr]">
              <Reveal>
                <Eyebrow>About</Eyebrow>
                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  Engineering meets an offensive mindset.
                </h2>
              </Reveal>

              <Reveal delay={0.05} className="space-y-5 text-lg leading-relaxed text-[#56565f]">
                <p>
                  I work across the whole stack — from React and Next.js
                  front-ends to FastAPI and Spring Boot back-ends — and I care
                  about the details that make software fast, accessible and
                  secure.
                </p>
                <p>
                  Currently a Penetration Tester, QA and Software Developer at
                  the General Secretariat for the National Social Protection
                  Council, where I focus on application security, software
                  quality and reliable delivery.
                </p>
              </Reveal>
            </div>

            <Reveal className="mt-16 grid grid-cols-3 gap-6 border-t border-[#ececef] pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-bold tracking-tight text-[#0f1115] sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-[#6b6b76]">{s.label}</div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Services                                                 */}
        {/* -------------------------------------------------------- */}
        <section id="services" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>What I do</Eyebrow>
                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  Services &amp; capabilities
                </h2>
              </div>
              <p className="max-w-sm text-[#6b6b76]">
                From secure back-ends to polished interfaces — and the testing
                that keeps them trustworthy.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.05}>
                  <div className="group relative h-full rounded-2xl border border-[#ececef] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#e0e0e5] hover:shadow-[0_18px_44px_-24px_rgba(17,17,20,0.4)]">
                    <span className="absolute right-7 top-7 font-mono text-xs text-[#c8c8d0]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.logo ? (
                      <div className="mb-6 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#ececef] bg-white">
                        <Image
                          src={s.logo}
                          alt={s.title}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain p-1.5"
                        />
                      </div>
                    ) : (
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f2f1ff] text-[#4f46e5] transition-colors duration-300 group-hover:bg-[#4f46e5] group-hover:text-white">
                        <s.icon className="h-5 w-5" />
                      </div>
                    )}
                    <h3 className="text-lg font-semibold text-[#0f1115]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#6b6b76]">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Projects  (hidden — flip SHOW_PROJECTS above to show)    */}
        {/* -------------------------------------------------------- */}
        {SHOW_PROJECTS && (
        <section
          id="projects"
          className="scroll-mt-16 border-t border-[#f0f0f2] bg-[#fafafa]"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  Featured projects
                </h2>
              </div>
              <p className="max-w-sm text-[#6b6b76]">
                A few things I&apos;ve designed, built and secured — swap in your
                own screenshots any time.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.05}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#ececef] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-24px_rgba(17,17,20,0.4)]">
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-[#8a8a93]">
                        <span>{p.period}</span>
                        <span className="text-[#c8c8d0]">·</span>
                        <span>{p.role}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-[#0f1115]">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#6b6b76]">
                        {p.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-[#f5f5f6] px-2.5 py-1 text-xs text-[#56565f]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {p.links && p.links.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-4 pt-5">
                          {p.links.map((l) => (
                            <a
                              key={l.label}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-sm font-medium text-[#0f1115] transition-colors hover:text-[#4f46e5]"
                            >
                              {l.label}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* -------------------------------------------------------- */}
        {/*  Experience                                               */}
        {/* -------------------------------------------------------- */}
        <section
          id="experience"
          className="scroll-mt-16 border-t border-[#f0f0f2] bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Reveal>
              <Eyebrow>Experience</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Selected work &amp; roles
              </h2>
            </Reveal>

            <ol className="mt-14 ml-1 border-l border-[#e6e6ea]">
              {experience.map((item, i) => {
                const durationLabel =
                  item.present && item.durationMonths
                    ? (() => {
                        const m = Math.max(0, item.durationMonths());
                        return ` · ${m} ${m === 1 ? "mo" : "mos"}`;
                      })()
                    : "";
                return (
                  <Reveal key={i} delay={i * 0.05}>
                    <li className="relative pb-14 pl-8 last:pb-0">
                      <span
                        className={cn(
                          "absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white",
                          item.present
                            ? "bg-[#4f46e5] ring-4 ring-[#4f46e5]/15"
                            : "bg-[#c8c8d0]"
                        )}
                      />
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="font-mono text-xs uppercase tracking-wider text-[#8a8a93]">
                          {item.date}
                          {durationLabel}
                        </p>
                        {item.present && (
                          <span className="rounded-full bg-[#4f46e5]/10 px-2.5 py-0.5 text-[11px] font-medium text-[#4f46e5]">
                            Now
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex items-start gap-4">
                        <div className="mt-0.5 hidden h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#ececef] bg-white sm:flex">
                          <Image
                            src={item.logo}
                            alt=""
                            width={44}
                            height={44}
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-[#0f1115]">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#6b6b76]">{item.org}</p>
                          <p className="mt-3 max-w-2xl text-[#56565f]">
                            {item.description}
                          </p>
                          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                            {item.bullets.map((b) => (
                              <li
                                key={b}
                                className="flex gap-2.5 text-sm text-[#56565f]"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#4f46e5]" />
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                );
              })}
            </ol>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Awards                                                   */}
        {/* -------------------------------------------------------- */}
        <section
          id="awards"
          className="scroll-mt-16 border-t border-[#f0f0f2] bg-[#fafafa]"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Reveal>
              <Eyebrow>Recognition</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Awards &amp; achievements
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) * 0.05}>
                  <button
                    type="button"
                    onClick={() => setLightbox(awardStart[i])}
                    className="group block h-full w-full overflow-hidden rounded-2xl border border-[#ececef] bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-24px_rgba(17,17,20,0.4)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#f5f5f6]">
                      <Image
                        src={a.images[0]}
                        alt={a.title}
                        fill
                        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#4f46e5] shadow-sm backdrop-blur">
                        <Trophy className="h-3.5 w-3.5" />
                        {a.badge}
                      </span>
                      {a.images.length > 1 && (
                        <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
                          <Images className="h-3 w-3" />
                          {a.images.length}
                        </span>
                      )}
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-[#0f1115] shadow">
                          <Maximize2 className="h-4 w-4" />
                        </span>
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-base font-semibold text-[#0f1115]">
                          {a.title}
                        </h3>
                        <span className="shrink-0 pt-0.5 font-mono text-xs text-[#8a8a93]">
                          {a.year}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-[#6b6b76]">{a.issuer}</p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Tech stack                                               */}
        {/* -------------------------------------------------------- */}
        <section
          id="stack"
          className="scroll-mt-16 border-t border-[#f0f0f2] bg-white"
        >
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
            <Reveal>
              <Eyebrow>Toolbox</Eyebrow>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Tech stack
              </h2>
            </Reveal>

            <div className="mt-12">
              {hardSkills.map((group) => (
                <Reveal
                  key={group.category}
                  className="grid gap-4 border-t border-[#ececef] py-7 sm:grid-cols-[220px_1fr]"
                >
                  <h3 className="text-sm font-semibold text-[#0f1115]">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-2 rounded-full border border-[#e6e6ea] bg-white px-3.5 py-1.5 text-sm text-[#56565f] transition-colors hover:border-[#4f46e5] hover:text-[#4f46e5]"
                      >
                        <SkillIcon name={skill} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Contact (dark)                                           */}
        {/* -------------------------------------------------------- */}
        <section id="contact" className="scroll-mt-16 bg-[#0f1115] text-white">
          <div className="mx-auto max-w-6xl px-6 py-28 sm:py-36">
            <Reveal>
              <Eyebrow tone="light">Contact</Eyebrow>
              <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
                Let&apos;s build something
                <br />
                <span className="text-indigo-400">secure</span> together.
              </h2>
              <p className="mt-6 max-w-xl text-lg text-white/55">
                Open to new opportunities and collaborations. The fastest way to
                reach me is email — I usually reply within a day.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0f1115] transition-colors hover:bg-white/90"
                >
                  <Mail className="h-4 w-4" />
                  {email}
                </a>
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/60"
                >
                  View resume
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-10 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/60 hover:text-white"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Footer                                                   */}
        {/* -------------------------------------------------------- */}
        <footer className="border-t border-[#f0f0f2] bg-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
            <p className="text-sm font-semibold tracking-tight">
              Ny Fong<span className="text-[#4f46e5]">.</span>
            </p>
            <p className="text-sm text-[#8a8a93]">
              © {new Date().getFullYear()} Ny Fong — all rights reserved.
            </p>
            <p className="text-sm text-[#8a8a93]">Built with Next.js &amp; Tailwind</p>
          </div>
        </footer>
      </main>

      {/* back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#111114] text-white shadow-lg transition-colors hover:bg-[#2a2a30]"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Awards lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(null);
              }}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            {awardImages.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((n) =>
                      n === null
                        ? n
                        : (n - 1 + awardImages.length) % awardImages.length
                    );
                  }}
                  aria-label="Previous"
                  className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox((n) =>
                      n === null ? n : (n + 1) % awardImages.length
                    );
                  }}
                  aria-label="Next"
                  className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex max-h-full max-w-4xl flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={awardImages[lightbox].src}
                alt={awardImages[lightbox].title}
                className="max-h-[78vh] w-auto rounded-xl object-contain shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-sm font-semibold text-white">
                  {awardImages[lightbox].title}
                </p>
                <p className="mt-0.5 text-xs text-white/55">
                  {awardImages[lightbox].issuer}
                </p>
                <p className="mt-2 font-mono text-[11px] text-white/40">
                  {lightbox + 1} / {awardImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
