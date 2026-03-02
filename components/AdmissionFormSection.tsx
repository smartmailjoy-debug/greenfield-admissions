'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

export default function AdmissionFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917086404183';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Application submitted successfully! We will contact you soon.');
    }, 1500);
  };

  return (
    <section id="admission-form" className="py-20 md:py-32 bg-[#001a11] relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 md:mb-8 leading-[1.1] tracking-tight">
              Begin Your Child&apos;s <br />
              <span className="text-gradient-gold font-normal">Journey With Us</span>
            </h2>
            <p className="text-white/60 text-lg sm:text-xl font-light mb-8 md:mb-12 max-w-md mx-auto lg:mx-0 tracking-wide">
              Fill out the form to initiate the admission process. Our team will get back to you with the next steps.
            </p>
            
            <div className="glass-panel p-6 rounded-2xl inline-block text-left border-l-4 border-l-[#d4af37]">
              <h4 className="text-[#e6c258] font-semibold mb-2">Need immediate assistance?</h4>
              <p className="text-white/60 text-sm mb-4">Connect with our admission counselor directly via WhatsApp.</p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#25D366] transition-colors font-medium"
              >
                <MessageCircle size={20} className="text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full max-w-md lg:max-w-none mx-auto"
          >
            <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#004d33]/20 rounded-full blur-3xl" />
              
          <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">Student Name</label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-lg placeholder-white/20 focus:outline-none focus:border-[#d4af37] transition-all"
                placeholder="Enter student's full name"
              />
            </div>
            
            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">Class Applying For</label>
              <select
                required
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-lg focus:outline-none focus:border-[#d4af37] transition-all appearance-none [&>option]:bg-[#002b1c]"
                defaultValue=""
              >
                <option value="" disabled>Select class</option>
                <option value="nursery">Nursery & KG</option>
                <option value="class-1-3">Class I - III</option>
                <option value="class-4-6">Class IV - VI</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">Parent Name</label>
              <input
                type="text"
                required
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-lg placeholder-white/20 focus:outline-none focus:border-[#d4af37] transition-all"
                placeholder="Enter parent's full name"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">Phone Number</label>
              <input
                type="tel"
                required
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-lg placeholder-white/20 focus:outline-none focus:border-[#d4af37] transition-all"
                placeholder="Enter 10-digit mobile number"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold tracking-widest uppercase text-white/60 mb-2">Address</label>
              <textarea
                required
                rows={2}
                className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-lg placeholder-white/20 focus:outline-none focus:border-[#d4af37] transition-all resize-none"
                placeholder="Enter complete address"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 rounded-none bg-gradient-to-r from-[#e6c258] to-[#b5952f] text-[#001a11] font-bold text-lg tracking-wide hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed mt-8"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
              {!isSubmitting && <Send size={20} />}
            </button>
          </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
