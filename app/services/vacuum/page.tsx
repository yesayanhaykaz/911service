import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Wind } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vacuum Cleaner Repair — 911 Servis Yerevan',
  description: 'Professional vacuum cleaner repair in Yerevan. All brands and types. Fast home service.',
};

export default function VacuumPage() {
  return (
    <ServicePageTemplate
      serviceKey="vacuum"
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=85&fit=crop"
      icon={<Wind className="w-5 h-5 text-white" />}
      accentColor="text-purple-600"
      accentBg="bg-purple-600"
    />
  );
}
