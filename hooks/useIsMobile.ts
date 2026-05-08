'use client';

import { useEffect, useState } from 'react';

/**
 * Returns true when the user is on a mobile/touch device.
 * Safe for SSR — always starts as false (desktop fallback) and
 * corrects itself after hydration on the client.
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
          window.matchMedia('(max-width: 767px)').matches,
      );
    };
    check();
  }, []);

  return isMobile;
}

/**
 * Returns the correct href and optional download attribute for a phone
 * call button:
 *   - Desktop → tel: link (opens dialler or prompts in browser)
 *   - Mobile  → vCard download (saves contact including company info)
 */
export function usePhoneProps(): { href: string; download?: boolean } {
  const isMobile = useIsMobile();
  return isMobile
    ? { href: '/vardan-contact.vcf', download: true }
    : { href: 'tel:+37455721777' };
}
