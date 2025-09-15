// app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Work from "@/components/sections/Work";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Work />
      <TechStack />
      <Projects />
    </main>
  );
}