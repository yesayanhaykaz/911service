import type { Metadata } from 'next';
import Script from 'next/script';
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

        {/* Yandex Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">{`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for(var j=0;j<document.scripts.length;j++){if(document.scripts[j].src===r){return;}}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window,document,'script','https://mc.yandex.ru/metrika/tag.js?id=109126244','ym');
          ym(109126244,'init',{
            ssr:true,webvisor:true,clickmap:true,
            ecommerce:"dataLayer",referrer:document.referrer,
            url:location.href,accurateTrackBounce:true,trackLinks:true
          });
        `}</Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/109126244"
              style={{ position: 'absolute', left: '-9999px' }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
