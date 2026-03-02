'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const fees = [
  {
    level: 'Nursery & KG',
    amount: '₹7,500',
    period: 'per annum',
    features: ['Foundational Learning', 'Play-based Curriculum', 'Basic Amenities'],
  },
  {
    level: 'Class I–III',
    amount: '₹11,000',
    period: 'per annum',
    features: ['Core Subjects', 'Activity Based Learning', 'Library Access'],
    highlighted: true,
  },
  {
    level: 'Class IV–VI',
    amount: '₹12,000',
    period: 'per annum',
    features: ['Advanced Curriculum', 'Computer Lab Access', 'Sports Activities'],
  },
];

export default function FeeStructureSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#001a11] to-[#002b1c] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-gold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span className="text-[#e6c258] text-sm font-semibold tracking-wide uppercase">Limited Seats Per Batch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
          >
            Structured & Accessible <span className="text-gradient-gold font-normal">Fee Model</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 max-w-2xl mx-auto text-xl font-light tracking-wide"
          >
            Premium Education at Affordable Fees Compared to Other Institutions in the Area
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {fees.map((fee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-3xl p-8 relative overflow-hidden flex flex-col ${
                fee.highlighted 
                  ? 'glass-panel-gold border-[#d4af37]/50 transform md:-translate-y-4' 
                  : 'glass-panel'
              }`}
            >
              {fee.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#e6c258] to-[#b5952f] text-[#001a11] text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white/90 mb-2">{fee.level}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">{fee.amount}</span>
                  <span className="text-white/50 text-sm">{fee.period}</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {fee.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="#admission-form"
                className={`w-full py-4 rounded-none text-center font-semibold tracking-widest uppercase text-xs transition-all duration-500 ${
                  fee.highlighted
                    ? 'bg-[#d4af37] text-[#001a11] hover:bg-white'
                    : 'border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                Select Plan
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
