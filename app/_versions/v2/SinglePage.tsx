"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useSpring,
} from "framer-motion";
import {
  Radar,
  Database,
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
  BadgeCheck,
  Check,
  Cloud,
  Flame,
  Sun,
  Moon,
  Sparkles,
  MousePointer2,
  Bot,
  Plug,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme-provider";
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
  SiOllama,
  SiClaude,
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

/* Cycled by the hero typewriter line. */
const roles = [
  "Penetration Tester",
  "Full-Stack Developer",
  "Security Researcher",
  "QA Engineer",
];

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

/* Service cards are deliberately icon-free — a number, a rule and the
   tools do the work. */
type Service = {
  title: string;
  desc: string;
  tools: string[];
};

const services: Service[] = [
  {
    title: "Penetration Testing",
    desc: "Black-box & white-box VAPT to find and fix vulnerabilities before attackers do.",
    tools: ["Burp Suite", "Kali Linux", "Nmap", "Sqlmap"],
  },
  {
    title: "Full-Stack Development",
    desc: "End-to-end web apps built with React, Next.js, FastAPI and Spring Boot.",
    tools: ["Next.js", "React.js", "FastAPI", "Spring Boot"],
  },
  {
    title: "Security Research",
    desc: "SAST/DAST tooling, OSINT and AI-assisted testing pipelines for deeper coverage.",
    tools: ["Trivy", "OSINT", "Shodan", "Maltego"],
  },
  {
    title: "Frontend Engineering",
    desc: "Accessible, responsive interfaces with React, Next.js, Tailwind and shadcn/ui.",
    tools: ["React.js", "TailwindCSS", "shadcn/ui", "Figma"],
  },
  {
    title: "Backend & APIs",
    desc: "Reliable APIs and services with FastAPI, Spring Boot and PostgreSQL.",
    tools: ["FastAPI", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    title: "QA & Load Testing",
    desc: "Automated tests, k6 / Locust load testing and SonarQube quality gates.",
    tools: ["SonarQube", "k6", "Locust", "Postman"],
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
    category: "AI & LLM",
    skills: [
      "Ollama",
      "Qwen",
      "Claude",
      "Cursor",
      "AI Agents",
      "MCP Servers",
      "RAG",
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
  /* e.g. "Full-time" — shown as a chip next to the date. */
  employment?: string;
  title: string;
  org: string;
  description: string;
  bullets: string[];
  logo: string;
  /* Rendered as logo chips under the role. Names must match `skillIcons`
     or `fallbackSkillIcons` to get a brand mark instead of a letter badge. */
  stack?: string[];
};

const experienceRaw: ExperienceItem[] = [
  {
    date: "Jan 2026 – Present",
    sortDate: () => new Date(),
    present: true,
    durationMonths: () => getDurationMonths(2026, 1),
    employment: "Full-time",
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
    stack: ["Burp Suite", "SonarQube", "Trivy", "k6", "Kali Linux", "Postman"],
  },
  {
    date: "Aug 2025 – Dec 2025",
    sortDate: () => new Date(2025, 11, 1),
    present: false,
    durationMonths: () => 5,
    employment: "Full-time",
    title: "Backend Developer",
    org: "AI-Powered Penetration Testing Tool",
    description:
      "Cyber-security project: an AI-assisted penetration-testing tool built on black-box and white-box concepts, integrated with a SAST engine.",
    bullets: [
      "SAST — Static Application Security Testing",
      "DAST — Dynamic Application Security Testing",
      "Backend APIs in Python FastAPI",
      "Nginx, Keycloak, Grafana, Prometheus and SonarQube",
      "Sysadmin on Ubuntu Server — Dockerisation and containerisation",
    ],
    logo: "/screen-0.png",
    stack: [
      "FastAPI",
      "Nginx",
      "Keycloak",
      "Grafana",
      "Prometheus",
      "SonarQube",
      "Docker",
      "Ubuntu",
    ],
  },
  {
    date: "Jan 2025 – Jul 2025",
    sortDate: () => new Date(2025, 6, 1),
    present: false,
    durationMonths: () => 7,
    title: "Frontend Web Developer",
    org: "ZenTrio — Teamwork Management Platform",
    description:
      "ZenTrio is an all-in-one teamwork management platform built to streamline collaboration, project tracking and productivity. It tackles real-world problems like disorganised workflows, unclear task ownership and the inefficiency of juggling multiple tools.",
    bullets: [
      "Integrated Google Docs, Slides and Sheets using the Spring framework",
      "Drove day-to-day collaboration with Git and GitHub",
      "Deployed on Google Cloud Platform and AWS EC2",
    ],
    logo: "/screen-0.png",
    stack: ["React.js", "Spring Boot", "Git", "GitHub", "Google Cloud", "AWS EC2"],
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
  /* Optional public verification page for a credential. */
  verifyUrl?: string;
  /* Certificates are letterboxed so nothing gets cropped; photos fill the
     frame. Defaults to "cover". */
  fit?: "cover" | "contain";
};

const awards: AwardItem[] = [
  {
    title: "Certified Web Red Team Analyst (WEB-RTA)",
    issuer: "CyberWarfare Labs",
    badge: "Certified",
    year: "2026",
    images: ["/compi/Cwl-web-rta.png"],
    verifyUrl:
      "https://labs.cyberwarfare.live/credential/achievement/6a7cb5210c2bad592285a49a",
    fit: "contain",
  },
  {
    title: "Certified Cybersecurity Foundations (CORE)",
    issuer: "Hackviser",
    badge: "Certified",
    year: "2026",
    images: ["/compi/fong-hackviser.webp"],
    verifyUrl: "https://hackviser.com/verify?id=HV-CORE-HE152X0N",
    fit: "contain",
  },
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
    title: "Cyber Arena & National Cybersecurity Competition",
    issuer: "Ministry of Post and Telecommunications",
    badge: "Verified",
    year: "2026",
    images: [
      "/compi/cyber-arena-2026-certificate.jpg",
      "/compi/national_mptc_cncc.jpg",
    ],
    verifyUrl:
      "https://verify.gov.kh/verify/FhRNCs1MM-4GOAK91o7aar6GUJfUJGyf?key=38fb2af1ce173b57c5d0ffc073ade1d8546120d531c65415c18dc5f2c36f9a5d",
    fit: "contain",
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
  "Next.js": { icon: SiNextdotjs, color: "var(--ink)" },
  TailwindCSS: { icon: SiTailwindcss, color: "#06B6D4" },
  "shadcn/ui": { icon: SiShadcnui, color: "var(--ink)" },
  NextUI: { icon: SiNextui, color: "var(--ink)" },
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
  GitHub: { icon: SiGithub, color: "var(--ink)" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Nginx: { icon: SiNginx, color: "#009639" },
  Keycloak: { icon: SiKeycloak, color: "#008AAA" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Ubuntu: { icon: SiUbuntu, color: "#E95420" },
  Ollama: { icon: SiOllama, color: "var(--ink)" },
  Claude: { icon: SiClaude, color: "#D97757" },
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
  Pwntools: { icon: Binary, color: "var(--ink)" },
  Cryptography: { icon: KeyRound, color: "#C79A2B" },
  SIEM: { icon: Activity, color: "#E8590C" },
  Forensics: { icon: Fingerprint, color: "#7048E8" },
  "Attack Chaining": { icon: Link2, color: "#DB2777" },
  Qualys: { icon: ShieldAlert, color: "#C8102E" },
  Prometheus: { icon: Flame, color: "#E6522C" },
  "Google Cloud": { icon: Cloud, color: "#4285F4" },
  "AWS EC2": { icon: Cloud, color: "#FF9900" },
  Qwen: { icon: Sparkles, color: "#615CED" },
  Cursor: { icon: MousePointer2, color: "var(--ink)" },
  "AI Agents": { icon: Bot, color: "#0D9488" },
  "MCP Servers": { icon: Plug, color: "#EA580C" },
  RAG: { icon: BrainCircuit, color: "#9333EA" },
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
        "flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.2em]",
        tone === "accent" ? "text-brand" : "text-contact-accent",
        className
      )}
    >
      <span
        className={cn(
          "h-px w-6",
          tone === "accent" ? "bg-brand" : "bg-contact-accent"
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

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Types a word out, holds, deletes it, moves to the next. Returns the plain
   first word when the visitor asked for reduced motion. */
function useTypewriter(words: string[]) {
  const [text, setText] = useState(words[0] ?? "");

  useEffect(() => {
    if (words.length < 2 || prefersReducedMotion()) return;

    let word = 0;
    let chars = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const current = words[word];
      chars += deleting ? -1 : 1;
      setText(current.slice(0, chars));

      let delay = deleting ? 45 : 85;
      if (!deleting && chars === current.length) {
        deleting = true;
        delay = 1900;
      } else if (deleting && chars === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        delay = 320;
      }
      timer = setTimeout(step, delay);
    };

    timer = setTimeout(step, 2200);
    return () => clearTimeout(timer);
  }, [words]);

  return text;
}

/* Counts "10+" up from zero the first time it scrolls into view. Anything
   without a leading number is rendered verbatim. */
function StatValue({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { target, suffix } = useMemo(() => {
    const m = /^(\d+)(.*)$/.exec(value);
    return m
      ? { target: Number(m[1]), suffix: m[2] }
      : { target: null, suffix: value };
  }, [value]);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (target === null || !inView) return;
    if (prefersReducedMotion()) {
      setN(target);
      return;
    }

    const duration = 1100;
    const start = performance.now();
    let raf = requestAnimationFrame(function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      setN(Math.round(target * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    });
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <div
      ref={ref}
      className="text-2xl font-bold tracking-tight text-ink tabular-nums sm:text-4xl"
    >
      {target === null ? suffix : `${n}${suffix}`}
    </div>
  );
}

function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server can't know the visitor's theme, so hold the icon back until
  // after hydration rather than render the wrong one and swap.
  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Toggle theme"}
      title={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : undefined}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink-3 transition-colors hover:border-ink hover:text-ink",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {mounted && (
          <motion.span
            key={isDark ? "sun" : "moon"}
            initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
            transition={{ duration: 0.2 }}
            className="inline-flex"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
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
      className="grid h-4 w-4 shrink-0 place-items-center rounded-[3px] bg-line-strong text-[9px] font-bold uppercase text-ink-4"
      aria-hidden
    >
      {name.charAt(0)}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/*  Contact form                                                       */
/*                                                                     */
/*  This project has no backend, so rather than pretend to POST        */
/*  somewhere the form composes a pre-filled mail draft in the         */
/*  visitor's own client. It keeps working on a static deploy and      */
/*  never silently drops a message.                                    */
/* ------------------------------------------------------------------ */

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-contact-ink-2"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

const fieldClass =
  "w-full rounded-xl border border-contact-line bg-contact-field px-4 py-3 text-sm text-contact-ink outline-none transition-colors placeholder:text-contact-ink-2/60 focus:border-contact-accent";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [opened, setOpened] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Portfolio enquiry${form.name ? ` from ${form.name}` : ""}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-contact-line bg-contact-field/50 p-4 sm:p-8"
    >
      <div className="mb-6 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-contact-accent" />
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-contact-ink-2">
          Send a message
        </p>
      </div>

      <div className="space-y-5">
        <Field label="Name" htmlFor="cf-name">
          <input
            id="cf-name"
            type="text"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Jane Doe"
            className={fieldClass}
          />
        </Field>

        <Field label="Email" htmlFor="cf-email">
          <input
            id="cf-email"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            placeholder="jane@company.com"
            className={fieldClass}
          />
        </Field>

        <Field label="Message" htmlFor="cf-message">
          <textarea
            id="cf-message"
            required
            rows={4}
            value={form.message}
            onChange={update("message")}
            placeholder="What are you working on?"
            className={cn(fieldClass, "resize-y")}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-contact-btn px-6 py-3 text-sm font-medium text-contact-btn-fg transition-opacity hover:opacity-90"
      >
        <Mail className="h-4 w-4" />
        Compose email
      </button>

      <p
        aria-live="polite"
        className="mt-4 text-center text-xs text-contact-ink-2"
      >
        {opened
          ? "Your mail app should have opened with the message ready to send."
          : "Opens a pre-filled draft in your own mail app — nothing is sent from this site."}
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export function V2SinglePage() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const typedRole = useTypewriter(roles);

  // reading-progress line under the header
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.3,
  });

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

  // back-to-top visibility + header elevation
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
      setScrolled(window.scrollY > 8);
    };
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

  // Height of the fixed header — the landing point has to clear it.
  const HEADER_H = 64;

  const scrollTo = (id: string) => {
    setMenuOpen(false);

    if (id === "hero") {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    // Measured against the document rather than relying on scroll-margin, so
    // the landing point is the same whether or not the menu was open.
    const top = el.getBoundingClientRect().top + window.scrollY - HEADER_H;
    window.scrollTo({
      top: Math.max(0, top),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-surface text-ink antialiased selection:bg-brand selection:text-solid-fg">
      {/* ---------------------------------------------------------- */}
      {/*  Header                                                     */}
      {/* ---------------------------------------------------------- */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-surface/80 backdrop-blur-md transition-shadow duration-300",
          scrolled
            ? "border-line-strong shadow-[0_1px_24px_-12px_rgba(17,17,20,0.35)]"
            : "border-line"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button
            onClick={() => scrollTo("hero")}
            className="text-base font-semibold tracking-tight"
          >
            Ny Fong<span className="text-brand">.</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative text-sm transition-colors",
                  active === item.id
                    ? "text-ink"
                    : "text-ink-3 hover:text-ink"
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-brand"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 rounded-full bg-solid px-5 py-2 text-sm font-medium text-solid-fg transition-colors hover:bg-solid-hover sm:inline-flex"
            >
              Resume
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        {/* reading progress */}
        <motion.div
          style={{ scaleX: progress }}
          className="absolute inset-x-0 bottom-0 h-px origin-left bg-brand"
        />

        {/* mobile menu */}
        <AnimatePresence initial={false}>
          {menuOpen && (
            /* Overlays the page from below the bar rather than growing the
               header. Animating opacity/transform keeps this off the layout
               path — animating `height` here re-laid out the page on every
               frame and cancelled the in-flight smooth scroll. */
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-surface shadow-lg md:hidden"
            >
              <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className={cn(
                      "flex items-center justify-between border-b border-line py-3 text-left text-sm transition-colors last:border-b-0",
                      active === item.id
                        ? "font-medium text-brand"
                        : "text-ink-2 hover:text-ink"
                    )}
                  >
                    {item.label}
                    {active === item.id && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    )}
                  </button>
                ))}
                <a
                  href={cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="my-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-solid px-5 py-2.5 text-sm font-medium text-solid-fg"
                >
                  Resume <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">
        {/* -------------------------------------------------------- */}
        {/*  Hero                                                     */}
        {/* -------------------------------------------------------- */}
        <section id="hero" className="relative overflow-hidden">
          <div
            aria-hidden
            className="dot-grid pointer-events-none absolute inset-0"
          />
          <div
            aria-hidden
            className="brand-bloom pointer-events-none absolute inset-0"
          />
          <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-10 sm:pb-20 sm:pt-24">
          <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-xs font-medium text-ink-3">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
                  </span>
                  Available for new projects
                </div>

                {/* The hard break only helps once the line has room for it —
                    below sm the headline wraps naturally instead. */}
                <h1 className="mt-6 text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:mt-7 sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                  I build software, then{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-brand">break</span> it before attackers
                  do.
                </h1>

                <p
                  aria-label={roles.join(", ")}
                  className="mt-5 font-mono text-sm text-ink-3 sm:mt-6 sm:text-base"
                >
                  <span className="text-brand">$</span>{" "}
                  <span aria-hidden>{typedRole}</span>
                  <span aria-hidden className="caret" />
                </p>

                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-2 sm:mt-5 sm:text-lg">
                  I&apos;m{" "}
                  <span className="font-medium text-ink">Ny Fong</span> — a
                  penetration tester and full-stack developer. I ship reliable
                  products and break them before attackers can, blending clean
                  engineering with an offensive-security mindset.
                </p>

                {/* Full-width pills on phones — side by side they wrap into a
                    ragged second row at 390px. */}
                <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center">
                  <button
                    onClick={() => scrollTo("services")}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-solid px-6 py-3 text-sm font-medium text-solid-fg transition-colors hover:bg-solid-hover sm:w-auto"
                  >
                    View my work
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <a
                    href={cvUrl}
                    download="CV-Ny-Fong.pdf"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink sm:w-auto"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-2 sm:mt-9">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink-3 transition-colors hover:border-ink hover:text-ink"
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
              className="relative mx-auto w-full max-w-[280px] sm:max-w-sm lg:mx-0"
            >
              <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-brand/8" />
              <button
                type="button"
                onClick={() => setHeroIndex((i) => (i + 1) % heroImages.length)}
                aria-label="Swap photo"
                className="relative block aspect-[4/5] w-full overflow-hidden rounded-3xl border border-line-strong bg-chip"
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
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent" />
              </button>

              {/* Sibling of the button, not a child — buttons can't nest. */}
              {heroImages.length > 1 && (
                <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
                  {heroImages.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setHeroIndex(i)}
                      aria-label={`Show photo ${i + 1}`}
                      aria-current={i === heroIndex}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        i === heroIndex
                          ? "w-6 bg-surface"
                          : "w-1.5 bg-white/55 hover:bg-white/85"
                      )}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  About + stats                                            */}
        {/* -------------------------------------------------------- */}
        <section
          id="about"
          className="scroll-mt-16 border-t border-line bg-surface-2"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-28">
            <div className="grid gap-8 sm:gap-12 lg:grid-cols-[0.4fr_0.6fr]">
              <Reveal>
                <Eyebrow>About</Eyebrow>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:mt-5 sm:text-4xl">
                  Engineering meets an offensive mindset.
                </h2>
              </Reveal>

              <Reveal
                delay={0.05}
                className="space-y-4 text-base leading-relaxed text-ink-2 sm:space-y-5 sm:text-lg"
              >
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

            <Reveal className="mt-10 grid grid-cols-3 gap-4 border-t border-line-strong pt-8 sm:mt-16 sm:gap-6 sm:pt-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <StatValue value={s.value} />
                  <div className="mt-1 text-xs leading-snug text-ink-3 sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Services                                                 */}
        {/* -------------------------------------------------------- */}
        <section id="services" className="scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-28">
            <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>What I do</Eyebrow>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:mt-5 sm:text-4xl">
                  Services &amp; capabilities
                </h2>
              </div>
              <p className="max-w-sm text-ink-3">
                From secure back-ends to polished interfaces — and the testing
                that keeps them trustworthy.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-3 sm:gap-5">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.05}>
                  <div className="card-lift group relative flex h-full flex-col rounded-xl border border-line-strong bg-surface p-2.5 sm:rounded-2xl sm:p-7">
                    {/* Number + rule instead of an icon tile — the rule picks
                        up the brand colour on hover. */}
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="font-mono text-[10px] font-semibold text-brand sm:text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="h-px flex-1 bg-line-strong transition-colors duration-300 group-hover:bg-brand/40" />
                    </div>

                    <h3 className="mt-3.5 text-sm font-semibold leading-snug tracking-tight text-ink sm:mt-6 sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-snug text-ink-3 sm:mt-2.5 sm:text-sm sm:leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="mt-auto pt-3 sm:pt-6">
                      <div className="flex flex-wrap gap-1 border-t border-line pt-2.5 sm:gap-1.5 sm:pt-5">
                        {s.tools.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-chip px-1.5 py-0.5 font-mono text-[9px] tracking-wide text-ink-3 sm:px-2.5 sm:py-1 sm:text-[11px]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
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
          className="scroll-mt-16 border-t border-line bg-surface-2"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-28">
            <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Selected work</Eyebrow>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:mt-5 sm:text-4xl">
                  Featured projects
                </h2>
              </div>
              <p className="max-w-sm text-ink-3">
                A few things I&apos;ve designed, built and secured — swap in your
                own screenshots any time.
              </p>
            </Reveal>

            <div className="mt-10 grid sm:mt-14 grid-cols-3 gap-2 sm:gap-6 lg:grid-cols-3">
              {projects.map((p, i) => (
                <Reveal key={p.title} delay={(i % 3) * 0.05}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line-strong bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_-24px_rgba(17,17,20,0.4)]">
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-wider text-ink-4">
                        <span>{p.period}</span>
                        <span className="text-ink-5">·</span>
                        <span>{p.role}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-semibold text-ink">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-3">
                        {p.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-chip px-2.5 py-1 text-xs text-ink-2"
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
                              className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-colors hover:text-brand"
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
          className="scroll-mt-16 border-t border-line bg-surface"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-28">
            <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Eyebrow>Experience</Eyebrow>
                <h2 className="mt-4 text-2xl font-bold tracking-tight sm:mt-5 sm:text-4xl">
                  Selected work &amp; roles
                </h2>
              </div>
              <p className="max-w-sm text-ink-3">
                Where I&apos;ve shipped, secured and tested real systems — most
                recent first.
              </p>
            </Reveal>

            <ol className="relative mt-10 space-y-4 sm:mt-14 sm:space-y-6">
              {/* Rail: bright at the current role, fading into the past. */}
              <span
                aria-hidden
                className="absolute bottom-8 left-[7px] top-8 hidden w-px bg-gradient-to-b from-brand via-line-strong to-transparent sm:block"
              />

              {experience.map((item, i) => {
                const durationLabel = item.durationMonths
                  ? (() => {
                      const m = Math.max(0, item.durationMonths());
                      return ` · ${m} ${m === 1 ? "mo" : "mos"}`;
                    })()
                  : "";
                return (
                  <li key={i} className="relative sm:pl-12">
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 top-8 hidden h-3.5 w-3.5 rounded-full border-2 border-surface sm:block",
                        item.present
                          ? "bg-brand ring-4 ring-brand/15"
                          : "bg-ink-5"
                      )}
                    />

                    <Reveal delay={i * 0.05}>
                      <article
                        className="card-lift rounded-2xl border border-line-strong bg-surface p-4 sm:p-7"
                      >
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <p className="font-mono text-xs uppercase tracking-wider text-ink-4">
                            {item.date}
                            {durationLabel}
                          </p>
                          {item.present && (
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 px-2.5 py-0.5 text-[11px] font-medium text-brand">
                              <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
                              </span>
                              Now
                            </span>
                          )}
                          {item.employment && (
                            <span className="rounded-full border border-line-strong px-2.5 py-0.5 text-[11px] font-medium text-ink-3">
                              {item.employment}
                            </span>
                          )}
                          <span className="ml-auto font-mono text-xs text-ink-5">
                            {String(experience.length - i).padStart(2, "0")}
                          </span>
                        </div>

                        <div className="mt-4 flex items-start gap-3 sm:gap-4">
                          {/* Deliberately white in both themes — these are
                              dark-on-transparent logos that would disappear
                              against a dark plate. */}
                          <div className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-line-strong bg-white sm:h-12 sm:w-12">
                            <Image
                              src={item.logo}
                              alt=""
                              width={48}
                              height={48}
                              className="h-full w-full object-contain p-1"
                            />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-base font-semibold leading-snug text-ink sm:text-lg">
                              {item.title}
                            </h3>
                            <p className="mt-0.5 text-xs leading-snug text-ink-3 sm:text-sm">
                              {item.org}
                            </p>
                          </div>
                        </div>

                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-2 sm:text-base">
                          {item.description}
                        </p>

                        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:mt-5 sm:gap-y-2.5 sm:grid-cols-2">
                          {item.bullets.map((b) => (
                            <li
                              key={b}
                              className="flex gap-2 text-[13px] leading-snug text-ink-2 sm:gap-2.5 sm:text-sm"
                            >
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>

                        {item.stack && item.stack.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-line pt-4 sm:mt-6 sm:gap-2 sm:pt-5">
                            {item.stack.map((s) => (
                              <span
                                key={s}
                                className="inline-flex items-center gap-1.5 rounded-full bg-chip px-2.5 py-1 text-[11px] text-ink-2 sm:px-3 sm:text-xs"
                              >
                                <SkillIcon name={s} />
                                {s}
                              </span>
                            ))}
                          </div>
                        )}
                      </article>
                    </Reveal>
                  </li>
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
          className="scroll-mt-16 border-t border-line bg-surface-2"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-28">
            <Reveal>
              <Eyebrow>Recognition</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:mt-5 sm:text-4xl">
                Awards &amp; achievements
              </h2>
            </Reveal>

            <div className="mt-10 grid sm:mt-14 grid-cols-3 gap-2 sm:gap-6 lg:grid-cols-3">
              {awards.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) * 0.05}>
                  <article className="group card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-line-strong bg-surface">
                    <button
                      type="button"
                      onClick={() => setLightbox(awardStart[i])}
                      aria-label={`View ${a.title}`}
                      className="relative block aspect-[4/3] w-full overflow-hidden bg-chip"
                    >
                      <Image
                        src={a.images[0]}
                        alt={a.title}
                        fill
                        sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 100vw"
                        className={cn(
                          "transition-transform duration-500 group-hover:scale-[1.04]",
                          a.fit === "contain"
                            ? "object-contain p-3"
                            : "object-cover"
                        )}
                      />
                      <span className="absolute left-1.5 top-1.5 inline-flex items-center gap-1 rounded-full bg-surface/95 px-1.5 py-0.5 text-[9px] font-semibold text-brand shadow-sm backdrop-blur sm:left-3 sm:top-3 sm:gap-1.5 sm:px-3 sm:py-1 sm:text-xs">
                        {a.verifyUrl ? (
                          <BadgeCheck className="h-3.5 w-3.5" />
                        ) : (
                          <Trophy className="h-3.5 w-3.5" />
                        )}
                        {a.badge}
                      </span>
                      {a.images.length > 1 && (
                        <span className="absolute bottom-1.5 right-1.5 inline-flex items-center gap-1 rounded-full bg-black/55 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur sm:bottom-3 sm:right-3 sm:px-2.5 sm:py-1 sm:text-[11px]">
                          <Images className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
                          {a.images.length}
                        </span>
                      )}
                      <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface/90 text-ink shadow sm:h-11 sm:w-11">
                          <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        </span>
                      </span>
                    </button>

                    <div className="flex flex-1 flex-col p-2.5 sm:p-5">
                      <div className="flex items-start justify-between gap-1.5">
                        <h3 className="text-[12px] font-semibold leading-snug text-ink sm:text-base">
                          {a.title}
                        </h3>
                        <span className="shrink-0 pt-0.5 font-mono text-[9px] text-ink-4 sm:text-xs">
                          {a.year}
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] leading-snug text-ink-3 sm:text-sm">
                        {a.issuer}
                      </p>

                      {a.verifyUrl && (
                        <a
                          href={a.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto inline-flex w-fit items-center gap-1 pt-2.5 text-[10px] font-medium text-ink transition-colors hover:text-brand sm:gap-1.5 sm:pt-4 sm:text-sm"
                        >
                          Verify
                          <span className="hidden sm:inline">credential</span>
                          <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                        </a>
                      )}
                    </div>
                  </article>
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
          className="scroll-mt-16 border-t border-line bg-surface"
        >
          <div className="mx-auto max-w-6xl px-6 py-16 sm:py-28">
            <Reveal>
              <Eyebrow>Toolbox</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold tracking-tight sm:mt-5 sm:text-4xl">
                Tech stack
              </h2>
            </Reveal>

            <div className="mt-8 sm:mt-12">
              {hardSkills.map((group) => (
                <Reveal
                  key={group.category}
                  className="grid gap-3 border-t border-line-strong py-5 sm:gap-4 sm:py-7 sm:grid-cols-[220px_1fr]"
                >
                  <h3 className="text-sm font-semibold text-ink">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface px-3 py-1 text-xs text-ink-2 transition-colors hover:border-brand hover:text-brand sm:gap-2 sm:px-3.5 sm:py-1.5 sm:text-sm"
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
        <section
          id="contact"
          className="edge-scan scroll-mt-16 bg-contact-bg text-contact-ink"
        >
          <div className="mx-auto max-w-6xl px-6 py-20 sm:py-36">
            <div className="grid gap-10 sm:gap-16 lg:grid-cols-[1fr_0.9fr]">
              <Reveal>
                <Eyebrow tone="light">Contact</Eyebrow>
                <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:mt-6 sm:text-5xl sm:leading-[1.05]">
                  Let&apos;s build something{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-contact-accent">secure</span> together.
                </h2>
                <p className="mt-4 max-w-xl text-base text-contact-ink-2 sm:mt-6 sm:text-lg">
                  Open to new opportunities and collaborations. The fastest way
                  to reach me is email — I usually reply within a day.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-contact-btn px-5 py-3 text-sm font-medium text-contact-btn-fg transition-opacity hover:opacity-90 sm:w-auto sm:px-6"
                  >
                    <Mail className="h-4 w-4 shrink-0" />
                    <span className="truncate">{email}</span>
                  </a>
                  <a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-contact-line px-6 py-3 text-sm font-medium text-contact-ink transition-colors hover:border-contact-accent sm:w-auto"
                  >
                    View resume
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-2 sm:mt-10">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-contact-line text-contact-ink-2 transition-colors hover:border-contact-accent hover:text-contact-ink"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- */}
        {/*  Footer                                                   */}
        {/* -------------------------------------------------------- */}
        <footer className="border-t border-line bg-surface">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-7 text-center sm:flex-row sm:gap-4 sm:py-8 sm:text-left">
            <p className="text-sm font-semibold tracking-tight">
              Ny Fong<span className="text-brand">.</span>
            </p>
            <p className="text-xs text-ink-4 sm:text-sm">
              © {new Date().getFullYear()} Ny Fong — all rights reserved.
            </p>
            <p className="text-xs text-ink-4 sm:text-sm">
              Built with Next.js &amp; Tailwind
            </p>
          </div>
        </footer>
      </main>

      {/* Sticky dock: back-to-top + the contact CTA. The CTA steps aside once
          you've actually reached the contact section. */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 sm:bottom-6 sm:right-6 sm:gap-3">
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-solid text-solid-fg shadow-lg transition-colors hover:bg-solid-hover"
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active !== "contact" && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => scrollTo("contact")}
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand px-4 text-sm font-medium text-solid-fg shadow-lg transition-opacity hover:opacity-90 sm:px-5"
            >
              <Mail className="h-4 w-4 shrink-0" />
              Send message
            </motion.button>
          )}
        </AnimatePresence>
      </div>

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
