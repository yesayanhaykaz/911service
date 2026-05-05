'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Wind, Zap, Car, Lightbulb, Bot, ArrowRight, MessageCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const wa = (msg: string) => `https://wa.me/37455721777?text=${encodeURIComponent(msg)}`;

export default function ServicesPage() {
  const { t } = useLang();

  const allServices = [
    {
      key: 'coffeeMachine' as const,
      icon: Coffee,
      image: 'https://i.pinimg.com/1200x/f3/37/e2/f337e25fb343307928bb3a665d455ecc.jpg',
      featured: true,
      accentBg: 'bg-blue-600',
      accentText: 'text-blue-600',
    },
    {
      key: 'robotVacuum' as const,
      icon: Bot,
      image: 'https://i.pinimg.com/1200x/ef/c9/f2/efc9f2b8633c85646569f466f84a86b3.jpg',
      featured: false,
      accentBg: 'bg-cyan-600',
      accentText: 'text-cyan-600',
    },
    {
      key: 'vacuum' as const,
      icon: Wind,
      image: 'https://i.pinimg.com/736x/cd/60/b5/cd60b51452be793ea21cb1ecb5e0ae82.jpg',
      featured: false,
      accentBg: 'bg-purple-500',
      accentText: 'text-purple-600',
    },
    {
      key: 'microwave' as const,
      icon: Zap,
      image: 'https://i.pinimg.com/736x/15/1e/87/151e87e87a2130eeaf833d04b5aab215.jpg',
      featured: false,
      accentBg: 'bg-orange-500',
      accentText: 'text-orange-600',
    },
    {
      key: 'hairDryer' as const,
      icon: Wind,
      image: 'https://i.pinimg.com/736x/d0/55/85/d055851dd1d9e54374fe277059d57852.jpg',
      featured: false,
      accentBg: 'bg-pink-500',
      accentText: 'text-pink-600',
    },
    {
      key: 'iron' as const,
      icon: Zap,
      image: 'https://i.pinimg.com/1200x/0b/1d/b5/0b1db5099caf83356bb4be3b7bbd4a3d.jpg',
      featured: false,
      accentBg: 'bg-indigo-500',
      accentText: 'text-indigo-600',
    },
    {
      key: 'ironAir' as const,
      icon: Zap,
      image: 'https://i.pinimg.com/736x/3c/63/e2/3c63e253d80e11ab73e1003f76f493be.jpg',
      featured: false,
      accentBg: 'bg-teal-500',
      accentText: 'text-teal-600',
    },
    {
      key: 'carCharger' as const,
      icon: Car,
      image: 'https://i.pinimg.com/1200x/10/87/bc/1087bcdfbf193bb0fb3ef9955123ecae.jpg',
      featured: false,
      accentBg: 'bg-green-500',
      accentText: 'text-green-600',
    },
    {
      key: 'homeElectrical' as const,
      icon: Lightbulb,
      image: 'https://i.pinimg.com/736x/ec/5d/6a/ec5d6af5a7a1db1e7bca7d4912a39acd.jpg',
      featured: false,
      accentBg: 'bg-yellow-500',
      accentText: 'text-yellow-600',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">{t.services.badge}</span>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              {t.services.title}{' '}
              <span className="text-blue-400">{t.services.title_accent}</span>{' '}
              {t.services.title_end}
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{t.services.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {allServices.map((svc, i) => {
            const entry = t.services_list[svc.key];
            const Icon = svc.icon;

            if (svc.featured) {
              return (
                <motion.div
                  key={svc.key}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.7 }}
                  className="relative rounded-3xl overflow-hidden bg-[#080808] group"
                >
                  <div className="absolute inset-0">
                    <Image src={svc.image} alt={entry.name} fill className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
                  </div>

                  <div className="relative p-10 lg:p-16 flex flex-col lg:flex-row gap-10 items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-4">
                        <div className={`w-10 h-10 ${svc.accentBg} rounded-xl flex items-center justify-center`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">Core Specialty</span>
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">{entry.name}</h2>
                      <div className="flex flex-wrap gap-3">
                        <Link href={`/services/${entry.slug}`} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl font-semibold text-sm transition-all hover:shadow-xl hover:shadow-blue-600/30 group/btn">
                          {t.services.featured_cta} <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Link>
                        <a href={wa(entry.waMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 px-6 py-3 rounded-2xl font-semibold text-sm transition-all">
                          <MessageCircle className="w-4 h-4 text-green-400" /> WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={svc.key}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (i % 4) * 0.07, duration: 0.5 }}
                className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 bg-white flex flex-col sm:flex-row"
              >
                <div className="relative w-full sm:w-56 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <Image src={svc.image} alt={entry.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-4 left-4 w-10 h-10 ${svc.accentBg} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{entry.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Link href={`/services/${entry.slug}`} className={`inline-flex items-center gap-1.5 ${svc.accentText} text-sm font-semibold hover:underline`}>
                      {t.services.featured_cta} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-gray-200 text-sm">|</span>
                    <a href={wa(entry.waMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-green-600 text-sm font-semibold hover:underline">
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
