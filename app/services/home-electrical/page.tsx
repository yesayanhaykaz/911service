import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Home Electrical Services — 911 Service Yerevan',
  description: 'Professional home electrical services in Yerevan.',
};

export default function HomeElectricalPage() {
  return (
    <ServicePageTemplate
      serviceKey="homeElectrical"
      heroImage="https://i.pinimg.com/736x/ec/5d/6a/ec5d6af5a7a1db1e7bca7d4912a39acd.jpg"
    />
  );
}
