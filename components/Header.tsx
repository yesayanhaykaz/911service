'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { SERVICE_KEYS, SERVICE_META } from './ServiceMeta';
import { usePhoneProps } from '@/hooks/useIsMobile';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLang();
  const phoneProps = usePhoneProps();
  const isHero = pathname === '/';
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close services dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isDark = isHero && !scrolled;

  const isServicesActive = pathname === '/services' || pathname.startsWith('/services/');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
          : isHero
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-10 h-10 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="911 Service"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="leading-none hidden sm:block">
              <span
                className={`font-bold text-base tracking-tight block transition-colors ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                911 Service
              </span>
              <span className="text-blue-500 text-[10px] font-medium">Yerevan</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${
                pathname === '/'
                  ? 'text-blue-600'
                  : isDark
                  ? 'text-white/80 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Services with dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen((o) => !o)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isServicesActive
                    ? 'text-blue-600'
                    : isDark
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {t.nav.services}
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden py-2">
                  {/* All services link */}
                  <Link
                    href="/services"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors border-b border-gray-100 mb-1"
                  >
                    {t.nav.all_services}
                  </Link>

                  {/* Individual services */}
                  {SERVICE_KEYS.map((key) => {
                    const meta = SERVICE_META[key];
                    const entry = t.services_list[key];
                    const Icon = meta.icon;
                    return (
                      <Link
                        key={key}
                        href={`/services/${entry.slug}`}
                        onClick={() => setServicesOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2 text-sm transition-colors ${
                          pathname === `/services/${entry.slug}`
                            ? 'bg-gray-50 text-gray-900 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 ${meta.accentBg} rounded-lg flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        {entry.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {[
              { href: '/pricing', label: t.nav.pricing },
              { href: '/about', label: t.nav.about },
              { href: '/contact', label: t.nav.contact },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'text-blue-600'
                    : isDark
                    ? 'text-white/80 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher dark={isDark} />
            <a
              {...phoneProps}
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isDark ? 'text-white/70 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Phone className="w-4 h-4" />
              {t.nav.phone}
            </a>
            <a
              href={`https://wa.me/37455721777?text=${encodeURIComponent(t.nav.book)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            >
              {t.nav.book}
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher dark={isDark} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isDark ? 'text-white hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {t.nav.home}
            </Link>

            {/* Services expandable */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isServicesActive ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {t.nav.services}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 ml-4 border-l-2 border-gray-100 pl-3 space-y-0.5">
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded-xl text-sm font-semibold text-blue-600 hover:bg-blue-50"
                  >
                    {t.nav.all_services}
                  </Link>
                  {SERVICE_KEYS.map((key) => {
                    const meta = SERVICE_META[key];
                    const entry = t.services_list[key];
                    const Icon = meta.icon;
                    return (
                      <Link
                        key={key}
                        href={`/services/${entry.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50"
                      >
                        <div
                          className={`w-6 h-6 ${meta.accentBg} rounded-md flex items-center justify-center shrink-0`}
                        >
                          <Icon className="w-3 h-3 text-white" />
                        </div>
                        {entry.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {[
              { href: '/pricing', label: t.nav.pricing },
              { href: '/about', label: t.nav.about },
              { href: '/contact', label: t.nav.contact },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <a
                {...phoneProps}
                className="flex items-center justify-center gap-2 bg-gray-50 text-gray-800 px-4 py-3 rounded-xl text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                {t.nav.phone}
              </a>
              <a
                href={`https://wa.me/37455721777?text=${encodeURIComponent(t.nav.book)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl text-sm font-semibold"
              >
                {t.nav.book}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
