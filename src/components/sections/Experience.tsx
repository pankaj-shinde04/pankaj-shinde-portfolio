"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-background py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-[16px] uppercase tracking-widest text-muted-foreground mb-4"
        >
          WORK
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[48px] md:text-[64px] font-extrabold text-foreground leading-tight tracking-tight mb-4"
        >
          Experience
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[18px] md:text-[22px] text-muted-foreground font-medium mb-16 max-w-2xl"
        >
          Professional journey and contributions.
        </motion.p>

        <div className="space-y-24">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:grid md:grid-cols-12 gap-8 items-start"
          >
            <div className="md:col-span-4 sticky top-24">
              <h3 className="text-[32px] md:text-[40px] font-bold text-foreground mb-2">
                Markitify Media
              </h3>
              <p className="font-mono text-[14px] text-muted-foreground">
                JAN 2025 — DEC 2025
              </p>
            </div>
            
            <div className="md:col-span-8 space-y-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[24px] font-semibold text-foreground mb-4">Front-End Developer</h4>
                  <p className="text-[18px] text-muted-foreground leading-relaxed mb-6">
                    Delivered 8+ responsive web interfaces for client projects, improving mobile user engagement by 45% through optimized design and performance enhancements.
                  </p>
                  <ul className="space-y-4 text-muted-foreground text-lg">
                    {[
                      "Converted 20+ Figma designs into production-ready React components with 100% accuracy.",
                      "Reduced code redundancy by 30% through the development of a reusable component library.",
                      "Integrated 10+ RESTful APIs managing data flow with zero critical production bugs.",
                      "Accelerated development velocity by 40% using AI coding tools for rapid prototyping."
                    ].map((item, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Experience;
