import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';

export const metadata: Metadata = {
  title: '911 Service — Coffee Machine & Appliance Repair Yerevan',
  description:
    'Fast, professional coffee machine and household appliance repair in Yerevan. We pick up from your home, repair in our workshop, and return with up to 6-month warranty.',
  keywords:
    'coffee machine repair, appliance repair, Yerevan, Հայaстан, ремонт кофемашин, robot vacuum repair',
  openGraph: {
    title: '911 Service — Coffee Machine Repair Yerevan',
    description: 'Pickup, repair, delivery — up to 6-month warranty',
    type: 'website',
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hy" className="scroll-smooth">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyCallButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
