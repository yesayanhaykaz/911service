'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePhoneProps } from '@/hooks/useIsMobile';
import { useLang } from '@/contexts/LanguageContext';

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const phoneProps = usePhoneProps();
  const { t } = useLang();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Expanded options */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-3"
              >
                {/* Phone / vCard (adaptive) */}
                <a
                  {...phoneProps}
                  className="flex items-center gap-3 bg-white shadow-2xl border border-gray-100 rounded-2xl px-4 py-3 group hover:shadow-blue-500/10 transition-shadow"
                >
                  <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 leading-none mb-0.5">{t.nav.phone}</p>
                    <p className="text-sm font-bold text-gray-900">+374 55 721 777</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/37455721777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white shadow-2xl border border-gray-100 rounded-2xl px-4 py-3 group hover:shadow-green-500/10 transition-shadow"
                >
                  <div className="w-9 h-9 bg-green-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 leading-none mb-0.5">WhatsApp</p>
                    <p className="text-sm font-bold text-gray-900">+374 55 721 777</p>
                  </div>
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300 ${
              expanded
                ? 'bg-gray-800 shadow-gray-800/30 hover:bg-gray-900'
                : 'bg-blue-600 shadow-blue-600/30 hover:bg-blue-700 hover:scale-110'
            }`}
            aria-label="Contact options"
          >
            {expanded ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Phone className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Pulse ring */}
          {!expanded && (
            <div className="absolute bottom-0 right-0 w-14 h-14 rounded-2xl bg-blue-400 -z-10 animate-ping opacity-20" />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
