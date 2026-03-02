'use client';

import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Upload } from 'lucide-react';

const initialImages = [
  {
    src: 'https://picsum.photos/seed/classroom/800/600',
    alt: 'Student classroom',
    caption: 'Modern Classrooms',
  },
  {
    src: 'https://picsum.photos/seed/teacher/800/600',
    alt: 'Teacher interaction',
    caption: 'Interactive Learning',
  },
  {
    src: 'https://picsum.photos/seed/activity/800/600',
    alt: 'Activity highlights',
    caption: 'Extracurricular Activities',
  },
  {
    src: 'https://picsum.photos/seed/campus/800/600',
    alt: 'Campus overview',
    caption: 'Safe Campus Environment',
  },
];

export default function GallerySection() {
  const [galleryImages, setGalleryImages] = useState(initialImages);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);

  const nextImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => prev !== null ? (prev + 1) % galleryImages.length : null);
  }, [galleryImages.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null);
  }, [galleryImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    if (selectedIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex, nextImage, prevImage]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImage = {
        src: imageUrl,
        alt: file.name,
        caption: 'Community Photo',
      };
      setGalleryImages([newImage, ...galleryImages]);
    }
  };

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
            Life at <span className="text-gradient-gold font-normal">Greenfield</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-[#d4af37] mx-auto rounded-full mb-8"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <label className="cursor-pointer px-8 py-3 rounded-none border border-[#d4af37] bg-[#d4af37]/10 text-[#e6c258] font-medium text-sm tracking-widest uppercase hover:bg-[#d4af37] hover:text-[#001a11] transition-all duration-500 flex items-center gap-3">
              <Upload size={18} />
              Upload Photo
              <input type="file" accept="image/*" className="hidden" onChange={handleFileUpload} />
            </label>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative group overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001a11]/90 via-[#001a11]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="glass-panel w-full py-3 px-4 rounded-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium text-center">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#001a11]/95 backdrop-blur-xl p-4 md:p-10"
            onClick={closeModal}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeModal(); }}
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors z-50"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors z-50"
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-white/10 transition-colors z-50"
            >
              <ChevronRight size={28} />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-10 text-center">
                <p className="text-white text-xl md:text-2xl font-light tracking-wide">
                  {galleryImages[selectedIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
