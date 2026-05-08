'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MessageCircle, PowerOff, Thermometer, Volume2, Droplets, Zap, HelpCircle, PackageCheck, Wrench, PackageOpen, Phone } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { SERVICE_KEYS, SERVICE_META } from '@/components/ServiceMeta';
import { usePhoneProps } from '@/hooks/useIsMobile';

const wa = (msg: string) => `https://wa.me/37455721777?text=${encodeURIComponent(msg)}`;

const problemIcons = [PowerOff, Thermometer, Volume2, Droplets, Zap, HelpCircle];
const problemColors = [
  { icon: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
  { icon: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100' },
  { icon: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-100' },
  { icon: 'text-gray-400', bg: 'bg-gray-100', border: 'border-gray-200' },
];

const pickupSteps = [
  { icon: Phone, label: 'contactStep', color: 'bg-blue-600' },
  { icon: PackageCheck, label: 'pickupStep', color: 'bg-amber-500' },
  { icon: Wrench, label: 'repairStep', color: 'bg-purple-600' },
  { icon: PackageOpen, label: 'returnStep', color: 'bg-green-600' },
];

export default function ServicesPage() {
  const { t } = useLang();
  const phoneProps = usePhoneProps();

  const featured = SERVICE_META.coffeeMachine;
  const featuredEntry = t.services_list.coffeeMachine;
  const FeaturedIcon = featured.icon;

  return (
    <div className="pt-20 overflow-x-hidden">
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
            <p className="text-white/60 text-lg leading-relaxed mb-6">{t.services.subtitle}</p>
            <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-500/15 border border-amber-400/30">
              <PackageCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-amber-200 text-sm font-semibold">{t.hero.trust_home}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── HOW WE WORK: Pickup → Repair → Return banner ── */}
      <section className="bg-[#0f172a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {t.howItWorks.steps.map((step, i) => {
              const StepIcon = pickupSteps[i].icon;
              return (
                <div key={i} className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 ${pickupSteps[i].color} rounded-xl flex items-center justify-center shrink-0`}>
                    <StepIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-xs leading-tight">{step.title}</p>
                    <p className="text-white/40 text-[10px] truncate">{step.desc.split(',')[0]}</p>
                  </div>
                </div>
              );
            })}
          </div>
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
                  <p className="text-white/60 text-base mb-8 max-w-lg leading-relaxed">
                    {t.services.featured_desc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-blue-600/30 group-hover:shadow-xl group-hover:shadow-blue-600/40 transition-all">
                      {t.services.featured_cta}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span
                      className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 px-6 py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer"
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

          {/* All other services — tall cards */}
          <h3 className="text-xl font-bold text-gray-900 mb-6">{t.services.other_title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                  transition={{ delay: (i % 4) * 0.07, duration: 0.5 }}
                  className="relative group"
                >
                  <Link
                    href={`/services/${entry.slug}`}
                    className="block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-transparent hover:-translate-y-1 transition-all duration-300 bg-white"
                    aria-label={entry.name}
                  >
                    {/* Image — tall */}
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={meta.image}
                        alt={entry.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                      <div className={`absolute top-3 left-3 w-9 h-9 ${meta.accentBg} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-4.5 h-4.5 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-bold text-base leading-tight">{entry.name}</h3>
                      </div>
                    </div>

                    {/* Card footer */}
                    <div className="flex items-center justify-between px-4 py-3.5 border-t border-gray-50">
                      <span className={`text-sm font-bold ${meta.accentText} flex items-center gap-1.5`}>
                        {t.services.featured_cta}
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-green-600 text-sm font-semibold cursor-pointer hover:text-green-700 transition-colors"
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

      {/* ── Familiar problems? (same icons as homepage) ── */}
      <section className="py-20 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://i.pinimg.com/1200x/f3/37/e2/f337e25fb343307928bb3a665d455ecc.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.06]"
          />
          <div className="absolute inset-0 bg-gray-50" style={{ opacity: 0.93 }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="inline-block text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">
              {t.problems.badge}
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 tracking-tight">
              {t.problems.title}{' '}
              <span className="text-blue-600">{t.problems.title_accent}</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-lg mx-auto">{t.problems.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {t.problems.items.map((problem, i) => {
              const Icon = problemIcons[i];
              const c = problemColors[i];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className={`bg-white rounded-2xl p-6 border ${c.border} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${c.icon}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{problem.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{problem.desc}</p>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-gray-500 mb-6 text-base">{t.servicePages.shared.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                {...phoneProps}
                className="inline-flex items-center justify-center gap-2.5 bg-[#0f172a] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                +374 55 721 777
              </a>
              <a
                href="https://wa.me/37455721777"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 border-2 border-green-500 text-green-700 bg-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-green-500 hover:text-white transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
