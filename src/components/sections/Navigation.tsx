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

  const MUSIC_URL = '/images/my-song.mp3';

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
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
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
    <>
      {/* ════════════ FULL-WIDTH TOP NAVBAR (visible at top) ════════════ */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.nav
            key="full-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full fixed top-0 z-50 py-7 bg-transparent"
          >
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
              {/* Logo */}
              <a href="#home" className="flex items-center group">
                <span className="text-2xl font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                  Pankaj&nbsp;&nbsp;Shinde
                </span>
              </a>

              {/* Desktop links */}
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
                <div className="pl-4 border-l border-border">
                  <motion.button
                    onClick={toggleMusic}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-all duration-300 ${isPlaying
                      ? 'border-primary/60 bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                      }`}
                  >
                    <MusicIcon playing={isPlaying} />
                    <span className="hidden lg:inline"></span>
                  </motion.button>
                </div>
              </div>

              {/* Mobile buttons */}
              <div className="flex md:hidden items-center gap-3">
                <motion.button
                  onClick={toggleMusic}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 rounded-full border transition-all duration-300 ${isPlaying ? 'border-primary/60 bg-primary/10 text-primary' : 'border-border text-muted-foreground'
                    }`}
                >
                  <MusicIcon playing={isPlaying} />
                </motion.button>
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-foreground">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ════════════ FLOATING PILL NAVBAR (appears on scroll) ════════════ */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div
            key="pill-nav"
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 "
          >
            <div className="pointer-events-auto w-full max-w-5xl">
              <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl border border-white/10 bg-background/80 backdrop-blur-2xl shadow-2xl shadow-black/40">

                {/* Logo */}
                <a href="#home" className="shrink-0 group">
                  <span className="text-base font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                    Pankaj&nbsp;Shinde
                  </span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* Right side */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Music button */}
                  <motion.button
                    onClick={toggleMusic}
                    whileTap={{ scale: 0.9 }}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all duration-300 ${isPlaying
                      ? 'border-primary/60 bg-primary/10 text-primary'
                      : 'border-border text-muted-foreground hover:border-primary/40 hover:text-foreground'
                      }`}
                  >
                    <MusicIcon playing={isPlaying} />
                    <span className="hidden lg:inline"></span>
                  </motion.button>

                  {/* Mobile hamburger */}
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-1.5 text-foreground"
                  >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                  </button>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ════════════ MOBILE FULLSCREEN OVERLAY ════════════ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-background z-[60] flex flex-col items-center justify-center gap-8 md:hidden"
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
    </>
  );
};

export default Navigation;
