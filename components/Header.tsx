'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#001a11]/90 backdrop-blur-md border-b border-white/10 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-48 h-12 sm:w-56 sm:h-14 md:w-64 md:h-16 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="Greenfield English School Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </div>

        <a
          href="#admission-form"
          className="hidden md:inline-flex items-center justify-center px-8 py-3 rounded-none border border-[#d4af37] bg-[#d4af37]/10 text-[#e6c258] font-medium text-sm tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#001a11] transition-all duration-500"
        >
          Apply Now
        </a>
      </div>
    </motion.header>
  );
}
