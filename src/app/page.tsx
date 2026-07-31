import type { Metadata } from "next";
import Navigation from "@/components/sections/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Pankaj Shinde | Full Stack Developer | React | Node.js | Next.js",
  description: "Pankaj Shinde - Full Stack Developer specializing in React, Node.js, Next.js, and modern web technologies. Building scalable, user-centric applications with expertise in REST APIs, job scheduling, and performance optimization.",
  keywords: [
    "Pankaj Shinde",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Next.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Portfolio",
    "Web Development",
    "Software Engineer",
    "Full Stack Web Developer",
    "MERN Stack Developer",
    "React Native",
    "API Development",
    "REST API",
    "Web Application",
    "Software Development"
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
