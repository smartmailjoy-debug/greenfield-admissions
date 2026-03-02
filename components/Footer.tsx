'use client';

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917086404183';

  return (
    <footer className="bg-[#00120c] pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="relative w-56 h-14 mb-6">
              <Image
                src="/logo.png"
                alt="Greenfield English School Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Empowering students with value-based education and modern learning methodologies for a brighter tomorrow.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Anipur Road, Purbagool<br />Assam, India</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone className="w-5 h-5 text-[#d4af37] shrink-0" />
                <a href={`tel:+${whatsappNumber}`} className="hover:text-white transition-colors py-1">+91 7086404183</a>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail className="w-5 h-5 text-[#d4af37] shrink-0" />
                <a href="mailto:admissions@greenfield.edu" className="hover:text-white transition-colors py-1">admissions@greenfield.edu</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#001a11] transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#001a11] transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-11 h-11 rounded-full glass-panel flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-[#001a11] transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Greenfield English School. All rights reserved.
          </p>
          <div className="flex gap-6 text-white/40 text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
