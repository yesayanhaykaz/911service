'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Clock, Award, Shield, Home, Star, Users } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const icons = [Clock, Award, Shield, Home, Star, Users];
const colors = [
  { icon: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100', stat: 'text-blue-600' },
  { icon: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100', stat: 'text-orange-600' },
  { icon: 'text-green-600', bg: 'bg-green-50', border: 'border-green-100', stat: 'text-green-600' },
  { icon: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', stat: 'text-amber-600' },
  { icon: 'text-yellow-600', bg: 'bg-yellow-50', border: 'border-yellow-100', stat: 'text-yellow-600' },
  { icon: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100', stat: 'text-teal-600' },
];

export default function WhyUs() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image — very subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://i.pinimg.com/736x/cd/60/b5/cd60b51452be793ea21cb1ecb5e0ae82.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.04]"
        />
        <div className="absolute inset-0 bg-white/95" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Pickup highlight banner
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative rounded-2xl overflow-hidden bg-[#0f172a] p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="absolute inset-0 opacity-10">
              <Image
                src="https://i.pinimg.com/1200x/ef/c9/f2/efc9f2b8633c85646569f466f84a86b3.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center shrink-0">
              <Home className="w-7 h-7 text-white" />
            </div>
            <div className="relative flex-1">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">{t.whyUs.items[3]?.title}</p>
              <p className="text-white font-bold text-lg leading-snug">{t.whyUs.items[3]?.desc}</p>
            </div>
            <div className="relative flex-shrink-0 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-sm font-semibold">
                {t.whyUs.items[3]?.stat} {t.whyUs.items[3]?.statLabel}
              </span>
            </div>
          </div>
        </motion.div>
*/}
        
        {/* Advantage cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.whyUs.items.map((reason, i) => {
            const Icon = icons[i];
            const c = colors[i];
            // Skip the pickup card since it's shown as the banner above
            if (i === 3) return null;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
                className={`group relative p-7 rounded-2xl border ${c.border} hover:shadow-xl transition-all duration-300 bg-white overflow-hidden`}
              >
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 ${c.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className={`w-6 h-6 ${c.icon}`} />
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-black ${c.stat}`}>{reason.stat}</div>
                      <div className="text-gray-400 text-xs font-medium">{reason.statLabel}</div>
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
