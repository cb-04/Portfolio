"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import BlurFade from "@/components/BlurFade"; // adjust path if needed
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.2;

export default function Work() {
  const { work } = PORTFOLIO_DATA;

  return (
    <section id="work" className="flex flex-col items-center p-8 mt-16">
      <div className="mx-auto w-full max-w-3xl space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Work Experience
          </h2>
        </BlurFade>

        <div className="space-y-6">
          {work.map((w, index) => (
            <BlurFade
              key={index}
              delay={BLUR_FADE_DELAY * 2 + index * 0.1}
            >
              <WorkCard job={w} />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ job }: { job: typeof PORTFOLIO_DATA.work[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Link href={job.href || "#"} target="_blank">
      <div className="relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md cursor-pointer">
        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Logo */}
          {job.logoUrl && (
            <div className="flex-shrink-0">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
                <Image
                  src={job.logoUrl}
                  alt={job.company}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
            </div>
          )}

          {/* Text content */}
          <div className="flex-1 ml-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                {job.company}

                {job.description && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault(); 
                      setExpanded(!expanded);
                    }}
                    className="text-gray-500 hover:text-gray-700 transition"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-300 ${
                        expanded ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                )}
              </h3>

              <span className="text-sm text-gray-500">
                {job.start} – {job.end}
              </span>
            </div>

            <p className="mt-2 text-sm font-medium text-gray-700">
              {job.position}
            </p>
          </div>
        </div>

        {/* Dropdown description */}
        {job.description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden ml-3" // 👈 aligns dropdown with text
          >
            <p className="mt-2 text-sm text-gray-700">{job.description}</p>
          </motion.div>
        )}
      </div>
    </Link>
  );
}
