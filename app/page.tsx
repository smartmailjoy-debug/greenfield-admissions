import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import FeeStructureSection from '@/components/FeeStructureSection';
import GallerySection from '@/components/GallerySection';
import TestimonialSection from '@/components/TestimonialSection';
import ScarcitySection from '@/components/ScarcitySection';
import AdmissionFormSection from '@/components/AdmissionFormSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#001a11] selection:bg-[#d4af37]/30 selection:text-white">
      <Header />
      <HeroSection />
      <TrustSection />
      <FeeStructureSection />
      <GallerySection />
      <TestimonialSection />
      <ScarcitySection />
      <AdmissionFormSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
