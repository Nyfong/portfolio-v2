import type React from "react";
import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { V2LayoutShell } from "./_versions/v2/LayoutShell";

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
  title: {
    default: "Ny Fong - Cybersecurity Engineer & Developer",
    template: "%s | Your Name",
  },
  description:
    "Portfolio of a designer and developer creating beautiful digital experiences",
  keywords: ["design", "development", "portfolio", "web design", "UI/UX"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "https://cdn-icons-png.flaticon.com/512/5339/5339181.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "https://cdn-icons-png.flaticon.com/512/5339/5339181.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Your Name - Designer & Developer",
    description:
      "Portfolio of a designer and developer creating beautiful digital experiences",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "https://cdn-icons-png.flaticon.com/512/5339/5339181.png",
        width: 1200,
        height: 630,
        alt: "Your Name Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Designer & Developer",
    description:
      "Portfolio of a designer and developer creating beautiful digital experiences",
    creator: "@yourhandle",
    images: ["https://cdn-icons-png.flaticon.com/512/5339/5339181.png"],
  },
  alternates: {
    types: {
      "application/rss+xml": "https://yourportfolio.com/rss",
    },
  },
  manifest: "/site.webmanifest",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/5339/5339181.png"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
