import { hy } from './hy';
import { en } from './en';
import { ru } from './ru';

export { hy, en, ru };
export type Locale = typeof hy;
export type Lang = 'hy' | 'en' | 'ru';
export type ServiceKey = Exclude<keyof Locale['servicePages'], 'shared'>;
export const locales = { hy, en, ru } as const;
