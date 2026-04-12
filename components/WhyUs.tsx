'use client';

import { motion } from 'framer-motion';
import { Clock, Award, Shield, Home, Star, Users } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const icons = [Clock, Award, Shield, Home, Star, Users];
const colors = [
  { icon: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: 'text-orange-600', bg: 'bg-orange-50' },
  { icon: 'text-green-600', bg: 'bg-green-50' },
  { icon: 'text-purple-600', bg: 'bg-purple-50' },
  { icon: 'text-yellow-600', bg: 'bg-yellow-50' },
  { icon: 'text-teal-600', bg: 'bg-teal-50' },
];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-blue-600 text-sm font-semibold tracking-wider uppercase mb-4">
            {t.whyUs.badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-5 tracking-tight">
            {t.whyUs.title}{' '}
            <span className="text-blue-600">{t.whyUs.title_accent}</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">{t.whyUs.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whyUs.items.map((reason, i) => {
            const Icon = icons[i];
            const c = colors[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative p-7 rounded-3xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 bg-white overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-50/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className={`w-6 h-6 ${c.icon}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-black ${c.icon}`}>{reason.stat}</div>
                      <div className="text-gray-400 text-xs">{reason.statLabel}</div>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{reason.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
