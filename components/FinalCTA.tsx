'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle, ArrowRight, PackageCheck } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { usePhoneProps } from '@/hooks/useIsMobile';

export default function FinalCTA() {
  const { t } = useLang();
  const phoneProps = usePhoneProps();

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-[#080808] px-8 py-16 lg:py-20"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/20 border border-blue-500/30 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">{t.finalCta.badge}</span>
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              {t.finalCta.title}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {t.finalCta.title_accent}
              </span>
            </h2>

            <p className="text-white/60 text-lg mb-4 max-w-lg mx-auto leading-relaxed">
              {t.finalCta.subtitle}
            </p>

            {/* Pickup reminder */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-400/25 mb-10">
              <PackageCheck className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 text-sm font-medium">{t.hero.trust_home}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Primary: dark with blue glow */}
              <a
                {...phoneProps}
                className="group flex items-center justify-center gap-2.5 bg-[#0f172a] border border-white/10 hover:border-blue-500/40 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl hover:shadow-blue-900/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                {t.finalCta.cta_call}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-blue-400" />
              </a>
              {/* WhatsApp: green border */}
              <a
                href={`https://wa.me/37455721777?text=${encodeURIComponent(t.services_list.coffeeMachine.waMsg)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 border-2 border-white/15 hover:border-green-400/50 bg-white/[0.05] hover:bg-green-500/10 text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                {t.finalCta.cta_wa}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
