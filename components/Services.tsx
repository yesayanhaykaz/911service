'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Coffee } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import {
  DeLonghiLogo, JuraLogo, NespressoLogo, SaecoLogo, PhilipsLogo, SiemensLogo, KrupsLogo, MelittaLogo,
  NuovaSimonelliLogo, LaMarzoccoLogo, GaggiaLogo, ECMLogo, LelitLogo, RocketEspressoLogo, BezzeraLogo,
  EspressoBadge, AutomaticBadge, CapsuleBadge,
} from './BrandLogos';
import { HOUSEHOLD_KEYS, SERVICE_META } from './ServiceMeta';

const wa = (msg: string) => `https://wa.me/37455721777?text=${encodeURIComponent(msg)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">
            {t.services.badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 tracking-tight">
            {t.services.title}
            <span className="text-blue-600"> {t.services.title_accent} </span>
            {t.services.title_end}
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{t.services.subtitle}</p>
        </motion.div>

        {/* ─── Household Appliances grid — FIRST, directly below hero ─── */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-gray-900 mb-5">{t.services.other_title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {HOUSEHOLD_KEYS.map((key, i) => {
              const svc = t.services_list[key];
              const meta = SERVICE_META[key];
              const Icon = meta.icon;
              return (
                <motion.div
                  key={svc.slug}
                  custom={i} initial="hidden" whileInView="show"
                  viewport={{ once: true }} variants={fadeUp}
                >
                  <Link
                    href={`/services/${svc.slug}`}
                    className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 cursor-pointer bg-white block"
                    aria-label={svc.name}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={meta.image}
                        alt={svc.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {/* Icon badge */}
                      <div className={`absolute top-3 left-3 w-8 h-8 ${meta.iconBg} rounded-xl flex items-center justify-center shadow-sm`}>
                        <Icon className={`w-4 h-4 ${meta.iconColor}`} />
                      </div>
                      {/* Arrow on hover */}
                      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 text-sm leading-tight">{svc.name}</h4>
                      <p className={`${meta.accentText} text-xs mt-1 font-medium`}>{t.services.featured_cta} →</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Featured: Coffee Machine ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-[#080808]"
        >
          <div className="absolute inset-0">
            <Image
              src="https://i.pinimg.com/1200x/f3/37/e2/f337e25fb343307928bb3a665d455ecc.jpg"
              alt="Coffee machine repair"
              fill className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <div className="relative p-10 lg:p-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
                <Coffee className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-blue-300 text-xs font-semibold tracking-wide uppercase">{t.services.featured_badge}</span>
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                {t.services.featured_title}
                <br />
                <span className="text-blue-400">{t.services.featured_accent}</span>
              </h3>

              <p className="text-white/60 text-lg mb-8 leading-relaxed">{t.services.featured_desc}</p>

              {/* Brand logos */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <DeLonghiLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <JuraLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <NespressoLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <SaecoLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <PhilipsLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <SiemensLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <KrupsLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <MelittaLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <NuovaSimonelliLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <LaMarzoccoLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <GaggiaLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <ECMLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <LelitLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <RocketEspressoLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <BezzeraLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
              </div>

              {/* Type badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <EspressoBadge className="h-8" />
                <AutomaticBadge className="h-8" />
                <CapsuleBadge className="h-8" />
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/services/coffee-machine"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30 group"
                >
                  {t.services.featured_cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={wa(t.services_list.coffeeMachine.waMsg)}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 backdrop-blur-sm"
                >
                  <MessageCircle className="w-4 h-4 text-green-400" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
