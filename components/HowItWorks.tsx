'use client';

import { motion } from 'framer-motion';
import { Phone, Search, Wrench, CheckCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const stepIcons = [Phone, Search, Wrench, CheckCircle];
const stepBgs = ['bg-blue-600', 'bg-purple-600', 'bg-orange-600', 'bg-green-600'];

export default function HowItWorks() {
  const { t } = useLang();

  return (
    <section className="py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
            {t.howItWorks.badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-5 tracking-tight">
            {t.howItWorks.title}{' '}
            <span className="text-blue-400">{t.howItWorks.title_accent}</span>
            {t.howItWorks.title_end ? ` ${t.howItWorks.title_end}` : ''}
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto">{t.howItWorks.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.6 }}
                className="relative text-center group"
              >
                <div className="relative inline-flex flex-col items-center mb-6">
                  <div className={`w-14 h-14 ${stepBgs[i]} rounded-2xl flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-white/10 font-black text-6xl absolute -top-4 -right-6 pointer-events-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center"
        >
          <a
            href="/vardan-contact.vcf"
            download
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            {t.howItWorks.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
