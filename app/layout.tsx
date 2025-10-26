import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/lib/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ny Fong - Designer & Developer",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/5339/5339181.png"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
