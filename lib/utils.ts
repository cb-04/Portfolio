import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiFlask, SiMysql, SiDocker } from "react-icons/si";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TECH_ICONS = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Flask", Icon: SiFlask },
  { name: "MySQL", Icon: SiMysql },
  { name: "Docker", Icon: SiDocker },
];