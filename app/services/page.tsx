import { Metadata } from 'next';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'All Repair Services — Coffee Machine, Vacuum, Microwave | 911 Service Yerevan',
  description:
    'Coffee machine, robot vacuum, microwave, iron, hair dryer and more — professional appliance repair in Yerevan. Pickup from your home, up to 6-month warranty.',
  keywords: [
    'appliance repair Yerevan',
    'coffee machine repair',
    'robot vacuum repair',
    'microwave repair',
    'hair dryer repair',
    'iron repair',
    'home appliance repair Armenia',
    'ремонт техники Ереван',
    'կենցաղային տեխնիկայի վերանորոգում Երևան',
  ],
  alternates: { canonical: 'https://911service.am/services' },
  openGraph: {
    title: 'All Repair Services — 911 Service Yerevan',
    description: 'Coffee machine, robot vacuum, microwave repair and more. Pickup from home, up to 6-month warranty.',
    url: 'https://911service.am/services',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
