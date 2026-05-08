import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Vacuum Cleaner Repair — 911 Service Yerevan',
  description: 'Professional vacuum cleaner repair in Yerevan. All brands and types.',
};

export default function VacuumPage() {
  return (
    <ServicePageTemplate
      serviceKey="vacuum"
      heroImage="https://i.pinimg.com/736x/cd/60/b5/cd60b51452be793ea21cb1ecb5e0ae82.jpg"
    />
  );
}
