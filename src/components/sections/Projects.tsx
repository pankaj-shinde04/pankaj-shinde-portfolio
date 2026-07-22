"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link: string;
  liveUrl?: string;
  github: string;
  techIcons: string[];
  bgImage?: string;
}

const projects: Project[] = [
  
  {
    title: "FinTrack",
    description: "AI-powered finance tracker with automated expense summaries using OpenAI API. Secure JWT auth.",
    link: "#",
    liveUrl: "https://fintrack-smartt.vercel.app/",
    github: "https://github.com/pankaj-shinde04/fintrack",
    bgImage: "/images/fintrack.png",
    techIcons: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/react-29.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/nodejs-8.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/mongodb-23.svg"
    ]
  },
  {
    title: "Chatify",
    description: "Real-time chat application with instant messaging, user authentication, and live online status. Built with Socket.io for seamless bi-directional communication.",
    link: "#",
    liveUrl: "https://chatify-steel-two.vercel.app",
    github: "https://github.com/pankaj-shinde04/chatify",
    bgImage: "/images/chatify.png",
    techIcons: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/react-29.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/nodejs-8.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/mongodb-23.svg"
    ]
  },
  {
    title: "QuickBasket",
    description: "Multi-vendor grocery marketplace connecting shoppers with local stores for delivery and pickup.",
    link: "#",
    liveUrl: "https://quick-basket-three.vercel.app/",
    github: "https://github.com/pankaj-shinde04/QuickBasket",
    bgImage: "/images/quick.jpeg",
    techIcons: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/react-29.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/nodejs-8.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/mongodb-23.svg"
    ]
  }
];


const MOBILE_LIMIT = 3;

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-mono text-sm tracking-[0.2em] mb-4 uppercase"
          >
            PROJECTS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight max-w-4xl tracking-tight"
          >
            Things I've Built
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
          >
            A collection of full-stack projects focusing on performance, scalability, and user experience.
          </motion.p>
        </motion.div>

        {/* Desktop: always show all in 2-col grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Mobile: show first 3, then toggle rest */}
        <div className="md:hidden flex flex-col gap-8">
          {projects.slice(0, MOBILE_LIMIT).map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}

          <AnimatePresence>
            {showAll &&
              projects.slice(MOBILE_LIMIT).map((project, index) => (
                <motion.div
                  key={MOBILE_LIMIT + index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectCard project={project} index={MOBILE_LIMIT + index} />
                </motion.div>
              ))}
          </AnimatePresence>

          {projects.length > MOBILE_LIMIT && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center mt-4"
            >
              <button
                onClick={() => setShowAll((prev) => !prev)}
                className="group flex items-center gap-2 px-8 py-3 rounded-full border border-border bg-card text-foreground font-semibold text-sm hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <span>{showAll ? "Show Less" : `View All Projects`}</span>
                <motion.span
                  animate={{ rotate: showAll ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-primary"
                >

                </motion.span>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col h-[450px] overflow-hidden rounded-[24px] border border-border bg-card transition-all duration-300 hover:border-primary/20"
    >
      <div
        className="absolute inset-0 z-0 opacity-20 transition-opacity group-hover:opacity-30 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.bgImage ?? 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/project-bg-27.svg'})`
        }}
      />

      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/40 to-transparent" />

      <div className="relative z-20 flex flex-col h-full p-8 md:p-12">
        <div className="flex -space-x-2 mb-auto">
          {project.techIcons.map((icon, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="w-12 h-12 rounded-full border border-border bg-background/80 backdrop-blur-md flex items-center justify-center overflow-hidden p-2"
            >
              <Image
                src={icon}
                alt="tech-icon"
                width={24}
                height={24}
                className="object-contain dark:invert-0"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-foreground mb-4"
          >
            {project.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md"
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-3"
          >
            {/* GitHub Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background/60 backdrop-blur-sm text-foreground font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>

            {/* Live Button */}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background/60 backdrop-blur-sm text-white font-semibold text-sm hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Live
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;
