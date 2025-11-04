"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft, Search, Smile } from "lucide-react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { DiJenkins } from "react-icons/di";
import { FaBuilding } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 relative overflow-hidden">
      {/* Animated Background */}
      <div
        className="absolute inset-0 -z-10 w-screen h-full"
        style={{ left: "50%", transform: "translateX(-50%)" }}
      >
        <FlickeringGrid
          className="absolute inset-0 z-0 w-full h-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.1}
          responsive={true}
        />
      </div>

      <div className="container mx-auto px-4 py-16 min-h-screen flex items-center justify-center">
        <Card className="max-w-2xl w-full border-2 shadow-2xl">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-8">
              {/* Animated 404 */}
              <div className="relative">
                <h1 className="text-8xl md:text-9xl font-bold text-primary/20 select-none">
                  404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-7xl text-primary">
                    <DiJenkins />
                  </div>
                </div>
              </div>

              {/* Cute Message */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                  <Smile className="w-8 h-8 text-primary" />
                  Oops! Page not found
                </h2>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  The page you're looking for seems to have wandered off into
                  the digital void. Don't worry, even the best developers get
                  lost sometimes!
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button size="lg" asChild className="gap-2">
                  <Link href="/">
                    <Home className="w-4 h-4" />
                    Go Home
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </Button>
                <Button size="lg" variant="ghost" asChild className="gap-2">
                  <Link href="/blog">
                    <Search className="w-4 h-4" />
                    Explore Blog
                  </Link>
                </Button>
              </div>

              {/* Fun Fact */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <span className="font-semibold text-foreground">
                    Fun fact:
                  </span>{" "}
                  <span>
                    404 errors are named after Room 404, where the original web
                    server at CERN was located!
                  </span>
                  <FaBuilding className="text-primary" />
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
