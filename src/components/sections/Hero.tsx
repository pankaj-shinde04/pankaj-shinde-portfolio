"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const name = "Pankaj Shinde";
  const bio = "I’m a Full Stack Developer driven by curiosity and problem-solving. I enjoy designing interfaces that feel natural to use and building backend logic that’s efficient, scalable, and secure.";

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-background pt-[90px]"
    >
      {/* Decorative Grid/Dot Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      {/* Decorative SVG Pattern Asset */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.2, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-full pointer-events-none select-none z-0"
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/right-pattern-2.svg"
          alt="Decorative Pattern"
          fill
          className="object-contain object-right dark:invert-0 invert"
          priority
        />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 px-6 md:px-12 mx-auto max-w-7xl"
      >
        <div className="max-w-[900px]">
          <motion.h5 
            variants={itemVariants}
            className="font-mono text-[1rem] leading-[1.5] text-muted-foreground mb-4"
          >
              Hi i'm
          </motion.h5>

          <motion.h1 
            className="hero-heading text-foreground mb-6 flex flex-wrap gap-x-4"
          >
            {name.split(" ").map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div 
            variants={itemVariants}
            className="flex gap-4 md:gap-8 items-start"
          >
            <div className="hidden md:block w-[2px] h-[3.5rem] bg-primary/20 mt-2" />
            <p className="text-[1.125rem] md:text-[1.5rem] lg:text-[1.875rem] font-medium leading-[1.4] text-muted-foreground tracking-tight max-w-[800px] flex flex-wrap gap-x-[0.3em]">
              {bio.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  custom={i + 2}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block ${word === "Full" || word === "Stack" || word === "Developer" ? "text-foreground" : ""}`}
                >
                  {word}
                </motion.span>
              ))}
            </p>
          </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-4"
            >
              <a 
                href="https://drive.google.com/file/d/1URRY5ZSq3luF7_j9EhBvMy99GqDJrjAC/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border border-border text-foreground rounded-full font-bold hover:bg-muted transition-colors"
              >
                Contact Me
              </a>
            </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
