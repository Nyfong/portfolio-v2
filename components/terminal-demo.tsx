import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export function TerminalDemo() {
  return (
    <Terminal>
      <TypingAnimation>
        &gt; npm create next-app@latest my-portfolio
      </TypingAnimation>

      <AnimatedSpan className="text-green-500">
        ✔ Creating Next.js project...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Installing dependencies...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Setting up TypeScript...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Configuring Tailwind CSS...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Adding shadcn/ui components...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Setting up MagicUI components...
      </AnimatedSpan>

      <AnimatedSpan className="text-green-500">
        ✔ Optimizing for production...
      </AnimatedSpan>

      <AnimatedSpan className="text-blue-500">
        <span>ℹ Project structure:</span>
        <span className="pl-2">- app/ (App Router)</span>
        <span className="pl-2">- components/ (Reusable UI)</span>
        <span className="pl-2">- lib/ (Utilities)</span>
      </AnimatedSpan>

      <TypingAnimation className="text-muted-foreground">
        Success! Portfolio website is ready.
      </TypingAnimation>

      <TypingAnimation className="text-muted-foreground">
        Run 'npm run dev' to start development.
      </TypingAnimation>
    </Terminal>
  );
}
