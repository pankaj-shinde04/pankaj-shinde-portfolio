"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const [emailCopied, setEmailCopied] = React.useState(false);

  const copyEmail = async (mailtoHref: string) => {
    const email = mailtoHref.replace(/^mailto:/, '');

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 1500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/pankaj-shinde04',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/pankaj-shinde-79291a315',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://x.com/pankaj_shinde04',
    },
    {
      name: 'Mail',
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:pankajshinde2434@gmail.com',
    },
  ];

  return (
    <section
      id="contact"
      className="relative w-full pt-32 pb-0 overflow-hidden bg-background"
    >
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.3, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="absolute left-0 top-0 h-full w-auto pointer-events-none"
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/left-pattern-41.svg"
          alt="Pattern"
          width={400}
          height={800}
          className="h-full w-auto object-left object-cover dark:invert-0 invert"
        />
      </motion.div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[14px] uppercase tracking-[0.2em] text-muted-foreground mb-4 block"
          >
            CONTACT
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[36px] md:text-[56px] font-extrabold text-foreground leading-tight mb-4 tracking-tight"
          >
            Get In Touch.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl font-normal leading-relaxed"
          >
            Let&apos;s build something amazing together. Reach out via email or connect on social media.
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap gap-4 md:gap-6 mb-32">
          {socialLinks.map((social, i) => (
            social.href.startsWith('mailto:') ? (
              <motion.button
                key={social.name}
                type="button"
                onClick={() => copyEmail(social.href)}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)"
                }}
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-card transition-all duration-300 group"
              >
                <span className="text-muted-foreground group-hover:text-inherit transition-colors">
                  {social.icon}
                </span>
                <span className="font-mono text-sm font-medium text-muted-foreground group-hover:text-inherit uppercase tracking-wider">
                  {emailCopied ? 'Copied' : social.name}
                </span>
              </motion.button>
            ) : (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)"
                }}
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-border bg-card transition-all duration-300 group"
              >
                <span className="text-muted-foreground group-hover:text-inherit transition-colors">
                  {social.icon}
                </span>
                <span className="font-mono text-sm font-medium text-muted-foreground group-hover:text-inherit uppercase tracking-wider">
                  {social.name}
                </span>
              </motion.a>
            )
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center justify-center w-full pt-12 pb-24 border-t border-border"
        >
          <p className="text-muted-foreground font-mono text-sm tracking-wide">
            © 2026 Pankaj Shinde. Built with precision.
          </p>
        </motion.div>
      </div>

      <div className="relative w-full leading-[0] bg-background">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/782ee80b-5dbb-4f60-b9b9-175e776bf731-shubhporwal-me/assets/svgs/footer-curve-42.svg"
          alt="Footer Curve"
          width={1920}
          height={200}
          className="w-full h-auto dark:invert-0 invert"
          priority
        />
      </div>
    </section>
  );
};

export default Contact;
