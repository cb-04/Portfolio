

"use client";

import BlurFade from "@/components/BlurFade";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.1;

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8"
    >
      <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Tech Stack.</h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-xl md:text-2xl text-gray-400">
            The tools and technologies I&apos;ve worked with.
          </p>
        </BlurFade>

        {/* Rolling Icons with BlurFade */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="w-full mt-10 space-y-10">
            {PORTFOLIO_DATA.skills.map((group) => (
              <div key={group.title} className="overflow-hidden">
                <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-300">
                  {group.title}
                </h2>

                {/* Motion wrapper for left-to-right loop */}
                <motion.div
                  className="flex gap-10 w-[400px] mx-auto"
                  animate={{ x: ["-100%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                  }}
                >
                  {/* duplicate list for seamless loop */}
                  {group.list.concat(group.list).map((skill, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <Image
                        src={skill.src}      // e.g. "/icons/react.png"
                        alt={skill.name}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                      <span className="mt-2 text-sm text-gray-400">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
