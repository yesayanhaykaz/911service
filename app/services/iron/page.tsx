import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Iron & Steam Station Repair — 911 Service Yerevan',
  description: 'Professional iron and steam station repair in Yerevan. All brands.',
};

export default function IronPage() {
  return (
    <ServicePageTemplate
      serviceKey="iron"
      heroImage="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=1400&q=85&fit=crop"
      icon={<Zap className="w-5 h-5 text-white" />}
      accentColor="text-indigo-600"
      accentBg="bg-indigo-600"
    />
  );
}
