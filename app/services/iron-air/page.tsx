import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Steam Iron & Steam Station Repair — 911 Service Yerevan',
  description:
    'Professional steam iron and steam station repair in Yerevan. Philips, Tefal, Rowenta, Bosch and more. Pickup from home, up to 6-month warranty.',
  alternates: { canonical: 'https://911service.am/services/iron-air' },
};

export default function IronAirPage() {
  return (
    <ServicePageTemplate
      serviceKey="ironAir"
      heroImage="https://i.pinimg.com/736x/3c/63/e2/3c63e253d80e11ab73e1003f76f493be.jpg"
    />
  );
}
