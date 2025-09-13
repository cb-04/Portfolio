// app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Work from "@/components/sections/Work";
import TechStack from "@/components/sections/TechStack";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Work />
      <TechStack />
    </main>
  );
}