import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Microwave Repair — 911 Service Yerevan',
  description: 'Professional microwave oven repair in Yerevan. All brands. Fast home service.',
};

export default function MicrowavePage() {
  return (
    <ServicePageTemplate
      serviceKey="microwave"
      heroImage="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&q=85&fit=crop"
      icon={<Zap className="w-5 h-5 text-white" />}
      accentColor="text-orange-600"
      accentBg="bg-orange-600"
    />
  );
}
