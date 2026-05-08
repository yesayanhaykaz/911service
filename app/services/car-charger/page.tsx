import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'EV & Car Charger Installation — 911 Service Yerevan',
  description: 'Professional EV charger and car charging station installation in Yerevan.',
};

export default function CarChargerPage() {
  return (
    <ServicePageTemplate
      serviceKey="carCharger"
      heroImage="https://i.pinimg.com/1200x/10/87/bc/1087bcdfbf193bb0fb3ef9955123ecae.jpg"
    />
  );
}
