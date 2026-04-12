import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Problems from '@/components/Problems';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Problems />
      <WhyUs />
      <HowItWorks />
      <Reviews />
      <FinalCTA />
    </>
  );
}
