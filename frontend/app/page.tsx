import Navbar from '../components/layout/Navbar';
import Hero from '../components/landing/Hero';
import SocialProof from '../components/landing/SocialProof';
import BeforeAfter from '../components/landing/BeforeAfter';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import VideoShowcase from '../components/landing/VideoShowcase';
import Testimonials from '../components/landing/Testimonials';
import Pricing from '../components/landing/Pricing';
import FAQ from '../components/landing/FAQ';
import FinalCTA from '../components/landing/FinalCTA';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: 'ViralCraft - Turn Long Videos Into Viral Shorts Automatically',
  description: 'AI-powered platform that automatically finds the best moments in your videos, crops to portrait mode, generates subtitles, and exports viral-ready shorts.',
};

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030014] text-white flex flex-col">
      {/* Global Navbar */}
      <Navbar />

      {/* Main landing section flow */}
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <BeforeAfter />
        <Features />
        <HowItWorks />
        <VideoShowcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

