import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Coffee Machine Repair — 911 Service Yerevan',
  description: 'Expert coffee machine repair in Yerevan. DeLonghi, Jura, Saeco, Philips, Nespresso. Fast, professional, up to 6-month warranty.',
};

export default function CoffeeMachinePage() {
  return (
    <ServicePageTemplate
      serviceKey="coffeeMachine"
      heroImage="https://i.pinimg.com/1200x/98/73/c4/9873c4ddbd7aabb7d554e4a77443b48f.jpg"
    />
  );
}
