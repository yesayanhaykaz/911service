'use client';

import { motion } from 'framer-motion';
import { Award, Shield, Users, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLang } from '@/contexts/LanguageContext';
import { BrandLogo } from '@/components/BrandLogos';

const coffeeBrands = [
  'DeLonghi', 'Jura', 'Saeco', 'Philips', 'Siemens',
  'Nespresso', 'Dolce Gusto', 'Melitta', 'Krups', 'Bosch',
  'Breville', 'Rancilio', 'Lavazza', 'Illy',
];

const valueIcons = [Award, Shield, Users, Star];
const valueColors = ['text-blue-600', 'text-green-600', 'text-purple-600', 'text-orange-600'];
const valueBgs = ['bg-blue-50', 'bg-green-50', 'bg-purple-50', 'bg-orange-50'];

export default function AboutPage() {
  const { t } = useLang();
  const a = t.about;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
                {a.badge}
              </span>
              <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
                {a.title}
                <br />
                <span className="text-blue-400">{a.title_accent}</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-4">{a.subtitle}</p>
              <p className="text-white/40 text-base leading-relaxed">{a.subtitle2}</p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {a.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-white/5 border border-white/10 text-center hover:bg-white/[0.08] transition-colors"
                >
                  <div className="text-3xl lg:text-4xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-blue-400 text-xs font-semibold mb-1">{stat.label}</div>
                  <div className="text-white/30 text-xs">{stat.desc}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story / Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">{a.timelineTitle}</h2>
            <p className="text-gray-500 text-lg">{a.timelineSubtitle}</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-[4.5rem] sm:left-20 top-0 bottom-0 w-px bg-gray-100" />
            <div className="space-y-12">
              {a.timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-6 sm:gap-8 items-start"
                >
                  <div className="w-14 sm:w-16 shrink-0 text-right pt-1">
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded-lg inline-block">{item.year}</span>
                  </div>
                  <div className="relative flex-1 pb-8">
                    <div className="absolute -left-[21px] sm:-left-[25px] top-1.5 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow-md" />
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-4">{a.valuesTitle}</h2>
            <p className="text-gray-500 text-lg">{a.valuesSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {a.values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-white p-7 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${valueBgs[i % 4]} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${valueColors[i % 4]}`} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands — logos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-2">{a.brandsTitle}</h2>
            <p className="text-gray-500">{a.brandsSubtitle}</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {coffeeBrands.map((brand, i) => (
              <motion.div
                key={brand}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <BrandLogo brand={brand} className="h-9" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">{a.ctaTitle}</h2>
          <p className="text-gray-500 mb-8">{a.ctaSubtitle}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            {a.ctaBtn}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
