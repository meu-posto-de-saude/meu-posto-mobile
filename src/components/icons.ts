import type { AndroidSymbol } from 'expo-symbols';

/**
 * Nome no app → nome no Material Symbols (ADR-0041). São os ícones que a v0.2.1
 * usa; a mistura de `Icons.*` e `Symbols.*` dela vira só Material Symbols aqui.
 * Ícone novo entra como uma linha neste mapa.
 */
export const ICONS = {
  add: 'add',
  assignment: 'assignment',
  autorenew: 'autorenew',
  badge: 'badge',
  calendar: 'calendar_today',
  calendarMonth: 'calendar_month',
  cancel: 'cancel',
  check: 'check',
  checkCircle: 'check_circle',
  chevronLeft: 'chevron_left',
  chevronRight: 'chevron_right',
  close: 'close',
  delete: 'delete',
  edit: 'edit',
  error: 'error',
  eventBusy: 'event_busy',
  favorite: 'favorite',
  groups: 'groups',
  heartMonitor: 'ecg_heart',
  home: 'home',
  info: 'info',
  location: 'location_on',
  lock: 'lock',
  mail: 'mail',
  medication: 'medication',
  menu: 'menu',
  notifications: 'notifications',
  offer: 'local_offer',
  person: 'person',
  power: 'power_settings_new',
  qrCode: 'qr_code_2',
  refresh: 'refresh',
  schedule: 'schedule',
  science: 'science',
  search: 'search',
  videocam: 'videocam',
  visibility: 'visibility',
  visibilityOff: 'visibility_off',
  warning: 'warning',
} as const satisfies Record<string, AndroidSymbol>;

export type IconName = keyof typeof ICONS;
export const iconNames = Object.keys(ICONS) as IconName[];
