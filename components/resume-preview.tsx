"use client";

import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, FileText, ZoomIn } from "lucide-react";
import Image from "next/image";

export function ResumePreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomVisible, setZoomVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const ZOOM_SCALE = 2.5;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;

    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
    setZoomVisible(true);
  };

  const handleMouseLeave = () => {
    setZoomVisible(false);
  };

  return (
    <section className="space-y-8 mb-10">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">Resume</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hover over the preview to zoom in. Click to view full size.
        </p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Resume Preview
            </CardTitle>
            <Button asChild className="gap-2">
              <a href="/nyfong-resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid lg:grid-cols-2 gap-4">
            {/* Image Container with Zoom Lens */}
            <div className="relative">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <div
                  ref={imageContainerRef}
                  className="relative w-full rounded-lg overflow-hidden border-2 border-border bg-muted/20 cursor-crosshair"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Click to open dialog */}
                  <DialogTrigger asChild>
                    <div className="relative w-full">
                      <Image
                        src="/my-re-pic.png"
                        alt="Resume Preview - Hover to zoom, click to enlarge"
                        width={800}
                        height={1000}
                        className="w-full h-auto object-contain"
                        priority
                      />
                    </div>
                  </DialogTrigger>
                </div>

                <DialogContent className="max-w-5xl max-h-[90vh] overflow-auto p-2">
                  <DialogHeader className="sr-only">
                    <DialogTitle>Resume Preview</DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full">
                    <Image
                      src="/my-re-pic.png"
                      alt="Resume Preview"
                      width={1200}
                      height={1500}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex justify-center pt-4">
                    <Button asChild className="gap-2">
                      <a href="/nyfong-resume.pdf" download>
                        <Download className="h-4 w-4" />
                        Download Resume
                      </a>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Zoom Preview Area (Taobao style) */}
            <div className="hidden lg:block">
              <div className="sticky top-4 h-[500px] rounded-lg border-2 border-border bg-muted/20 overflow-hidden">
                {zoomVisible && imageContainerRef.current ? (
                  <div
                    className="w-full h-full relative"
                    style={{
                      backgroundImage: 'url("/my-re-pic.png")',
                      backgroundSize: `${ZOOM_SCALE * 100}%`,
                      backgroundPosition: `${
                        (mousePosition.x / imageContainerRef.current.offsetWidth) * 100
                      }% ${
                        (mousePosition.y / imageContainerRef.current.offsetHeight) * 100
                      }%`,
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center space-y-2">
                      <ZoomIn className="w-12 h-12 mx-auto opacity-50" />
                      <p className="text-sm">Hover over the image to zoom</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
