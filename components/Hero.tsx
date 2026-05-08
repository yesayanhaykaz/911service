'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MessageCircle, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { usePhoneProps } from '@/hooks/useIsMobile';
import { Phone } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { t } = useLang();
  const phoneProps = usePhoneProps();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero background image */}
      <Image
        src="https://i.pinimg.com/1200x/5e/cc/3b/5ecc3b17b600153a33acb142c66bbc55.jpg"
        alt="Coffee machine"
        fill
        className="object-cover"
        priority
        quality={80}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      {/* Grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      {/* Blue glow */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Copy */}
          <div>
            <motion.div
              custom={0} initial="hidden" animate="show" variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/70 text-sm font-medium">{t.hero.badge}</span>
            </motion.div>

            <motion.h1
              custom={1} initial="hidden" animate="show" variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
            >
              {t.hero.title_line1}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                {t.hero.title_line2}
              </span>
            </motion.h1>

            <motion.p
              custom={2} initial="hidden" animate="show" variants={fadeUp}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              custom={3} initial="hidden" animate="show" variants={fadeUp}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                {...phoneProps}
                className="group flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                {t.hero.cta_call}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`https://wa.me/37455721777?text=${encodeURIComponent(t.services_list.coffeeMachine.waMsg)}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 bg-white/[0.08] hover:bg-white/[0.14] text-white border border-white/15 px-7 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                {t.hero.cta_wa}
              </a>
            </motion.div>

            <motion.div
              custom={4} initial="hidden" animate="show" variants={fadeUp}
              className="flex flex-wrap gap-5"
            >
              {[t.hero.trust_repairs, t.hero.trust_warranty, t.hero.trust_home].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  {badge}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 p-8 backdrop-blur-sm">
              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { value: t.hero.stat_repairs, label: t.hero.stat_repairs_label },
                  { value: t.hero.stat_warranty, label: t.hero.stat_warranty_label },
                  { value: t.hero.stat_pickup, label: t.hero.stat_pickup_label },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-2xl bg-white/5 border border-white/[0.08]">
                    <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-white/40 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Google rating */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/50 text-xs">{t.reviews.rating_label}</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-white">4.9</div>
                  <div className="text-white/40 text-xs">250+</div>
                </div>
              </div>
            </div>

            {/* Floating pills */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">{t.hero.trust_repairs}</p>
                <p className="text-xs text-gray-400">DeLonghi Magnifica S</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-2xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-900">{t.hero.trust_home}</p>
                <p className="text-xs text-gray-400">{t.hero.trust_warranty}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
