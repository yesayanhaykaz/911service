import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Snowflake } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Refrigerator Repair — 911 Servis Yerevan',
  description: 'Professional refrigerator repair in Yerevan. All brands. Fast home service, 12-month warranty.',
};

export default function RefrigeratorPage() {
  return (
    <ServicePageTemplate
      serviceKey="refrigerator"
      heroImage="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=1400&q=85&fit=crop"
      icon={<Snowflake className="w-5 h-5 text-white" />}
      accentColor="text-cyan-600"
      accentBg="bg-cyan-600"
    />
  );
}
