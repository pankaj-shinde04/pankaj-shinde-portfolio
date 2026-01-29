"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Wand2 } from 'lucide-react';

const SKILLS_DATA = [
    {
      category: "Front-end",
      icon: Code2,
      skills: [
        { name: "HTML5", icon: "https://skillicons.dev/icons?i=html" },
        { name: "CSS3", icon: "https://skillicons.dev/icons?i=css" },
        { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
        { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
        { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
        { name: "React", icon: "https://skillicons.dev/icons?i=react" },
        { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
        { name: "Redux", icon: "https://skillicons.dev/icons?i=redux" },
      ]
    },
    {
      category: "Back-end",
      icon: Server,
      skills: [
        { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
        { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
        { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
      ]
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
        { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
        { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
      ]
    },
  {
    category: "AI Tools",
    icon: Wand2,
    skills: [
      
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "Github", icon: "https://skillicons.dev/icons?i=github" },
      { name: "Figma", icon: "https://skillicons.dev/icons?i=figma" },
      { name: "Postman", icon: "https://skillicons.dev/icons?i=postman" },
      { name: "Docker", icon: "https://skillicons.dev/icons?i=docker" },
      { name: "Vercel", icon: "https://skillicons.dev/icons?i=vercel" },
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
    ]
  }
];

const BubbleIcon = ({ skill }: { skill: { name: string, icon: string } }) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      className="group relative flex items-center justify-center p-4 rounded-full aspect-square bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 w-full cursor-help"
      title={skill.name}
    >
      <motion.div 
        animate={{ 
          y: [0, -5, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: Math.random() * 2
        }}
        className="relative w-8 h-8 sm:w-10 sm:h-10"
      >
        <Image 
          src={skill.icon} 
          alt={skill.name} 
          fill 
          className="object-contain"
          unoptimized
        />
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden bg-black">
      <div className="container relative z-10 px-6 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col mb-16 text-center items-center"
        >
          <motion.span 
            className="font-mono text-[14px] text-primary uppercase tracking-widest mb-4 bg-primary/10 px-4 py-1 rounded-full"
          >
            Stack
          </motion.span>
          <h2 className="text-[36px] md:text-[56px] font-bold text-white mb-6 tracking-tight">
            Technical Expertise
          </h2>
          <p className="text-[18px] md:text-[20px] text-zinc-400 max-w-2xl leading-relaxed">
            A comprehensive set of tools and technologies I use to bring modern web experiences to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {SKILLS_DATA.map((group, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative p-6 sm:p-8 rounded-[32px] bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden group/card"
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] group-hover/card:bg-primary/10 transition-colors duration-700" />
              
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 flex items-center gap-3">
                    <group.icon className="w-6 h-6 text-primary" />
                    {group.category}
                  </h3>
                  
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                  {group.skills.map((skill, skillIdx) => (
                    <BubbleIcon key={skillIdx} skill={skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
};

export default Skills;
