/* Single source of truth for site identity — metadata, sitemap, robots and
   the JSON-LD Person block all read from here, so the domain is set once.

   NOTE: set NEXT_PUBLIC_SITE_URL in the deploy environment. The fallback is
   only a dev default; shipping the wrong canonical host tells Google to index
   a domain that isn't yours, which is worse than having no canonical at all. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const person = {
  name: "Ny Fong",
  /* Name variants people actually search for. Used in keywords and as
     schema.org alternateName so Google links the spellings to one entity. */
  alternateNames: ["NyFong", "Fong", "Ny Fong Cambodia", "នី ហុង"],
  jobTitle: "Cybersecurity Engineer & Full-Stack Developer",
  roles: [
    "Penetration Tester",
    "Full-Stack Developer",
    "Security Researcher",
    "QA Engineer",
  ],
  email: "litongfong12@gmail.com",
  github: "https://github.com/Nyfong",
  linkedin: "https://www.linkedin.com/in/ny-fong-5b1ab528a/",
  locality: "Phnom Penh",
  country: "Cambodia",
} as const;

export const siteName = "Ny Fong — Cybersecurity Engineer & Developer";

export const siteDescription =
  "Ny Fong (NyFong) is a cybersecurity engineer and full-stack developer in Phnom Penh, Cambodia — penetration testing, security research, and web apps built with Next.js, FastAPI and Spring Boot.";

/* Profiles Google can use to corroborate the entity behind the name. */
export const sameAs: string[] = [person.github, person.linkedin];
