/**
 * Central service metadata — single source of truth for icons, colors,
 * accent classes, and hero images used on both the home page Services
 * section and the /services listing page and individual detail pages.
 */
import { Coffee, Wind, Zap, Car, Lightbulb, Bot, type LucideIcon } from 'lucide-react';

export type ServiceKey =
  | 'coffeeMachine'
  | 'robotVacuum'
  | 'vacuum'
  | 'microwave'
  | 'hairDryer'
  | 'iron'
  | 'ironAir'
  | 'carCharger'
  | 'homeElectrical';

export interface ServiceMetaItem {
  icon: LucideIcon;
  /** Tailwind text colour for the icon on a light bg */
  iconColor: string;
  /** Tailwind bg colour for the icon container on a light bg */
  iconBg: string;
  /** Tailwind bg colour for accent (dark bg, coloured button) */
  accentBg: string;
  /** Tailwind text colour for accent text / links */
  accentText: string;
  /** Hero / card image URL */
  image: string;
}

export const SERVICE_META: Record<ServiceKey, ServiceMetaItem> = {
  coffeeMachine: {
    icon: Coffee,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-50',
    accentBg: 'bg-blue-600',
    accentText: 'text-blue-600',
    image: 'https://i.pinimg.com/1200x/98/73/c4/9873c4ddbd7aabb7d554e4a77443b48f.jpg',
  },
  robotVacuum: {
    icon: Bot,
    iconColor: 'text-cyan-500',
    iconBg: 'bg-cyan-50',
    accentBg: 'bg-cyan-600',
    accentText: 'text-cyan-600',
    image: 'https://i.pinimg.com/1200x/ef/c9/f2/efc9f2b8633c85646569f466f84a86b3.jpg',
  },
  vacuum: {
    icon: Wind,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-50',
    accentBg: 'bg-purple-600',
    accentText: 'text-purple-600',
    image: 'https://i.pinimg.com/736x/cd/60/b5/cd60b51452be793ea21cb1ecb5e0ae82.jpg',
  },
  microwave: {
    icon: Zap,
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-50',
    accentBg: 'bg-orange-500',
    accentText: 'text-orange-600',
    image: 'https://i.pinimg.com/736x/15/1e/87/151e87e87a2130eeaf833d04b5aab215.jpg',
  },
  hairDryer: {
    icon: Wind,
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-50',
    accentBg: 'bg-pink-500',
    accentText: 'text-pink-600',
    image: 'https://i.pinimg.com/736x/d0/55/85/d055851dd1d9e54374fe277059d57852.jpg',
  },
  iron: {
    icon: Zap,
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-50',
    accentBg: 'bg-indigo-500',
    accentText: 'text-indigo-600',
    image: 'https://i.pinimg.com/1200x/0b/1d/b5/0b1db5099caf83356bb4be3b7bbd4a3d.jpg',
  },
  ironAir: {
    icon: Zap,
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-50',
    accentBg: 'bg-teal-500',
    accentText: 'text-teal-600',
    image: 'https://i.pinimg.com/736x/3c/63/e2/3c63e253d80e11ab73e1003f76f493be.jpg',
  },
  carCharger: {
    icon: Car,
    iconColor: 'text-green-500',
    iconBg: 'bg-green-50',
    accentBg: 'bg-green-500',
    accentText: 'text-green-600',
    image: 'https://i.pinimg.com/1200x/10/87/bc/1087bcdfbf193bb0fb3ef9955123ecae.jpg',
  },
  homeElectrical: {
    icon: Lightbulb,
    iconColor: 'text-yellow-500',
    iconBg: 'bg-yellow-50',
    accentBg: 'bg-yellow-500',
    accentText: 'text-yellow-600',
    image: 'https://i.pinimg.com/736x/ec/5d/6a/ec5d6af5a7a1db1e7bca7d4912a39acd.jpg',
  },
};

/** Ordered list of all service keys for rendering grids */
export const SERVICE_KEYS: ServiceKey[] = [
  'coffeeMachine',
  'robotVacuum',
  'vacuum',
  'microwave',
  'hairDryer',
  'iron',
  'ironAir',
  'carCharger',
  'homeElectrical',
];

/** Household services (everything except coffeeMachine) */
export const HOUSEHOLD_KEYS: ServiceKey[] = SERVICE_KEYS.filter((k) => k !== 'coffeeMachine');
