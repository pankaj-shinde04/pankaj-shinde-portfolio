"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
  techIcons: string[];
  bgImage?: string;
}

const projects: Project[] = [
  {
    title: "Email Scheduler",
    description: "Full-stack system processing 300+ emails using BullMQ and Redis. Reliable delivery with rate limiting.",
    link: "#",
    github: "https://github.com/pankaj-shinde04/email-sending",
    bgImage: "/images/email-scheduler.png",
    techIcons: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/typescript-28.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/nodejs-8.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/react-29.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/mysql-22.svg"
    ]
  },
  {
    title: "FinTrack",
    description: "AI-powered finance tracker with automated expense summaries using OpenAI API. Secure JWT auth.",
    link: "#",
    github: "https://github.com/pankaj-shinde04/fintrack",
    bgImage: "/images/fintrack.png",
    techIcons: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/react-29.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/nodejs-8.svg",
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/mongodb-23.svg"
    ]
  }
];

const Projects = () => {
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
            Things I’ve Built
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
                    className="flex gap-4"
                  >
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:scale-105 transition-transform"
                    >
                      GitHub
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
