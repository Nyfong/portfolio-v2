"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const CHARACTERS =
  "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

interface MatrixRainProps {
  className?: string;
}

export function MatrixRain({ className }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () =>
        Math.floor((Math.random() * height) / fontSize) * -1
      );
    };

    setup();

    let animationFrameId: number;
    let isInView = !document.hidden;

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.fillStyle = "rgba(10, 13, 10, 0.08)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px var(--font-jetbrains-mono, monospace)`;

      for (let i = 0; i < columns; i++) {
        const char =
          CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "rgba(0, 255, 159, 0.85)";
        ctx.fillText(char, x, y);

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const animate = () => {
      if (isInView) draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const onResize = () => setup();
    const onVisibilityChange = () => {
      isInView = !document.hidden;
    };

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 opacity-[0.12]",
        className
      )}
    />
  );
}
