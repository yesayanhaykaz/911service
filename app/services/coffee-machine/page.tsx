import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Coffee Machine Repair Yerevan — DeLonghi, Jura, Nespresso | 911 Service',
  description:
    'Expert coffee machine repair in Yerevan. DeLonghi, Jura, Saeco, Philips, Nespresso, Krups, Siemens. Pickup from home, professional repair, up to 6-month warranty.',
  keywords: [
    'coffee machine repair Yerevan',
    'DeLonghi repair',
    'Jura repair',
    'Nespresso repair',
    'Saeco repair',
    'Philips coffee repair',
    'կոֆեմեքենայի վերանորոգում',
    'ремонт кофемашин Ереван',
  ],
  alternates: { canonical: 'https://911service.am/services/coffee-machine' },
  openGraph: {
    title: 'Coffee Machine Repair Yerevan — 911 Service',
    description: 'DeLonghi, Jura, Nespresso, Saeco repair. Pickup from home, up to 6-month warranty.',
    url: 'https://911service.am/services/coffee-machine',
  },
};

export default function CoffeeMachinePage() {
  return (
    <ServicePageTemplate
      serviceKey="coffeeMachine"
      heroImage="https://i.pinimg.com/1200x/98/73/c4/9873c4ddbd7aabb7d554e4a77443b48f.jpg"
    />
  );
}
