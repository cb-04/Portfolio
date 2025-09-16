"use client";

import BlurFade from "@/components/BlurFade";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.1;

export default function MindShelf() {
  const { books } = PORTFOLIO_DATA;
  return (
    
    <section
      id="tech-stack"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8"
    >
      <div className="flex flex-col items-center space-y-4 max-w-3xl mx-auto">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Mind Shelf.</h1>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <p className="text-xl md:text-2xl text-gray-400">
            A corner of the web for my favourite authors and their voices and visions.
          </p>
        </BlurFade>
        <div className="w-full max-w-4xl mx-auto">
        <motion.div
          className="mt-10 flex space-x-6 overflow-x-auto py-4 px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {books.map((book, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative flex-shrink-0 w-40"
            >
              {/* Book Cover */}
              <div className="relative w-40 h-56 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition cursor-pointer group">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover"
                />

                {/* Hover Review */}
                <div className="absolute inset-0 bg-black bg-opacity-80 text-white opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4 text-sm text-center rounded-xl">
                  {book.review}
                </div>
              </div>
              <h3 className="mt-2 font-medium text-lg text-center">{book.title}</h3>
              <p className="text-gray-500 text-sm text-center">{book.author}</p>
            </motion.div>
              ))}
            </motion.div>
            </div>
        
      </div>
      <div className="h-20" />
    </section>
  );
}
