"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

// ─── Animated equalizer bars ─────────────────────────────────────────────────
function MusicIcon({ playing }: { playing: boolean }) {
  return (
    <span className="flex items-end gap-[2px] h-4 w-5">
      {[1, 2, 3, 4].map((i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-current origin-bottom"
          animate={
            playing
              ? { scaleY: [0.4, 1, 0.6, 1, 0.3, 1], opacity: 1 }
              : { scaleY: 0.3, opacity: 0.5 }
          }
          transition={
            playing
              ? { duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }
              : { duration: 0.2 }
          }
          style={{ height: "100%" }}
        />
      ))}
    </span>
  );
}

// ─── Main Navigation ──────────────────────────────────────────────────────────
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const MUSIC_URL = "/images/my-song.mp3";

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const navItems = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <Navbar>
      {/* ── Desktop Navigation ── */}
      <NavBody>
        <NavbarLogo name="Pankaj Shinde" href="#home" />
        <NavItems items={navItems} />
        <div className="relative z-20 flex items-center gap-4 pl-4 border-l border-neutral-200 dark:border-neutral-800">
          {/* Music toggle */}
          <motion.button
            onClick={toggleMusic}
            whileTap={{ scale: 0.9 }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-300 ${
              isPlaying
                ? "border-primary/60 bg-primary/10 text-primary"
                : "border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 hover:border-primary/40 hover:text-black dark:hover:text-white"
            }`}
          >
            <MusicIcon playing={isPlaying} />
          </motion.button>

          {/* Resume link */}
          <a
            href="https://drive.google.com/file/d/1CxX5r6w4v_DU1ELzEeK0xRGQKG0m650k/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white text-xs font-bold hover:-translate-y-0.5 transition-all duration-200 dark:bg-white dark:text-black"
          >
            <Download size={13} />
            Resume
          </a>
        </div>
      </NavBody>

      {/* ── Mobile Navigation ── */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo name="Pankaj Shinde" href="#home" />
          <div className="flex items-center gap-2">
            <motion.button
              onClick={toggleMusic}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full border transition-all duration-300 ${
                isPlaying
                  ? "border-primary/60 bg-primary/10 text-primary"
                  : "border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400"
              }`}
            >
              <MusicIcon playing={isPlaying} />
            </motion.button>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 text-lg font-semibold uppercase tracking-widest hover:text-black dark:hover:text-white transition-colors"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-3 pt-2 border-t border-neutral-200 dark:border-neutral-800">
            <a
              href="https://drive.google.com/file/d/1CxX5r6w4v_DU1ELzEeK0xRGQKG0m650k/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black text-white rounded-full text-sm font-bold dark:bg-white dark:text-black"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;
