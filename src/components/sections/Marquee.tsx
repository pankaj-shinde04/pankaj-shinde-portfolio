"use client";

import React from 'react';
import NextImage from 'next/image';
import { motion } from 'framer-motion';

interface MarqueeItem {
  text: string;
  icon: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  className?: string;
  direction?: 'left' | 'right';
  speed?: 'fast' | 'slow' | 'normal';
}

const Marquee: React.FC<MarqueeProps> = ({ 
  items, 
  className = "", 
  direction = 'left',
  speed = 'normal' 
}) => {
  return (
    <div 
      className={`w-full overflow-hidden select-none py-12 md:py-20 border-y border-border bg-background ${className}`}
      aria-hidden="true"
    >
      <div className="relative flex max-w-full">
        <div 
          className="flex whitespace-nowrap animate-marquee items-center"
          style={{
            animationDirection: direction === 'right' ? 'reverse' : 'normal',
            animationDuration: speed === 'fast' ? '20s' : speed === 'slow' ? '45s' : '30s'
          }}
        >
          {/* Render items 3 times for seamless loop */}
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              {items.map((item, idx) => (
                <div key={idx} className="flex items-center mx-8 md:mx-16">
                  <div className="relative w-10 h-10 md:w-16 md:h-16 mr-4 md:mr-8 opacity-80">
                    <NextImage 
                      src={item.icon} 
                      alt={item.text} 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[clamp(2rem,6vw,4.5rem)] font-extrabold tracking-tighter leading-none text-foreground uppercase">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MarqueeSection = () => {
  const skillsSet1 = [
    { text: "Full Stack Development", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/react-15.svg" },
    { text: "MERN Stack Specialist", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/mongodb-23.svg" },
    { text: "AI-Assisted Workflows", icon: "https://cdn.simpleicons.org/githubcopilot" },
  ];

  const skillsSet2 = [
    { text: "Scalable Web Apps", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/nextjs-17.svg" },
    { text: "REST API Design", icon: "https://cdn.simpleicons.org/express" },
    { text: "Performance Optimization", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/vite-10.svg" },
  ];

  return (
    <section className="flex flex-col gap-0 bg-background">
      <Marquee 
        items={skillsSet1} 
        direction="left" 
        className="opacity-90"
      />
      
        <div className="py-24 md:py-32 container mx-auto max-w-7xl px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground font-mono text-sm tracking-[0.2em] uppercase mb-8"
        >
          Interests & Methodology
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-foreground max-w-3xl"
        >
          I have a strong obsession for attention to detail and building high-performance systems.
        </motion.p>
      </div>

      <Marquee 
        items={skillsSet2} 
        direction="right" 
        speed="slow"
        className="opacity-80"
      />
    </section>
  );
};

export default MarqueeSection;