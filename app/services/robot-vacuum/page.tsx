import { Metadata } from 'next';
import ServicePageTemplate from '@/components/ServicePageTemplate';

export const metadata: Metadata = {
  title: 'Robot Vacuum Repair — 911 Service Yerevan',
  description:
    'Professional robot vacuum cleaner repair in Yerevan. iRobot Roomba, Roborock, Xiaomi, Ecovacs and more. Pickup from home, up to 6-month warranty.',
  alternates: { canonical: 'https://911service.am/services/robot-vacuum' },
};

export default function RobotVacuumPage() {
  return (
    <ServicePageTemplate
      serviceKey="robotVacuum"
      heroImage="https://i.pinimg.com/1200x/ef/c9/f2/efc9f2b8633c85646569f466f84a86b3.jpg"
    />
  );
}
