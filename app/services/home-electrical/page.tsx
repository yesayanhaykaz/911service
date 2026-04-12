import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Electrical Services — 911 Servis Yerevan',
  description: 'Professional home electrical services in Yerevan. Lighting, sockets, panels, and more.',
};

export default function HomeElectricalPage() {
  return (
    <ServicePageTemplate
      serviceKey="homeElectrical"
      heroImage="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1400&q=85&fit=crop"
      icon={<Lightbulb className="w-5 h-5 text-white" />}
      accentColor="text-yellow-600"
      accentBg="bg-yellow-500"
    />
  );
}
