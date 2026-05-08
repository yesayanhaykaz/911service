'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PowerOff, Thermometer, Volume2, Droplets, Zap, HelpCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const icons = [PowerOff, Thermometer, Volume2, Droplets, Zap, HelpCircle];
const colors = [
  { icon: 'text-red-500', bg: 'bg-red-50', border: 'border-red-100' },
  { icon: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100' },
  { icon: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-100' },
  { icon: 'text-gray-400', bg: 'bg-gray-100', border: 'border-gray-200' },
];

export default function Problems() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background: subtle coffee shop / repair image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://i.pinimg.com/1200x/5e/cc/3b/5ecc3b17b600153a33acb142c66bbc55.jpg"
          alt=""
          fill
          className="object-cover opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-gray-50/94" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.problems.items.map((problem, i) => {
            const Icon = icons[i];
            const c = colors[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
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
      </div>
    </section>
  );
}
