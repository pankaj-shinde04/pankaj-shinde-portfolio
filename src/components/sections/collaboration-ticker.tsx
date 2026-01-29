"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CollaborationTicker = () => {
  const row1Items = [
    'Software Architecture',
    'Software Engineering',
    'Problem Solving',
    'Software Architecture',
    'Software Engineering',
    'Problem Solving',
    'Software Architecture',
    'Software Engineering',
    'Problem Solving',
    'Software Architecture',
    'Software Engineering',
    'Problem Solving',
  ];

  const row2Items = [
    'Agile Development',
    'Frontend Development',
    'React Native Development',
    'Agile Development',
    'Frontend Development',
    'React Native Development',
    'Agile Development',
    'Frontend Development',
    'React Native Development',
    'Agile Development',
    'Frontend Development',
    'React Native Development',
  ];

  return (
    <section className="bg-background py-[120px] overflow-hidden select-none border-y border-border">
      <div className="relative space-y-8">
        {/* First Ticker Row */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-left hover:[animation-play-state:paused]">
            {row1Items.map((text, idx) => (
              <span
                key={`row1-${idx}`}
                className="text-muted/10 text-[80px] md:text-[100px] lg:text-[120px] font-extrabold px-8 tracking-tighter"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.1',
                  WebkitTextStroke: idx % 2 === 1 ? '1px var(--border)' : '0',
                }}
              >
                {text}
              </span>
            ))}
          </div>
          {/* Duplicate for infinite effect */}
          <div className="flex animate-marquee-left hover:[animation-play-state:paused]" aria-hidden="true">
            {row1Items.map((text, idx) => (
              <span
                key={`row1-dup-${idx}`}
                className="text-muted/10 text-[80px] md:text-[100px] lg:text-[120px] font-extrabold px-8 tracking-tighter"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.1',
                  WebkitTextStroke: idx % 2 === 1 ? '1px var(--border)' : '0',
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Center Text */}
        <div className="text-center py-8">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-foreground text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Interested in Collaboration?
          </motion.h2>
        </div>

        {/* Second Ticker Row */}
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="flex animate-marquee-right hover:[animation-play-state:paused]">
            {row2Items.map((text, idx) => (
              <span
                key={`row2-${idx}`}
                className="text-muted/10 text-[80px] md:text-[100px] lg:text-[120px] font-extrabold px-8 tracking-tighter"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.1',
                  WebkitTextStroke: idx % 2 === 0 ? '1px var(--border)' : '0',
                }}
              >
                {text}
              </span>
            ))}
          </div>
          {/* Duplicate for infinite effect */}
          <div className="flex animate-marquee-right hover:[animation-play-state:paused]" aria-hidden="true">
            {row2Items.map((text, idx) => (
              <span
                key={`row2-dup-${idx}`}
                className="text-muted/10 text-[80px] md:text-[100px] lg:text-[120px] font-extrabold px-8 tracking-tighter"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.1',
                  WebkitTextStroke: idx % 2 === 0 ? '1px var(--border)' : '0',
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default CollaborationTicker;