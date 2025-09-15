"use client";

import React from "react";
import { motion } from "framer-motion";
import BlurFade from "@/components/BlurFade";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const BLUR_FADE_DELAY = 0.1;

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8"
    >
      <div className="flex flex-col items-center space-y-4 max-w-6xl mx-auto">
        {/* Heading */}
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Here&apos;s my latest work.
          </h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-xl md:text-2xl max-w-2xl text-gray-400">
            I&#39;ve tried my hands with a variety of projects, from simple websites to complex web apps. 
            Here&#39;s a few of my favourites.
          </p>
        </BlurFade>

        {/* Project Cards */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="grid gap-8 sm:grid-cols-2 justify-center mt-10">
            {PORTFOLIO_DATA.projects.map((proj, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="max-w-xs mx-auto rounded-2xl border-2 border-black bg-white
                           p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]
                           hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]
                           transition-all duration-200 text-left"
              >
                <h3 className="text-xl font-semibold mb-2">{proj.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{proj.date}</p>
                <p className="text-gray-800 mb-4">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full border border-black
                                 bg-white text-gray-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {proj.source && (
                  <a
                    href={proj.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-medium text-black hover:underline"
                  >
                    View Source ↗
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </BlurFade>
        <div className="h-18" />
      </div>
    </section>
  );
}
