'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Info } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { usePhoneProps } from '@/hooks/useIsMobile';

export default function PricingPage() {
  const { t } = useLang();
  const p = t.pricing;
  const phoneProps = usePhoneProps();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
              {p.badge}
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              {p.title}
              <span className="text-blue-400"> {p.title_accent}</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">{p.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Included strip */}
      <section className="py-14 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {p.included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-white/80 shrink-0" />
                <span className="text-white/90 text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing tables */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 p-4 rounded-2xl bg-blue-50 border border-blue-100 mb-12"
          >
            <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm">{p.note}</p>
          </motion.div>

          <div className="space-y-10">
            {p.categories.map((category, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{category.category}</h2>
                <div className="rounded-2xl border border-gray-100 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-100">
                      <tr>
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">{p.tableService}</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">{p.tablePrice}</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500 hidden sm:table-cell">{p.tableNote}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {category.items.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 text-gray-800 text-sm">{item.service}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`font-bold text-sm ${item.price === p.freeLabel || item.price.startsWith('Free') || item.price.startsWith('Бесплатно') || item.price.startsWith('Անվ') ? 'text-green-600' : 'text-gray-900'}`}>
                              {item.price}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right text-gray-400 text-xs hidden sm:table-cell">
                            {item.note || '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">{p.disclaimer}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">{p.ctaTitle}</h2>
          <p className="text-gray-500 mb-8">{p.ctaSubtitle}</p>
          <a
            {...phoneProps}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            +374 55 721 777
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
