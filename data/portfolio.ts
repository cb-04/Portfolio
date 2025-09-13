// data/portfolio.ts

export const PORTFOLIO_DATA = {
  // Hero Section
  name: "Hi, I'm Chandrabali!",
  title: "In Bengali, I’m Chandrabali (চন্দ্রাবলী).\n“Chandra” (like chawn-dra),“bali” (like bowl-ee).",
  bio: "A pre-final year student at Indian Institute of Technnology Kharagpur with deep interest in anything tech. I love building fun and meaningful apps with React Native.",
  avatar: "my_photo.jpeg", 

  // About Section
  about: {
    story_first: "Growing up in Kolkata, a city buzzing with culture, chaos, and creativity, I learned early on that life moves at its own tempo-sometimes slow, sometimes relentless, but always full of stories waiting to be told. Well, riding the wave brought me here.",
    story_second: "Getting into IIT Kharagpur was a dream come true, but here I’ve noticed that people often chase knowledge out of obligation. For me however, learning clicks differently: I need time, ideas on paper, and a little patience until things make sense. Inefficient? Maybe. Fun? Absolutely. This is my corner to experiment, tinker, and create at my own pace.",
    story_third: "When I am not in class or wrestling with submission deadlines, you'll find me tucked in my hostel room writing stories and poems that give shape to my introvert-coded feelings. That's my way of making sense of the world one thought at a time.",
  },

  // Work Experience Section
  work: [
    {
      company: "University of Oulu",
      position: "Research Intern",
      period: "May 2025 - July 2025",
      description: "",
    },
    // Add more work entries
  ],

  // Skills Section
  skills: [
    { title: "Languages & Frontend", list: ["TypeScript", "JavaScript", "React", "Next.js"] },
    { title: "Backend & DevOps", list: ["Node.js", "Flask", "MySQL", "Docker"] },
    // Add more skill categories
  ],

  // Projects Section
  projects: [
    {
      name: "MEO-Bench",
      date: "2024",
      description: "A benchmark to evaluate an LLM's ability to generate audience-captive medical explanations...",
      tech: ["Python", "LLM", "Medical AI"],
      source: "https://github.com/meo-bench",
    },
    // Add more projects
  ],

  // Contact Section
  contact: {
    email: "chandrabalibiswas04@gmail.com",
    linkedin: "https://www.linkedin.com/in/chandrabali-biswas-18b48a269/",
    github: "https://github.com/cb-04",
  },
};