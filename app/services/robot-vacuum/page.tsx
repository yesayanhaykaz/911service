import ServicePageTemplate from '@/components/ServicePageTemplate';
import { Bot } from 'lucide-react';

export default function RobotVacuumPage() {
  return (
    <ServicePageTemplate
      serviceKey="robotVacuum"
      heroImage="https://i.pinimg.com/1200x/ef/c9/f2/efc9f2b8633c85646569f466f84a86b3.jpg"
      icon={<Bot className="w-5 h-5 text-white" />}
      accentColor="text-cyan-600"
      accentBg="bg-cyan-600"
    />
  );
}
