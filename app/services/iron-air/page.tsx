import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Zap } from 'lucide-react';

export default function IronAirPage() {
  return (
    <ServicePageTemplate
      serviceKey="ironAir"
      heroImage="https://i.pinimg.com/736x/3c/63/e2/3c63e253d80e11ab73e1003f76f493be.jpg"
      icon={<Zap className="w-5 h-5 text-white" />}
      accentColor="text-teal-600"
      accentBg="bg-teal-600"
    />
  );
}
