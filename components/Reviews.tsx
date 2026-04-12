'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';

const reviews = [
  { name: 'Aram H.', device: 'DeLonghi Magnifica S', text: 'Great service. The technician arrived in 1.5 hours, diagnosed the problem and fixed it the same day. Fair price, no surprises.', date: '2 weeks ago', avatar: 'A', color: 'bg-blue-600' },
  { name: 'Mariam V.', device: 'Saeco Xelsis', text: 'Very satisfied. My coffee machine was leaking water — it\'s been 3 months and everything is perfect. Trusted service.', date: '1 month ago', avatar: 'M', color: 'bg-purple-600' },
  { name: 'David K.', device: 'Philips EP2220', text: 'Fast, professional, honest. They diagnosed, gave an exact price, and repaired within a few hours. Will use again.', date: '3 weeks ago', avatar: 'D', color: 'bg-green-600' },
  { name: 'Ani S.', device: 'Jura E6', text: 'A Jura specialist is hard to find — 911 Servis really knows what they\'re doing. Excellent result, warm approach.', date: '6 months ago', avatar: 'A', color: 'bg-orange-600' },
  { name: 'Vardan A.', device: 'Nespresso Vertuo', text: 'Fixed within a few hours. No one arrives faster — 911 Servis is the quickest in Yerevan.', date: '2 months ago', avatar: 'V', color: 'bg-teal-600' },
  { name: 'Nare M.', device: 'Siemens EQ.6', text: 'Excellent experience across the board. Got a warranty, 4 months later everything is still working perfectly.', date: '4 months ago', avatar: 'N', color: 'bg-pink-600' },
];

export default function Reviews() {
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
            {t.reviews.badge}
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            {t.reviews.title}{' '}
            <span className="text-blue-600">{t.reviews.title_accent}</span>
            {t.reviews.title_end ? ` ${t.reviews.title_end}` : ''}
          </h2>

          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="w-px h-5 bg-gray-200" />
            <span className="text-gray-900 font-bold">4.9</span>
            <span className="text-gray-400 text-sm">250+ {t.reviews.rating_label}</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-6 h-6 text-blue-100 mb-4" />
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{review.text}</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${review.color} rounded-xl flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{review.avatar}</span>
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.device}</p>
                  </div>
                </div>
                <span className="text-gray-300 text-xs">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
