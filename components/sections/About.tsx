"use client";

import Markdown from "react-markdown";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import BlurFade from "@/components/BlurFade";

const BLUR_FADE_DELAY = 0.1;

export default function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="flex flex-col items-center p-8 mt-16">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <h2 className="text-3xl font-bold tracking-tight text-center">About</h2>
        </BlurFade>

        <div className="prose max-w-full text-pretty font-sans text-muted-foreground text-sm space-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <Markdown>{about.story_first}</Markdown>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <Markdown>{about.story_second}</Markdown>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown>{about.story_third}</Markdown>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
