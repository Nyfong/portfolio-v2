import type React from "react";
import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { V2LayoutShell } from "./_versions/v2/LayoutShell";
import {
  siteUrl,
  siteName,
  siteDescription,
  person,
  sameAs,
} from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${person.name} (NyFong) — ${person.jobTitle}`,
    template: `%s | ${person.name}`,
  },
  description: siteDescription,
  /* Name variants first: these are the queries the site should own. */
  keywords: [
    person.name,
    ...person.alternateNames,
    "Ny Fong portfolio",
    "Ny Fong developer",
    "NyFong cybersecurity",
    "penetration tester Cambodia",
    "cybersecurity engineer Phnom Penh",
    "full-stack developer Cambodia",
    ...person.roles,
  ],
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  publisher: person.name,
  applicationName: siteName,
  category: "technology",
  openGraph: {
    type: "profile",
    firstName: "Ny",
    lastName: "Fong",
    username: "nyfong",
    locale: "en_US",
    url: siteUrl,
    title: `${person.name} (NyFong) — ${person.jobTitle}`,
    description: siteDescription,
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} (NyFong) — ${person.jobTitle}`,
    description: siteDescription,
  },
  /* Tells Google it may show full-size image and text previews, which is what
     surfaces a rich result for a name query rather than a bare blue link. */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${siteUrl}/rss`,
    },
  },
  manifest: "/site.webmanifest",
};

/* schema.org Person — the strongest signal available for tying the name
   variants ("Ny Fong", "NyFong", "Fong") to this site as one entity. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: person.name,
  alternateName: person.alternateNames,
  url: siteUrl,
  email: `mailto:${person.email}`,
  jobTitle: person.jobTitle,
  description: siteDescription,
  knowsAbout: [
    "Penetration Testing",
    "Application Security",
    "Security Research",
    "Full-Stack Development",
    "Next.js",
    "FastAPI",
    "Spring Boot",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: person.locality,
    addressCountry: person.country,
  },
  sameAs,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  inLanguage: "en",
  publisher: { "@id": `${siteUrl}/#person` },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Resolves the theme before first paint: a stored choice wins,
            otherwise dark. Without this the page paints one theme and then
            flips, which is worse than either theme. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='portfolio-theme';var s=localStorage.getItem(k);var t=(s==='dark'||s==='light')?s:'dark';var e=document.documentElement;e.classList.remove('light','dark');e.classList.add(t);e.style.colorScheme=t;}catch(err){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}})();`,
          }}
        />
        {/* app/icon.svg supplies the modern favicon via the file convention;
            favicon.ico stays as the legacy fallback. */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <V2LayoutShell />
        </ThemeProvider>
      </body>
    </html>
  );
}
