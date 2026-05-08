'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { SERVICE_KEYS, SERVICE_META } from '@/components/ServiceMeta';

const wa = (msg: string) => `https://wa.me/37455721777?text=${encodeURIComponent(msg)}`;

export default function ServicesPage() {
  const { t } = useLang();

  const featured = SERVICE_META.coffeeMachine;
  const featuredEntry = t.services_list.coffeeMachine;
  const FeaturedIcon = featured.icon;

  return (
    <div className="pt-20">
      {/* ── Hero with background image ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <Image
          src="https://i.pinimg.com/1200x/98/73/c4/9873c4ddbd7aabb7d554e4a77443b48f.jpg"
          alt="Coffee machine repair"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
              {t.services.badge}
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-5 leading-tight tracking-tight">
              {t.services.title}{' '}
              <span className="text-blue-400">{t.services.title_accent}</span>{' '}
              {t.services.title_end}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{t.services.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured: Coffee Machine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <Link
              href={`/services/${featuredEntry.slug}`}
              className="group relative rounded-3xl overflow-hidden bg-[#080808] block"
              aria-label={featuredEntry.name}
            >
              <div className="absolute inset-0">
                <Image
                  src={featured.image}
                  alt={featuredEntry.name}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
              </div>

              <div className="relative p-10 lg:p-16 flex flex-col lg:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 ${featured.accentBg} rounded-xl flex items-center justify-center`}>
                      <FeaturedIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">
                      {t.services.featured_badge}
                    </span>
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">{featuredEntry.name}</h2>
                  <p className="text-white/60 text-base mb-6 max-w-lg leading-relaxed">
                    {t.services.featured_desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold text-sm transition-all group-hover:shadow-xl group-hover:shadow-blue-600/30">
                      {t.services.featured_cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    {/* WhatsApp as separate non-nested anchor via onClick stop-propagation */}
                    <span
                      className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 px-6 py-3 rounded-2xl font-semibold text-sm transition-all cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(wa(featuredEntry.waMsg), '_blank', 'noopener,noreferrer');
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          window.open(wa(featuredEntry.waMsg), '_blank', 'noopener,noreferrer');
                        }
                      }}
                    >
                      <MessageCircle className="w-4 h-4 text-green-400" />
                      WhatsApp
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* All other services — tall cards, full clickable */}
          <h3 className="text-xl font-bold text-gray-900 mb-6">{t.services.other_title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_KEYS.filter((k) => k !== 'coffeeMachine').map((key, i) => {
              const entry = t.services_list[key];
              const meta = SERVICE_META[key];
              const Icon = meta.icon;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
                  className="relative group"
                >
                  {/* Full-card link */}
                  <Link
                    href={`/services/${entry.slug}`}
                    className="block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-300 bg-white"
                    aria-label={entry.name}
                  >
                    {/* Image — tall */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={meta.image}
                        alt={entry.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      {/* Icon badge */}
                      <div className={`absolute top-4 left-4 w-10 h-10 ${meta.accentBg} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      {/* Name overlay at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-bold text-lg leading-tight">{entry.name}</h3>
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className={`text-sm font-semibold ${meta.accentText} flex items-center gap-1.5`}>
                        {t.services.featured_cta}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      {/* WhatsApp opens without navigating to service page */}
                      <span
                        className="flex items-center gap-1.5 text-green-600 text-sm font-semibold hover:text-green-700 transition-colors cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(wa(entry.waMsg), '_blank', 'noopener,noreferrer');
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`WhatsApp ${entry.name}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            window.open(wa(entry.waMsg), '_blank', 'noopener,noreferrer');
                          }
                        }}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        WhatsApp
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
