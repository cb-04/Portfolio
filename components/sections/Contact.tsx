"use client";

import BlurFade from "@/components/BlurFade";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import React from "react";
import { Mail, Linkedin, Github, Globe } from "lucide-react"; 

const BLUR_FADE_DELAY = 0.1;

export default function ContactCircle() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8"
    >
      <div className="flex flex-col items-center space-y-6 max-w-3xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Get in Touch.
          </h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-xl md:text-2xl text-gray-400">
            Want to chat? Feel free to reach out via{" "}
            <a
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>{" "}
            or connect on{" "}
            <a
              href={PORTFOLIO_DATA.contact.linkedin}
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
            <br />
            I&apos;ll respond when I can!
          </p>
        </BlurFade>
        <div className="h-8" />
        {/* --- Circular orbit of icons --- */}
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* outer rings */}
            <div className="absolute w-full h-full rounded-full border border-gray-300/30" />
            <div className="absolute w-40 h-40 rounded-full border border-gray-300/20" />

            {/* center hub */}
            <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center">
              <span className="font-bold text-gray-800">Hi!</span>
            </div>

            {/* orbiting icons */}
            <motion.a
              whileHover={{ scale: 1.2 }}
              href={`mailto:${PORTFOLIO_DATA.contact.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -top-6 left-1/2 -translate-x-1/2
                         bg-white border-2 border-black rounded-full p-3 shadow-md"
            >
              <Mail className="w-6 h-6 text-black" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href={PORTFOLIO_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 -left-6 -translate-y-1/2
                         bg-white border-2 border-black rounded-full p-3 shadow-md"
            >
              <Linkedin className="w-6 h-6 text-black" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href={PORTFOLIO_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 left-1/2 -translate-x-1/2
                         bg-white border-2 border-black rounded-full p-3 shadow-md"
            >
              <Github className="w-6 h-6 text-black" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href={PORTFOLIO_DATA.contact.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-1/2 -right-6 -translate-y-1/2
                         bg-white border-2 border-black rounded-full p-3 shadow-md"
            >
              <Globe className="w-6 h-6 text-black" />
            </motion.a>
          </div>
        </BlurFade>
        <div className="h-8" />
      </div>
    </section>
  );
}
