'use client';

import { motion } from 'motion/react';
import { BookOpen, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

const features = [
  {
    title: 'Value-Based Education',
    description: 'Instilling strong moral principles alongside academic excellence.',
    icon: HeartHandshake,
  },
  {
    title: 'English Medium Curriculum',
    description: 'Comprehensive curriculum designed for global readiness.',
    icon: BookOpen,
  },
  {
    title: 'Safe & Structured Learning',
    description: 'A secure environment fostering disciplined growth.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable Excellence',
    description: 'Premium education that remains accessible to our community.',
    icon: Award,
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-32 bg-[#001a11] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
          >
            Why Parents Choose <br className="md:hidden" />
            <span className="text-gradient-gold font-normal">Greenfield</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-8 md:p-10 hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden border-white/5 bg-white/[0.02]"
            >
              <div className="absolute top-6 right-8 text-[#d4af37]/10 font-serif text-6xl font-light pointer-events-none transition-transform duration-500 group-hover:scale-110 group-hover:text-[#d4af37]/20">
                0{index + 1}
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mb-8 border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-colors relative z-10">
                <feature.icon className="w-7 h-7 text-[#e6c258]" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 relative z-10">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed font-light relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
