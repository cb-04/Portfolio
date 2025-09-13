import Markdown from "react-markdown";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section id="about" className="flex flex-col items-center p-8 mt-16">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <h2 className="text-3xl font-bold tracking-tight text-center">About</h2>
        <div className="prose max-w-full text-pretty font-sans text-muted-foreground text-sm">
          <Markdown>{about.story_first}</Markdown>
          <div className="my-6" />
          <Markdown>{about.story_second}</Markdown>
          <div className="my-6" />
          <Markdown>{about.story_third}</Markdown>
        </div>
      </div>
    </section>
  );
}