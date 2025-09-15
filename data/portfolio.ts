// data/portfolio.ts

export const PORTFOLIO_DATA = {
  // Hero Section
  name: "Hi, I'm Chandrabali!",
  title: "In Bengali, I’m Chandrabali (চন্দ্রাবলী).\n“Chandra” (like chawn-dra),“bali” (like bowl-ee).",
  bio: "A pre-final year student at Indian Institute of Technnology Kharagpur with deep interest in anything tech. I love building fun and meaningful apps with React Native.",
  avatar: "./my_photo.jpeg", 

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
      position: "Research Internship",
      start: "May 2025",
      end: "July 2025",
      logoUrl:"./oulu_logo.jpeg",
      href: "https://www.oulu.fi/en",
      description: "Implemented SLAM-based path planning system and boosted its efficiency by using the Beetle Antennae Search (BAS) algorithm, enabling adaptive real-time navigation in unknown environments.Integrated BAS with SLAM to optimize trajectory decisions and minimize localization error during exploration.Delivered a robust framework for autonomous robots to map and plan paths in dynamic, GPS-denied spaces.",
    },
    // Add more work entries
  ],

  education: [
    {
      institution: "Indian Institute of Technology Kharagpur",
      degree: " Integrated dual-degree in Electronics and Electrical Communication Engineering with specialization in Vision and Intelligent Systems",
      start: "2022",
      end: "2027",
      logoUrl: "./IIT_Kharagpur_Logo.svg",
      href: "https://www.iitkgp.ac.in/",},
    {
      institution: "Garden High School, Kolkata",
      degree: "Science & Mathematics",
      start: "2008",
      end: "2022",
      logoUrl: "./GHS-Logo.jpg",
      href: "https://gardenhighschool.in/",
    },
    // Add more education entries
  ],

  // Skills Section
  skills: [
    { title: "Languages & Frontend", 
      list: [
        {name:"C", src:"./c.svg"},
        {name:"C++", src:"./c++.svg"},
        {name:"Python", src:"./python.svg"},
        {name:"TypeScript", src:"./typescript.svg"},
        {name:"JavaScript", src:"./javascript.svg"}, 
        {name:"React", src:"./react.svg"},
        {name:"Next.js", src:"./nextjs.svg"}] },
    { title: "Backend & DevOps", 
      list: [
        {name:"Node.js", src:"./nodejs.svg"},
        {name:"MySQL", src:"./mysql.svg"},
        {name:"Docker", src:"./docker.svg"} ] },
    // Add more skill categories
  ],

  // Projects Section
  projects: [
    {
      name: "Algo-Visualizer",
      date: "2025",
      description: "An interactive web app for visualizing algorithms for sorting and finding shortest paths.",
      tech: ["React", "Javascript", "CSS"],
      source: "https://github.com/cb-04/Algo-visualizer",
    },
    {
      name: "Chromaverse",
      date: "2025",
      description: "A full-stack drawing application that lets users sketch, save, and share artwork securely.",
      tech: ["Javascript", "Node.js", "Express", "Firebase", "Docker"],
      source: "https://github.com/cb-04/Chromaverse",
    },
    {
      name: "Heap Memory Management",
      date: "2024",
      description: "A custom memory-management library that delivers fast, low-fragmentation dynamic allocation with a clean, type-safe API.",
      tech: ["C"],
      source: "https://github.com/cb-04/Heap_Allocator",
    },
    // Add more projects
  ],

  // Contact Section
  contact: {
    email: "chandrabalibiswas04@gmail.com",
    linkedin: "https://www.linkedin.com/in/chandrabali-biswas-18b48a269/",
    github: "https://github.com/cb-04",
    medium: "https://medium.com/@chandrabalibiswas04",
  },
};