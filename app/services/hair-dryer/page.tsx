import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hair Dryer Repair — 911 Servis Yerevan',
  description: 'Professional hair dryer and hair care appliance repair in Yerevan.',
};

export default function HairDryerPage() {
  return (
    <ServicePageTemplate
      serviceKey="hairDryer"
      heroImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=85&fit=crop"
      icon={<Wind className="w-5 h-5 text-white" />}
      accentColor="text-pink-600"
      accentBg="bg-pink-600"
    />
  );
}
