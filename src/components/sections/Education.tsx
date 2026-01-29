"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    const educationData = [
      {
        institution: "Modern College Arts Science and commerce ganeshkhind pune",
        degree: "Bachelor of Business Administration in Computer Applications",
        period: "2022 — 2025",
        description: "Focused on software development, database management, and business applications. Actively involved in building full-stack applications and learning modern web technologies."
      }
    ];

  return (
    <section id="education" className="w-full bg-background py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[16px] uppercase tracking-widest text-muted-foreground mb-4"
          >
            ACADEMICS
          </motion.p>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] md:text-[64px] font-extrabold text-black dark:text-white leading-tight tracking-tight mb-16"
            >
              Education
            </motion.h2>


          <div className="space-y-12 max-w-4xl">
            {educationData.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start gap-4">
                    <div className="mt-1">
                      <GraduationCap className="w-8 h-8 text-black dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-[28px] md:text-[36px] font-bold text-black dark:text-white mb-1 leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="text-[18px] md:text-[20px] text-black dark:text-white font-medium mb-1">
                        {edu.institution}
                      </p>
                      <p className="text-[16px] text-muted-foreground font-medium mb-6">
                        {edu.period}
                      </p>
                      
                      <div className="relative pl-6">
                        <div className="absolute left-0 top-1 bottom-1 w-[3px] bg-primary rounded-full" />
                        <p className="text-[16px] md:text-[18px] text-black dark:text-white leading-relaxed">
                          {edu.description}
                        </p>
                        {edu.grade && (
                          <p className="text-black dark:text-white font-mono text-[14px] mt-2 font-bold">
                            {edu.grade}
                          </p>
                        )}
                      </div>
                    </div>

                </div>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Education;
