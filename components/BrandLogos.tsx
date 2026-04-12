// Brand logo components as styled SVG/text representations

export function DeLonghiLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 32" className={className} fill="none">
      <rect width="120" height="32" rx="4" fill="#C8001E"/>
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="0.5">De&#39;Longhi</text>
    </svg>
  );
}

export function JuraLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 32" className={className} fill="none">
      <rect width="80" height="32" rx="4" fill="#1a1a1a"/>
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="16" fill="white" letterSpacing="2">JURA</text>
    </svg>
  );
}

export function NespressoLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 32" className={className} fill="none">
      <text x="0" y="24" fontFamily="Georgia,serif" fontWeight="700" fontSize="18" fill="#1a1a1a" letterSpacing="1">Nespresso</text>
    </svg>
  );
}

export function SaecoLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 32" className={className} fill="none">
      <rect width="90" height="32" rx="4" fill="#003087"/>
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="15" fill="white" letterSpacing="1.5">SAECO</text>
    </svg>
  );
}

export function PhilipsLogo({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 105 32" className={className} fill="none">
      <rect width="105" height="32" rx="4" fill="#0B4EA8"/>
      {/* Philips waves */}
      <circle cx="12" cy="10" r="3" fill="white"/>
      <circle cx="20" cy="10" r="3" fill="white"/>
      <circle cx="28" cy="10" r="3" fill="white"/>
      <text x="36" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="white">PHILIPS</text>
    </svg>
  );
}

export function AutomaticBadge({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 105 32" className={className} fill="none">
      <rect width="105" height="32" rx="16" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1"/>
      <text x="12" y="21" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="12" fill="#2563EB">Automatic</text>
    </svg>
  );
}

export function CapsuleBadge({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 85 32" className={className} fill="none">
      <rect width="85" height="32" rx="16" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1"/>
      <text x="12" y="21" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="12" fill="#2563EB">Capsule</text>
    </svg>
  );
}

export function EspressoBadge({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 78 32" className={className} fill="none">
      <rect width="78" height="32" rx="16" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1"/>
      <text x="12" y="21" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="12" fill="#2563EB">Espresso</text>
    </svg>
  );
}
