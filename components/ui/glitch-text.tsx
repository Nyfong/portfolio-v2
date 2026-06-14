import type { ElementType } from "react";
import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  as?: ElementType;
  className?: string;
}

export function GlitchText({ text, as: Component = "span", className }: GlitchTextProps) {
  return (
    <Component data-text={text} className={cn("glitch", className)}>
      {text}
    </Component>
  );
}
