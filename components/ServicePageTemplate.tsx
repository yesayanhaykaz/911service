'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Phone, MessageCircle, CheckCircle, ArrowRight, Star } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import type { ServiceKey } from '@/locales';

interface ServicePageProps {
  serviceKey: ServiceKey;
  heroImage: string;
  icon: React.ReactNode;
  accentColor?: string;
  accentBg?: string;
}

const wa = (msg: string) => `https://wa.me/37494911911?text=${encodeURIComponent(msg)}`;

export default function ServicePageTemplate({
  serviceKey,
  heroImage,
  icon,
  accentColor = 'text-blue-600',
  accentBg = 'bg-blue-600',
}: ServicePageProps) {
  const { t } = useLang();
  const s = t.servicePages.shared;
  const svc = t.servicePages[serviceKey];
  const entry = t.services_list[serviceKey];

  return (
    <div className="pt-20">
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={heroImage}
          alt={entry.name}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 ${accentBg} rounded-xl flex items-center justify-center`}>
                {icon}
              </div>
              <span className="text-white/60 text-sm font-medium uppercase tracking-wider">
                {svc.heroTagline}
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
              {entry.name}
            </h1>
            <p className="text-white/70 text-lg mb-8 max-w-xl leading-relaxed">{svc.description}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+37494911911"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3.5 rounded-2xl font-semibold transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                +374 94 911 911
              </a>
              <a
                href={wa(entry.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-2xl font-semibold transition-all backdrop-blur-sm hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common problems */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">{s.problemsTitle}</h2>
            <p className="text-gray-500 text-lg">{s.problemsSubtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {svc.problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 ${accentBg} rounded-xl flex items-center justify-center mb-4`}>
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we repair */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-gray-900 mb-6">{s.repairTitle}</h2>
              <div className="space-y-3">
                {svc.repairTypes.map((type, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
                    <CheckCircle className={`w-5 h-5 ${accentColor} shrink-0`} />
                    <span className="text-gray-700 text-sm font-medium">{type}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {svc.brands.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-black text-gray-900 mb-6">{s.brandsTitle}</h2>
                <div className="flex flex-wrap gap-3">
                  {svc.brands.map((brand) => (
                    <span
                      key={brand}
                      className="px-4 py-2.5 rounded-xl bg-white border border-gray-100 text-gray-700 text-sm font-semibold hover:border-blue-200 hover:text-blue-700 transition-colors"
                    >
                      {brand}
                    </span>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-2xl bg-blue-600 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-yellow-300" />
                    <span className="font-bold text-lg">{s.warrantyTitle}</span>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed">{s.warrantyText}</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#080808] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black text-white mb-4">{entry.name}</h2>
            <p className="text-white/50 text-lg mb-8">{s.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+37494911911"
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {s.callBtn}
              </a>
              <a
                href={wa(entry.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/[0.08] hover:bg-white/[0.12] text-white border border-white/15 px-8 py-4 rounded-2xl font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
