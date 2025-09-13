

"use client";

import BlurFade from "@/components/BlurFade";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { CoolBadge } from "@/components/ui/cool-badge"; 
const BLUR_FADE_DELAY = 0.1;

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8"
    >
      <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Tech Stack.</h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-xl md:text-2xl text-gray-400">
            The tools and technologies I&apos;ve worked with.
          </p>
        </BlurFade>
      </div>
    </section>
  );
}
