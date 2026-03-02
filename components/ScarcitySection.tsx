'use client';

import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function ScarcitySection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-[#003322] via-[#004d33] to-[#003322] relative overflow-hidden border-y border-[#d4af37]/20">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/pattern/1920/1080')] opacity-5 mix-blend-overlay pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto w-full"
        >
          <div className="flex items-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center shrink-0 animate-pulse border border-[#d4af37]/40 hidden sm:flex">
              <Clock className="w-8 h-8 text-[#e6c258]" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Admissions Closing Soon</h3>
              <p className="text-[#e6c258] font-medium tracking-wide uppercase text-sm">Limited Seats Remaining for 2026–27</p>
            </div>
          </div>
          
          <a
            href="#admission-form"
            className="w-full md:w-auto px-10 py-4 rounded-none bg-[#d4af37] text-[#001a11] font-semibold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-500 whitespace-nowrap text-center"
          >
            Apply Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
