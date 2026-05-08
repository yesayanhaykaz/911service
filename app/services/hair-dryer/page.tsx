import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Hair Dryer Repair — 911 Service Yerevan',
  description: 'Professional hair dryer and hair care appliance repair in Yerevan.',
};

export default function HairDryerPage() {
  return (
    <ServicePageTemplate
      serviceKey="hairDryer"
      heroImage="https://i.pinimg.com/736x/d0/55/85/d055851dd1d9e54374fe277059d57852.jpg"
    />
  );
}
