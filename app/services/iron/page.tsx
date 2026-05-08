import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Iron & Steam Station Repair — 911 Service Yerevan',
  description: 'Professional iron and steam station repair in Yerevan. All brands.',
};

export default function IronPage() {
  return (
    <ServicePageTemplate
      serviceKey="iron"
      heroImage="https://i.pinimg.com/1200x/0b/1d/b5/0b1db5099caf83356bb4be3b7bbd4a3d.jpg"
    />
  );
}
