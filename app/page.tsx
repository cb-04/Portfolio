// app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Work from "@/components/sections/Work";
import WorkExperience from "@/components/sections/Work";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Education />
      <Work />
    </main>
  );
}