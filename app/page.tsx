import { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Problems from '@/components/Problems';
import WhyUs from '@/components/WhyUs';
import HowItWorks from '@/components/HowItWorks';
import FinalCTA from '@/components/FinalCTA';

export const metadata: Metadata = {
  title: '911 Service — Coffee Machine & Appliance Repair Yerevan',
  description:
    'Professional coffee machine and household appliance repair in Yerevan. We pick up from your home, repair, and return with up to 6-month warranty. DeLonghi, Jura, Philips, Nespresso and more.',
  alternates: { canonical: 'https://911service.am' },
  openGraph: {
    title: '911 Service — Coffee Machine & Appliance Repair Yerevan',
    description: 'Pickup from home, repair, return — up to 6-month warranty. Yerevan.',
    url: 'https://911service.am',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Problems />
      <HowItWorks />
      <FinalCTA />
    </>
  );
}
