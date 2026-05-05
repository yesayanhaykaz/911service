// Brand logo components — supports light and dark backgrounds

interface LogoProps {
  className?: string;
  dark?: boolean; // true = on dark background (white text/elements)
}

// ─── Coffee Machine Brands ───────────────────────────────────────────────────

export function DeLonghiLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 120 32" className={className} fill="none">
      <rect width="120" height="32" rx="4" fill="#C8001E" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="0.5">De&#39;Longhi</text>
    </svg>
  );
}

export function JuraLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 80 32" className={className} fill="none">
      <rect width="80" height="32" rx="4" fill={dark ? '#333' : '#1a1a1a'} />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="16" fill="white" letterSpacing="2">JURA</text>
    </svg>
  );
}

export function NespressoLogo({ className = 'h-6', dark }: LogoProps) {
  // On dark bg: white text with subtle bg. On light bg: dark text, transparent bg.
  return (
    <svg viewBox="0 0 140 32" className={className} fill="none">
      {dark && <rect width="140" height="32" rx="4" fill="rgba(255,255,255,0.12)" />}
      <text
        x={dark ? '8' : '0'}
        y="24"
        fontFamily="Georgia,serif"
        fontWeight="700"
        fontSize="18"
        fill={dark ? 'white' : '#1a1a1a'}
        letterSpacing="1"
      >Nespresso</text>
    </svg>
  );
}

export function SaecoLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 90 32" className={className} fill="none">
      <rect width="90" height="32" rx="4" fill="#003087" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="15" fill="white" letterSpacing="1.5">SAECO</text>
    </svg>
  );
}

export function PhilipsLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 105 32" className={className} fill="none">
      <rect width="105" height="32" rx="4" fill="#0B4EA8" />
      <circle cx="12" cy="11" r="3" fill="white" />
      <circle cx="20" cy="11" r="3" fill="white" />
      <circle cx="28" cy="11" r="3" fill="white" />
      <text x="36" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="white">PHILIPS</text>
    </svg>
  );
}

export function SiemensLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 110 32" className={className} fill="none">
      <rect width="110" height="32" rx="4" fill="#009999" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="0.5">SIEMENS</text>
    </svg>
  );
}

export function BoschLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 90 32" className={className} fill="none">
      <rect width="90" height="32" rx="4" fill="#CC0000" />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="15" fill="white" letterSpacing="1">BOSCH</text>
    </svg>
  );
}

export function KrupsLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 90 32" className={className} fill="none">
      <rect width="90" height="32" rx="4" fill="#222222" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">KRUPS</text>
    </svg>
  );
}

export function MelittaLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 100 32" className={className} fill="none">
      <rect width="100" height="32" rx="4" fill="#B3001B" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">Melitta</text>
    </svg>
  );
}

// ─── Home Appliance Brands ────────────────────────────────────────────────────

export function SamsungLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 120 32" className={className} fill="none">
      <rect width="120" height="32" rx="4" fill="#1428A0" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="0.5">SAMSUNG</text>
    </svg>
  );
}

export function LGLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 70 32" className={className} fill="none">
      <rect width="70" height="32" rx="4" fill="#E60012" />
      <text x="12" y="23" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="18" fill="white" letterSpacing="1">LG</text>
    </svg>
  );
}

export function DysonLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 90 32" className={className} fill="none">
      <rect width="90" height="32" rx="4" fill="#7C3AED" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">DYSON</text>
    </svg>
  );
}

export function MieleLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 85 32" className={className} fill="none">
      <rect width="85" height="32" rx="4" fill="#CC0000" />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">MIELE</text>
    </svg>
  );
}

export function ElectroluxLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 120 32" className={className} fill="none">
      <rect width="120" height="32" rx="4" fill="#0062A0" />
      <text x="6" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="white" letterSpacing="0.5">ELECTROLUX</text>
    </svg>
  );
}

export function WhirlpoolLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 110 32" className={className} fill="none">
      <rect width="110" height="32" rx="4" fill="#0052A0" />
      <text x="6" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="white" letterSpacing="0.5">WHIRLPOOL</text>
    </svg>
  );
}

export function BekoLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 75 32" className={className} fill="none">
      <rect width="75" height="32" rx="4" fill="#E63312" />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="15" fill="white" letterSpacing="1">BEKO</text>
    </svg>
  );
}

export function HaierLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 85 32" className={className} fill="none">
      <rect width="85" height="32" rx="4" fill="#005BAA" />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">HAIER</text>
    </svg>
  );
}

export function TeslaLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 85 32" className={className} fill="none">
      <rect width="85" height="32" rx="4" fill="#CC0000" />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">TESLA</text>
    </svg>
  );
}

export function WallboxLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 105 32" className={className} fill="none">
      <rect width="105" height="32" rx="4" fill="#00C896" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="0.5">WALLBOX</text>
    </svg>
  );
}

export function TefalLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 80 32" className={className} fill="none">
      <rect width="80" height="32" rx="4" fill="#E55A22" />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">TEFAL</text>
    </svg>
  );
}

export function RowentaLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 105 32" className={className} fill="none">
      <rect width="105" height="32" rx="4" fill="#C00000" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="0.5">ROWENTA</text>
    </svg>
  );
}

export function PanasonicLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 120 32" className={className} fill="none">
      <rect width="120" height="32" rx="4" fill="#0A4FA0" />
      <text x="6" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="13" fill="white" letterSpacing="0.5">PANASONIC</text>
    </svg>
  );
}

export function BraunLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 85 32" className={className} fill="none">
      <rect width="85" height="32" rx="4" fill="#222222" />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">BRAUN</text>
    </svg>
  );
}

export function XiaomiLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 90 32" className={className} fill="none">
      <rect width="90" height="32" rx="4" fill="#FF6900" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="0.5">Xiaomi</text>
    </svg>
  );
}

export function NuovaSimonelliLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 160 32" className={className} fill="none">
      <rect width="160" height="32" rx="4" fill={dark ? 'rgba(255,255,255,0.12)' : '#1a1a1a'} />
      <text x="8" y="21" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="11" fill="white" letterSpacing="0.5">NUOVA SIMONELLI</text>
    </svg>
  );
}

export function LaMarzoccoLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 140 32" className={className} fill="none">
      <rect width="140" height="32" rx="4" fill="#8B0000" />
      <text x="8" y="21" fontFamily="Georgia,serif" fontWeight="700" fontSize="12" fill="white" letterSpacing="0.5">La Marzocco</text>
    </svg>
  );
}

export function GaggiaLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 95 32" className={className} fill="none">
      <rect width="95" height="32" rx="4" fill="#C0392B" />
      <text x="10" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">GAGGIA</text>
    </svg>
  );
}

export function ECMLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 70 32" className={className} fill="none">
      <rect width="70" height="32" rx="4" fill="#2C3E50" />
      <text x="12" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="2">ECM</text>
    </svg>
  );
}

export function LelitLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 80 32" className={className} fill="none">
      <rect width="80" height="32" rx="4" fill="#1A3A6B" />
      <text x="12" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1.5">LELIT</text>
    </svg>
  );
}

export function RocketEspressoLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 160 32" className={className} fill="none">
      <rect width="160" height="32" rx="4" fill={dark ? 'rgba(255,255,255,0.12)' : '#111'} />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12" fill="white" letterSpacing="1">ROCKET ESPRESSO</text>
    </svg>
  );
}

export function VictoriaArdiunoLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 165 32" className={className} fill="none">
      <rect width="165" height="32" rx="4" fill="#1a1a1a" />
      <text x="8" y="21" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="11" fill="#D4AF37" letterSpacing="0.5">VICTORIA ARDUINO</text>
    </svg>
  );
}

export function BezzeraLogo({ className = 'h-6', dark }: LogoProps) {
  return (
    <svg viewBox="0 0 110 32" className={className} fill="none">
      <rect width="110" height="32" rx="4" fill="#003366" />
      <text x="8" y="22" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="white" letterSpacing="1">BEZZERA</text>
    </svg>
  );
}

// ─── Type badges (for coffee machine page) ───────────────────────────────────

export function EspressoBadge({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 32" className={className} fill="none">
      <rect width="90" height="32" rx="16" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1" />
      <text x="12" y="21" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="12" fill="#2563EB">Espresso</text>
    </svg>
  );
}

export function AutomaticBadge({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 105 32" className={className} fill="none">
      <rect width="105" height="32" rx="16" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1" />
      <text x="12" y="21" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="12" fill="#2563EB">Automatic</text>
    </svg>
  );
}

export function CapsuleBadge({ className = 'h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 85 32" className={className} fill="none">
      <rect width="85" height="32" rx="16" fill="rgba(37,99,235,0.1)" stroke="rgba(37,99,235,0.3)" strokeWidth="1" />
      <text x="12" y="21" fontFamily="Arial,sans-serif" fontWeight="600" fontSize="12" fill="#2563EB">Capsule</text>
    </svg>
  );
}

// ─── Generic BrandLogo ────────────────────────────────────────────────────────
// Maps brand name → component. Falls back to a styled badge.

const BRAND_COLORS: Record<string, string> = {
  DeLonghi: '#C8001E',
  Jura: '#1a1a1a',
  Nespresso: '#5C0A2E',
  Saeco: '#003087',
  Philips: '#0B4EA8',
  Siemens: '#009999',
  Bosch: '#CC0000',
  Krups: '#222222',
  Melitta: '#B3001B',
  Breville: '#C8A000',
  Rancilio: '#2C2C2C',
  Lavazza: '#002F6C',
  Illy: '#D40000',
  'Dolce Gusto': '#222222',
  Samsung: '#1428A0',
  LG: '#E60012',
  Indesit: '#D40000',
  Whirlpool: '#0052A0',
  Beko: '#E63312',
  Hotpoint: '#E60028',
  Haier: '#005BAA',
  Electrolux: '#0062A0',
  Dyson: '#7C3AED',
  Miele: '#CC0000',
  iRobot: '#D40000',
  Xiaomi: '#FF6900',
  Hoover: '#DD0000',
  Tefal: '#E55A22',
  Rowenta: '#C00000',
  Braun: '#222222',
  'Morphy Richards': '#0050A0',
  Calor: '#0050A0',
  'Russell Hobbs': '#222222',
  BaByliss: '#1a1a1a',
  Remington: '#003DA5',
  Wella: '#B8860B',
  Panasonic: '#0A4FA0',
  Sharp: '#005BAA',
  Midea: '#CC0000',
  Candy: '#DD0000',
  Wallbox: '#00C896',
  Easee: '#00C864',
  Tesla: '#CC0000',
  ABB: '#FF0000',
  Schneider: '#3DCD58',
  Legrand: '#6E3FA3',
  Mennekes: '#0050C8',
  Keba: '#E60028',
  'Nuova Simonelli': '#1a1a1a',
  'La Marzocco': '#8B0000',
  Gaggia: '#C0392B',
  ECM: '#2C3E50',
  Lelit: '#1A3A6B',
  'Rocket Espresso': '#111111',
  'Victoria Arduino': '#1a1a1a',
  Bezzera: '#003366',
};

interface BrandLogoProps {
  brand: string;
  className?: string;
  dark?: boolean;
}

export function BrandLogo({ brand, className = 'h-7', dark = false }: BrandLogoProps) {
  // Use specific components for well-known brands
  const map: Record<string, React.FC<LogoProps>> = {
    DeLonghi: DeLonghiLogo,
    Jura: JuraLogo,
    Nespresso: NespressoLogo,
    Saeco: SaecoLogo,
    Philips: PhilipsLogo,
    Siemens: SiemensLogo,
    Bosch: BoschLogo,
    Krups: KrupsLogo,
    Melitta: MelittaLogo,
    Samsung: SamsungLogo,
    LG: LGLogo,
    Dyson: DysonLogo,
    Miele: MieleLogo,
    Electrolux: ElectroluxLogo,
    Whirlpool: WhirlpoolLogo,
    Beko: BekoLogo,
    Haier: HaierLogo,
    Tesla: TeslaLogo,
    Wallbox: WallboxLogo,
    Rowenta: RowentaLogo,
    Panasonic: PanasonicLogo,
    Braun: BraunLogo,
    Xiaomi: XiaomiLogo,
    'Nuova Simonelli': NuovaSimonelliLogo,
    'La Marzocco': LaMarzoccoLogo,
    Gaggia: GaggiaLogo,
    ECM: ECMLogo,
    Lelit: LelitLogo,
    'Rocket Espresso': RocketEspressoLogo,
    'Victoria Arduino': VictoriaArdiunoLogo,
    Bezzera: BezzeraLogo,
  };

  const Component = map[brand];
  if (Component) {
    return <Component className={className} dark={dark} />;
  }

  // Fallback: colored pill with brand name
  const bg = BRAND_COLORS[brand] || '#6b7280';
  const textLength = brand.length;
  const width = Math.max(60, textLength * 9 + 20);

  return (
    <svg viewBox={`0 0 ${width} 32`} className={className} fill="none">
      <rect width={width} height="32" rx="4" fill={bg} />
      <text
        x="10"
        y="22"
        fontFamily="Arial,sans-serif"
        fontWeight="700"
        fontSize="13"
        fill="white"
        letterSpacing="0.5"
      >
        {brand}
      </text>
    </svg>
  );
}
