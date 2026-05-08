import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import JsonLd from '@/components/JsonLd';

const BASE = 'https://911service.am';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: '911 Service — Coffee Machine & Appliance Repair Yerevan',
    template: '%s | 911 Service Yerevan',
  },
  description:
    'Professional coffee machine and household appliance repair in Yerevan. We pick up from your home, repair, and return with up to 6-month warranty. DeLonghi, Jura, Philips, Nespresso and more.',
  keywords: [
    'coffee machine repair Yerevan',
    'appliance repair Yerevan',
    'DeLonghi repair Armenia',
    'Jura repair Yerevan',
    'Nespresso repair',
    'robot vacuum repair Yerevan',
    'microwave repair Yerevan',
    'hair dryer repair',
    'home appliance repair Armenia',
    'ремонт кофемашин Ереван',
    'ремонт бытовой техники Ереван',
    'կոֆեմեքենայի վերանորոգում Երևան',
    'կենցաղային տեխնիկայի վերանորոգում',
    '911 service Yerevan',
  ],
  authors: [{ name: '911 Service', url: BASE }],
  creator: '911 Service',
  publisher: '911 Service',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: '911 Service — Coffee Machine & Appliance Repair Yerevan',
    description:
      'Pickup from home, repair, return — up to 6-month warranty. Professional coffee machine & household appliance repair in Yerevan.',
    url: BASE,
    siteName: '911 Service',
    locale: 'hy_AM',
    alternateLocale: ['ru_RU', 'en_US'],
    type: 'website',
    images: [
      {
        url: '/logo.jpg',
        width: 1254,
        height: 1254,
        alt: '911 Service — Appliance Repair Yerevan',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '911 Service — Appliance Repair Yerevan',
    description: 'Pickup, repair, return — up to 6-month warranty',
    images: ['/logo.jpg'],
  },
  alternates: {
    canonical: BASE,
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  category: 'Home Services',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hy" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
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
