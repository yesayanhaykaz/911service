'use client';

import Link from 'next/link';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/services', label: t.nav.services },
    { href: '/pricing', label: t.nav.pricing },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ];

  const serviceLinks = Object.values(t.services_list).map((s) => ({
    href: `/services/${s.slug}`,
    label: s.name,
  }));

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-sm">911</span>
              </div>
              <div>
                <span className="text-white font-bold text-base">Servis</span>
                <span className="block text-blue-500 text-[10px] font-medium leading-none -mt-0.5">Yerevan</span>
              </div>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">{t.footer.desc}</p>
            <div className="flex gap-3">
              <a href="tel:+37455721777" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                <Phone className="w-4 h-4 text-white/60" />
              </a>
              <a href="https://wa.me/37455721777" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-green-600 flex items-center justify-center transition-colors duration-200">
                <MessageCircle className="w-4 h-4 text-white/60" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">{t.footer.nav_title}</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">{t.footer.services_title}</h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm">{t.footer.contact_title}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <a href="tel:+37455721777" className="text-white/70 hover:text-white text-sm transition-colors">{t.nav.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                <a href="https://wa.me/37455721777" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white text-sm transition-colors">WhatsApp</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm">{t.footer.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                <div className="text-white/50 text-sm">
                  <p>{t.footer.hours_weekday}: {t.footer.hours_range1}</p>
                  <p>{t.footer.hours_weekend}: {t.footer.hours_range2}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">{t.footer.copyright}</p>
          <p className="text-white/20 text-xs">{t.footer.seo}</p>
        </div>
      </div>
    </footer>
  );
}
