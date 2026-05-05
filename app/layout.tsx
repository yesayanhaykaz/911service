import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';

export const metadata: Metadata = {
  title: '911 Servis — Coffee Machine & Appliance Repair Yerevan',
  description: 'Fast, professional coffee machine and household appliance repair at your home in Yerevan. 12-month warranty. Call now.',
  keywords: 'coffee machine repair, appliance repair, Yerevan, Հայastан, ремонт кофемашин',
  openGraph: {
    title: '911 Servis — Coffee Machine Repair',
    description: 'Fast, professional repair at your home',
    type: 'website',
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
