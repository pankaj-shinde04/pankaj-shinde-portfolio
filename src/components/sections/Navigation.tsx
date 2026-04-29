"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

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
              ? { duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }
              : { duration: 0.2 }
          }
          style={{ height: '100%' }}
        />
      ))}
    </span>
  );
}

// ─── Main Navigation ──────────────────────────────────────────────────────────
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const MUSIC_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full fixed top-0 z-50">

      {/* ── Background wrapper (animates padding on scroll) ── */}
      <motion.div
        animate={
          isScrolled
            ? { paddingTop: 10, paddingBottom: 10 }
            : { paddingTop: 28, paddingBottom: 28 }
        }
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`transition-[background,border-color,box-shadow] duration-300 ${isScrolled
            ? 'backdrop-blur-xl bg-background/85 border-b border-border shadow-lg'
            : 'bg-transparent'
          }`}
      >
        {/* ── Inner row ── */}
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">

          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <motion.span
              animate={{ fontSize: isScrolled ? '1.05rem' : '1.4rem' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors whitespace-nowrap"
            >
              Pankaj&nbsp;&nbsp;Shinde
            </motion.span>
          </a>

          {/* ── Desktop Links ── */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}

            <div className="flex items-center gap-3 pl-4 border-l border-border">
              {/* Music button */}
              <motion.button
                onClick={toggleMusic}
                whileTap={{ scale: 0.9 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${isPlaying
                    ? 'border-primary/60 bg-primary/10 text-primary'
                    : 'border-border bg-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground'
                  }`}
                aria-label="Toggle music"
              >
                <MusicIcon playing={isPlaying} />
                <span className="hidden lg:inline">
                  {isPlaying ? 'Playing' : 'Music'}
                </span>
              </motion.button>
            </div>
          </div>

          {/* ── Mobile Buttons ── */}
          <div className="flex md:hidden items-center gap-3">
            <motion.button
              onClick={toggleMusic}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full border transition-all duration-300 ${isPlaying
                  ? 'border-primary/60 bg-primary/10 text-primary'
                  : 'border-border text-muted-foreground'
                }`}
              aria-label="Toggle music"
            >
              <MusicIcon playing={isPlaying} />
            </motion.button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.div>

      {/* ── Mobile Full-screen Overlay ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-background z-50 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-6 p-2 text-foreground"
            >
              <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-bold text-foreground hover:text-primary transition-colors uppercase tracking-tighter"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              href="https://drive.google.com/file/d/1URRY5ZSq3luF7_j9EhBvMy99GqDJrjAC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="mt-4 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Download size={20} />
              RESUME
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navigation;
