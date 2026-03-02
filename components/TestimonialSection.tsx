'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Greenfield has provided an exceptional foundation for our daughter. The balance of academics and values is exactly what we were looking for.",
    author: "Priya Sharma",
    role: "Parent of Class III Student",
    image: "https://picsum.photos/seed/parent1/150/150"
  },
  {
    quote: "The dedication of the teachers is unmatched. We've seen remarkable growth in our son's confidence and communication skills.",
    author: "Rahul Verma",
    role: "Parent of Class V Student",
    image: "https://picsum.photos/seed/parent2/150/150"
  },
  {
    quote: "A truly nurturing environment that feels like a second home. The modern facilities and structured curriculum are impressive.",
    author: "Anjali Desai",
    role: "Parent of Nursery Student",
    image: "https://picsum.photos/seed/parent3/150/150"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#001a11] to-[#002b1c] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-light text-white mb-6 tracking-tight"
          >
            Voices of Our <span className="text-gradient-gold font-normal">Community</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-[#d4af37] mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel rounded-3xl p-8 md:p-10 relative border-white/5 bg-white/[0.02] flex flex-col"
            >
              <Quote className="w-10 h-10 text-[#d4af37]/20 absolute top-8 right-8" />
              
              <p className="text-white/70 text-lg font-light leading-relaxed mb-10 flex-grow relative z-10">
                &quot;{testimonial.quote}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#d4af37]/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium tracking-wide">{testimonial.author}</h4>
                  <p className="text-[#d4af37] text-xs uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
