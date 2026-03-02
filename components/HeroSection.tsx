'use client';

import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

export default function HeroSection() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917086404183';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-[#003322] to-[#001a11]">
      {/* Floating Particles Background (Simplified with CSS) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-[#004d33]/20 rounded-full blur-3xl mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel-gold rounded-3xl md:rounded-[2.5rem] p-6 sm:p-10 md:p-20 max-w-5xl w-full mx-auto relative overflow-hidden bg-[#001a11]/40 backdrop-blur-2xl border-white/5"
        >
          {/* Subtle glow inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#d4af37]/10 to-transparent pointer-events-none" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#e6c258] text-sm font-semibold tracking-wider uppercase"
          >
            Session 2026–27
          </motion.div>

          <h2 className="font-serif text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[7rem] font-light text-white mb-6 md:mb-8 leading-[0.95] tracking-tight">
            ADMISSIONS <br className="hidden md:block" />
            <span className="text-gradient-gold relative inline-block font-normal">
              OPEN NOW
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#e6c258] to-[#b5952f] origin-left"
              />
            </span>
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 md:mb-12 max-w-2xl mx-auto font-light tracking-wide">
            Secure Your Child’s Bright Future Today at Greenfield English School.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8 w-full">
            <a
              href="#admission-form"
              className="w-full sm:w-auto px-10 py-4 rounded-none bg-[#d4af37] text-[#001a11] font-semibold tracking-widest uppercase text-sm hover:bg-white transition-colors duration-500 text-center"
            >
              Apply Now
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-none border border-white/30 text-white font-semibold tracking-widest uppercase text-sm hover:bg-white/10 transition-colors duration-500 flex items-center justify-center gap-3"
            >
              <Phone size={16} className="text-[#d4af37]" />
              Call / WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
