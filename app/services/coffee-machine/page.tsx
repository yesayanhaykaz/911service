import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Coffee } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Coffee Machine Repair — 911 Servis Yerevan',
  description: 'Expert coffee machine repair in Yerevan. DeLonghi, Jura, Saeco, Philips, Nespresso. Fast, professional, 12-month warranty.',
};

export default function CoffeeMachinePage() {
  return (
    <ServicePageTemplate
      serviceKey="coffeeMachine"
      heroImage="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1400&q=85&fit=crop"
      icon={<Coffee className="w-5 h-5 text-white" />}
      accentColor="text-blue-600"
      accentBg="bg-blue-600"
    />
  );
}
