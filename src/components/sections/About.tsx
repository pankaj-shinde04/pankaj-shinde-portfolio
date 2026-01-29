"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const [imageError, setImageError] = React.useState(false);
  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 space-y-6"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-[14px] text-muted-foreground uppercase tracking-widest"
            >
              ABOUT ME
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[36px] md:text-[48px] font-bold text-foreground tracking-tight"
            >
              Passionate about building scalable and user-centric applications.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-[18px] md:text-[20px] text-muted-foreground leading-relaxed"
            >
              I am a Full Stack Developer with over 6 months of hands-on experience in building scalable web applications. My expertise lies in React, Node.js, and Express.js, with a strong focus on REST API development, job scheduling, and performance optimization.
            </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[18px] md:text-[20px] text-muted-foreground leading-relaxed"
              >
                I graduated with a Bachelor of Business Administration in Computer Applications from Modern College, Pune, with a CGPA of 7.43. I love exploring new technologies and integrating AI-assisted workflows into my development process to accelerate delivery and maintain high code quality.
              </motion.p>
            </motion.div>
            <motion.div 

            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative aspect-square max-w-[450px] w-full"
          >
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative h-full w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl -rotate-6 scale-95 opacity-50" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border bg-card glass-effect flex items-center justify-center">
                {/* Placeholder for profile image */}
                {!imageError ? (
                  <Image
                    src="/images/profile1.jpeg"
                    alt="Pankaj Shinde"
                    fill
                    sizes="(max-width: 768px) 90vw, 450px"
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-muted/20 flex items-center justify-center text-muted-foreground">
                    <span className="text-8xl font-black tracking-tighter opacity-20">PS</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
