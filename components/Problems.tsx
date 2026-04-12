'use client';

import { motion } from 'framer-motion';
import { PowerOff, Thermometer, Volume2, Droplets, Zap, HelpCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const icons = [PowerOff, Thermometer, Volume2, Droplets, Zap, HelpCircle];
const colors = [
  { icon: 'text-red-500', bg: 'bg-red-50' },
  { icon: 'text-orange-500', bg: 'bg-orange-50' },
  { icon: 'text-purple-500', bg: 'bg-purple-50' },
  { icon: 'text-blue-500', bg: 'bg-blue-50' },
  { icon: 'text-yellow-500', bg: 'bg-yellow-50' },
  { icon: 'text-gray-500', bg: 'bg-gray-50' },
];

export default function Problems() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300 group"
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
