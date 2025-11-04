"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { Button } from "./ui/button";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-5">
      <nav className=" flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-5">
          <Image
            src="/logo-web.png"
            alt="Ny Foong Logo"
            width={56}
            height={56}
            className="object-cover"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2"
          >
            <a href="/nyfong-resume.pdf" download>
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </Button>
          <AnimatedThemeToggler className="h-9 w-9 rounded-full border border-border bg-background hover:bg-muted transition-colors" />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-4">
          <AnimatedThemeToggler className="h-9 w-9 rounded-full border border-border bg-background hover:bg-muted transition-colors" />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="h-9 w-9"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
          <div className="container py-4">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md",
                      pathname === item.href
                        ? "text-foreground bg-muted"
                        : "text-muted-foreground hover:bg-muted"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full gap-2"
              >
                <a href="/nyfong-resume.pdf" download>
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
