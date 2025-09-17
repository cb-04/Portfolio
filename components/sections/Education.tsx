"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import BlurFade from "@/components/BlurFade"; // adjust path if needed
import Image from "next/image";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.2;

export default function Education() {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="flex flex-col items-center p-8 mt-16">
      <div className="mx-auto w-full max-w-3xl space-y-10">
        <BlurFade delay={BLUR_FADE_DELAY * 1}>
          <h2 className="text-3xl font-bold tracking-tight text-center">
            Education
          </h2>
        </BlurFade>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <BlurFade
              key={index}
              delay={BLUR_FADE_DELAY * 2 + index * 0.1}
            >
              <Link href={edu.href || "#"} target="_blank">
                <div className="relative flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md cursor-pointer">
                  {/* Circular logo */}
                  {edu.logoUrl && (
                    <div className="flex-shrink-0">
                      <div className="h-12 w-12 overflow-hidden rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center">
                        <Image
                          src={edu.logoUrl}
                          alt={edu.institution}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  {/* Text content */}
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu.institution}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {edu.start} – {edu.end}
                    </span>
                  </div>


                    <p className="mt-2 text-sm font-medium text-gray-700">
                      {edu.degree}
                    </p>
                  </div>
                </div>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
