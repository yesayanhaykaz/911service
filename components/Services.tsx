'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Snowflake, Wind, Zap, Car, Lightbulb, ArrowRight, MessageCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { DeLonghiLogo, JuraLogo, NespressoLogo, SaecoLogo, PhilipsLogo, EspressoBadge, AutomaticBadge, CapsuleBadge } from './BrandLogos';

const wa = (msg: string) => `https://wa.me/37494911911?text=${encodeURIComponent(msg)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  const { t } = useLang();

  const secondaryServices = [
    {
      icon: Snowflake,
      key: 'refrigerator' as const,
      color: 'text-cyan-500', bg: 'bg-cyan-50',
      image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=400&q=80&fit=crop',
    },
    {
      icon: Zap,
      key: 'microwave' as const,
      color: 'text-orange-500', bg: 'bg-orange-50',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&q=80&fit=crop',
    },
    {
      icon: Wind,
      key: 'vacuum' as const,
      color: 'text-purple-500', bg: 'bg-purple-50',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop',
    },
    {
      icon: Zap,
      key: 'iron' as const,
      color: 'text-blue-500', bg: 'bg-blue-50',
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=400&q=80&fit=crop',
    },
    {
      icon: Wind,
      key: 'hairDryer' as const,
      color: 'text-pink-500', bg: 'bg-pink-50',
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80&fit=crop',
    },
    {
      icon: Car,
      key: 'carCharger' as const,
      color: 'text-green-500', bg: 'bg-green-50',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80&fit=crop',
    },
    {
      icon: Lightbulb,
      key: 'homeElectrical' as const,
      color: 'text-yellow-500', bg: 'bg-yellow-50',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&q=80&fit=crop',
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        {/* ─── Featured: Coffee Machine ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-[#080808] mb-6"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1570087935069-b57e0a4edc77?w=1400&q=75&fit=crop"
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
                {t.services.featured_title.split(' ').slice(0, -1).join(' ')}
                <br />
                <span className="text-blue-400">{t.services.featured_accent}</span>
              </h3>

              <p className="text-white/60 text-lg mb-8 leading-relaxed">{t.services.featured_desc}</p>

              {/* Brand logos */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <DeLonghiLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" />
                <JuraLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" />
                <NespressoLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" />
                <SaecoLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" />
                <PhilipsLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" />
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

        {/* ─── Secondary services grid ─── */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">{t.services.other_title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {secondaryServices.map((service, i) => {
            const svc = t.services_list[service.key];
            return (
              <motion.a
                key={svc.slug}
                custom={i} initial="hidden" whileInView="show"
                viewport={{ once: true }} variants={fadeUp}
                href={wa(svc.waMsg)}
                target="_blank" rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              >
                {/* Image */}
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={svc.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className={`absolute top-3 left-3 w-8 h-8 ${service.bg} rounded-xl flex items-center justify-center`}>
                    <service.icon className={`w-4 h-4 ${service.color}`} />
                  </div>
                  {/* WhatsApp hover indicator */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-bold text-gray-900 text-sm">{svc.name}</h4>
                  <p className="text-gray-400 text-xs mt-1">Tap to contact →</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
