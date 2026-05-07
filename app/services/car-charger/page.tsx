import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Car } from 'lucide-react';

export const metadata: Metadata = {
  title: 'EV & Car Charger Installation — 911 Service Yerevan',
  description: 'Professional EV charger and car charging station installation in Yerevan.',
};

export default function CarChargerPage() {
  return (
    <ServicePageTemplate
      serviceKey="carCharger"
      heroImage="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1400&q=85&fit=crop"
      icon={<Car className="w-5 h-5 text-white" />}
      accentColor="text-green-600"
      accentBg="bg-green-600"
    />
  );
}
