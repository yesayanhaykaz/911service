'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Wind, Zap, Car, Lightbulb, Bot, ArrowRight, MessageCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import {
  DeLonghiLogo, JuraLogo, NespressoLogo, SaecoLogo, PhilipsLogo, SiemensLogo, KrupsLogo, MelittaLogo,
  NuovaSimonelliLogo, LaMarzoccoLogo, GaggiaLogo, ECMLogo, LelitLogo, RocketEspressoLogo, BezzeraLogo,
  EspressoBadge, AutomaticBadge, CapsuleBadge,
} from './BrandLogos';

const wa = (msg: string) => `https://wa.me/37455721777?text=${encodeURIComponent(msg)}`;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  const { t } = useLang();

  const allServices = [
    {
      icon: Coffee,
      key: 'coffeeMachine' as const,
      color: 'text-blue-500', bg: 'bg-blue-50', accent: 'bg-blue-600',
      image: 'https://i.pinimg.com/1200x/f3/37/e2/f337e25fb343307928bb3a665d455ecc.jpg',
    },
    {
      icon: Bot,
      key: 'robotVacuum' as const,
      color: 'text-cyan-500', bg: 'bg-cyan-50', accent: 'bg-cyan-600',
      image: 'https://i.pinimg.com/1200x/ef/c9/f2/efc9f2b8633c85646569f466f84a86b3.jpg',
    },
    {
      icon: Wind,
      key: 'vacuum' as const,
      color: 'text-purple-500', bg: 'bg-purple-50', accent: 'bg-purple-600',
      image: 'https://i.pinimg.com/736x/cd/60/b5/cd60b51452be793ea21cb1ecb5e0ae82.jpg',
    },
    {
      icon: Zap,
      key: 'microwave' as const,
      color: 'text-orange-500', bg: 'bg-orange-50', accent: 'bg-orange-500',
      image: 'https://i.pinimg.com/736x/15/1e/87/151e87e87a2130eeaf833d04b5aab215.jpg',
    },
    {
      icon: Wind,
      key: 'hairDryer' as const,
      color: 'text-pink-500', bg: 'bg-pink-50', accent: 'bg-pink-500',
      image: 'https://i.pinimg.com/736x/d0/55/85/d055851dd1d9e54374fe277059d57852.jpg',
    },
    {
      icon: Zap,
      key: 'iron' as const,
      color: 'text-indigo-500', bg: 'bg-indigo-50', accent: 'bg-indigo-500',
      image: 'https://i.pinimg.com/1200x/0b/1d/b5/0b1db5099caf83356bb4be3b7bbd4a3d.jpg',
    },
    {
      icon: Zap,
      key: 'ironAir' as const,
      color: 'text-teal-500', bg: 'bg-teal-50', accent: 'bg-teal-500',
      image: 'https://i.pinimg.com/736x/3c/63/e2/3c63e253d80e11ab73e1003f76f493be.jpg',
    },
    {
      icon: Car,
      key: 'carCharger' as const,
      color: 'text-green-500', bg: 'bg-green-50', accent: 'bg-green-500',
      image: 'https://i.pinimg.com/1200x/10/87/bc/1087bcdfbf193bb0fb3ef9955123ecae.jpg',
    },
    {
      icon: Lightbulb,
      key: 'homeElectrical' as const,
      color: 'text-yellow-500', bg: 'bg-yellow-50', accent: 'bg-yellow-500',
      image: 'https://i.pinimg.com/736x/ec/5d/6a/ec5d6af5a7a1db1e7bca7d4912a39acd.jpg',
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
          className="relative rounded-3xl overflow-hidden bg-[#080808] mb-8"
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

              {/* Brand logos row 1 — main brands */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <DeLonghiLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <JuraLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <NespressoLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <SaecoLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <PhilipsLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
                <SiemensLogo className="h-7 opacity-90 hover:opacity-100 transition-opacity" dark />
              </div>
              {/* Brand logos row 2 — professional brands */}
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

        {/* ─── All services grid — vertical cards ─── */}
        <h3 className="text-xl font-bold text-gray-900 mb-4">{t.services.other_title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {allServices.map((service, i) => {
            const svc = t.services_list[service.key];
            return (
              <motion.div
                key={svc.slug}
                custom={i} initial="hidden" whileInView="show"
                viewport={{ once: true }} variants={fadeUp}
              >
                <Link
                  href={`/services/${svc.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer bg-white block"
                >
                  {/* Image — taller for vertical/portrait look */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={svc.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className={`absolute top-3 left-3 w-8 h-8 ${service.bg} rounded-xl flex items-center justify-center`}>
                      <service.icon className={`w-4 h-4 ${service.color}`} />
                    </div>
                    {/* Arrow on hover */}
                    <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">{svc.name}</h4>
                    <p className="text-gray-400 text-xs mt-1">{t.services.featured_cta} →</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
