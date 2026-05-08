'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useLang } from '@/contexts/LanguageContext';
import { usePhoneProps } from '@/hooks/useIsMobile';

export default function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  const phoneProps = usePhoneProps();

  const [form, setForm] = useState({ name: '', phone: '', device: '', problem: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#080808] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4">
              {c.badge}
            </span>
            <h1 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tight">
              {c.title} <span className="text-blue-400">{c.title_accent}</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto leading-relaxed">{c.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-black text-gray-900 mb-8">{c.infoTitle}</h2>

              <div className="space-y-4 mb-10">
                <a
                  {...phoneProps}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-200">
                    <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">{c.phone_label}</p>
                    <p className="text-gray-900 font-bold text-xl">+374 55 721 777</p>
                    <p className="text-gray-400 text-sm mt-0.5">{c.phone_sub}</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/37455721777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-green-100 hover:shadow-lg transition-all duration-200 group cursor-pointer"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-green-500 group-hover:scale-110 transition-all duration-200">
                    <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">WhatsApp</p>
                    <p className="text-gray-900 font-bold text-xl">+374 55 721 777</p>
                    <p className="text-gray-400 text-sm mt-0.5">{c.wa_sub}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">{c.location_label}</p>
                    <p className="text-gray-900 font-bold">{c.location_val}</p>
                    <p className="text-gray-400 text-sm mt-0.5">{c.location_sub}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-2">{c.hours_label}</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between gap-12 text-sm">
                        <span className="text-gray-500">{c.hours_weekday}</span>
                        <span className="text-gray-900 font-semibold">{t.footer.hours_range1}</span>
                      </div>
                      <div className="flex justify-between gap-12 text-sm">
                        <span className="text-gray-500">{c.hours_weekend}</span>
                        <span className="text-gray-900 font-semibold">{t.footer.hours_range2}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden h-64 bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96839.33988024374!2d44.46524!3d40.18111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd4873c91949%3A0xd95e22f680b33e4!2sYerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-black text-gray-900 mb-2">{c.bookTitle}</h2>
              <p className="text-gray-500 mb-8">{c.bookSubtitle}</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-80 text-center p-8 rounded-3xl bg-green-50 border border-green-100"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{c.form.successTitle}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{c.form.successText}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {c.form.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={c.form.namePlaceholder}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-sm transition-all placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {c.form.phone} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+374 XX XXX XXX"
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-sm transition-all placeholder:text-gray-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {c.form.device} <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={form.device}
                      onChange={(e) => setForm({ ...form, device: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-sm bg-white transition-all"
                    >
                      <option value="">{c.form.devicePlaceholder}</option>
                      {c.devices.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {c.form.problem}
                    </label>
                    <textarea
                      rows={4}
                      value={form.problem}
                      onChange={(e) => setForm({ ...form, problem: e.target.value })}
                      placeholder={c.form.problemPlaceholder}
                      className="w-full px-4 py-3.5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 text-sm resize-none transition-all placeholder:text-gray-300"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-70 text-white px-6 py-4 rounded-2xl font-semibold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {c.form.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {c.form.submit}
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center leading-relaxed">{c.form.footNote}</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
