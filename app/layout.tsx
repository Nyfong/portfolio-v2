import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/lib/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Your Name - Designer & Developer",
    template: "%s | Your Name",
  },
  description: "Portfolio of a designer and developer creating beautiful digital experiences",
  keywords: ["design", "development", "portfolio", "web design", "UI/UX"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    title: "Your Name - Designer & Developer",
    description: "Portfolio of a designer and developer creating beautiful digital experiences",
    siteName: "Your Name Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Designer & Developer",
    description: "Portfolio of a designer and developer creating beautiful digital experiences",
    creator: "@yourhandle",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://yourportfolio.com/rss",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
