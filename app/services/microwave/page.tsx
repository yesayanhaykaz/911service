import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Microwave Repair — 911 Service Yerevan',
  description: 'Professional microwave oven repair in Yerevan. All brands.',
};

export default function MicrowavePage() {
  return (
    <ServicePageTemplate
      serviceKey="microwave"
      heroImage="https://i.pinimg.com/736x/15/1e/87/151e87e87a2130eeaf833d04b5aab215.jpg"
    />
  );
}
