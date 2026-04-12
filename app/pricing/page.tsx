'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Info } from 'lucide-react';

const pricingItems = [
  {
    category: 'Սուրճի Մեքենա',
    items: [
      { service: 'Ախտորոշում (ЕРевanum)', price: 'Անվճար*', note: 'Վերանորոգման դեպքում' },
      { service: 'Ախտորոշում (LoB)', price: '3,000–5,000 ֏', note: '' },
      { service: 'Ջրի ճամփի (flow) մաքրում', price: '8,000–15,000 ֏', note: '' },
      { service: 'Պոմպի փոխարինում', price: '12,000–25,000 ֏', note: 'Կախված ապրանքանիշից' },
      { service: 'Ջեռաջրատուի (boiler) վերանորոգում', price: '15,000–35,000 ֏', note: '' },
      { service: 'Կաթնային համակարգի վերանորոգում', price: '8,000–18,000 ֏', note: '' },
      { service: 'Կառ. սխ. (plata) վերանորոգում', price: '20,000–45,000 ֏', note: 'Բարդ դեպք' },
      { service: 'Ամբողջ. հետախուզ. մաքրում', price: '10,000–20,000 ֏', note: '' },
    ],
  },
  {
    category: 'Սառնարան',
    items: [
      { service: 'Ախտորոշում', price: 'Անվճար*', note: '' },
      { service: 'Ֆրեոնի լիցքավ. / ստուգ.', price: '15,000–30,000 ֏', note: '' },
      { service: 'Կոմպրեսոր', price: '30,000–70,000 ֏', note: 'Կախված ծավ.' },
      { service: 'Ջեռ. el. (defrost)', price: '8,000–18,000 ֏', note: '' },
    ],
  },
  {
    category: 'Կենցաղային Տեխնիկա',
    items: [
      { service: 'Ախտորոշում', price: 'Անվճար*', note: 'Վեր. դեպ.' },
      { service: 'Միկրոալիք. վերան.', price: '5,000–20,000 ֏', note: '' },
      { service: 'Փոշեկ. վերան.', price: '5,000–15,000 ֏', note: '' },
      { service: 'Արդուկ / Ֆեն', price: '3,000–10,000 ֏', note: '' },
    ],
  },
];

const included = [
  'Ախտորոշումն անվճար (վերանորոգ. դեպ.)',
  'Բոլոր ծախ. ախտ. հետո',
  '12 ամ. երաշխիք',
  'Բռնկ. բ.ն. — բ. ժ-ր',
  'Բ. orignal. պահ. մ.',
  'Տնային ծ.',
];

export default function PricingPage() {
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
              Թափանցիկ Գնագոյացում
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              Գներ և
              <span className="text-blue-400"> Սակագներ</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Անակնկալներ չկան — բոլոր ծախսերի մասին կիմանաք ախտորոշումից հետո, նախքան վերանորոգումը
            </p>
          </motion.div>
        </div>
      </section>

      {/* Included */}
      <section className="py-14 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {included.map((item, i) => (
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
            <p className="text-blue-800 text-sm">
              <strong>Ախտորոշումն անվճար է</strong> — եթե պատվիրում եք վերանորոգում։ Հակ. դեպ.` ախտ. արժ. 3,000–5,000 ֏ (կախ. սարq.)
            </p>
          </motion.div>

          <div className="space-y-10">
            {pricingItems.map((category, ci) => (
              <motion.div
                key={category.category}
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
                        <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500">Ծառայություն</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500">Գին</th>
                        <th className="text-right px-6 py-4 text-sm font-semibold text-gray-500 hidden sm:table-cell">Ծան.</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {category.items.map((item, i) => (
                        <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                          <td className="px-6 py-4 text-gray-800 text-sm">{item.service}</td>
                          <td className="px-6 py-4 text-right">
                            <span className={`font-bold text-sm ${item.price.includes('Անվճ') ? 'text-green-600' : 'text-gray-900'}`}>
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

          {/* Disclaimer */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              * Վերջնական գինը կախված է ախտորոշման արդ. — ճշգ. կազ. մ. մ.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Անվճար Ախտորոշում</h2>
          <p className="text-gray-500 mb-8">Զանգահարեք հիմա, ստացեք ճ. գ. ախտ. հ.</p>
          <a
            href="tel:+37494911911"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            +374 94 911 911
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
