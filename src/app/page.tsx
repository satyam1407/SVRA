import HeroSection from '@/components/HeroSection';
import ChallengesSection from '@/components/ChallengesSection';
import FeaturesSection from '@/components/FeaturesSection';
import GetStartedSection from '@/components/GetStartedSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ChallengesSection />
      <FeaturesSection />
      <GetStartedSection />
      <PricingSection />
      <TestimonialsSection />
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
} 