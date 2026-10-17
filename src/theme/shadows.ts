import type { ViewStyle } from 'react-native';

export const shadows = {
  /** Sombra padrão: `0 1 4` preto a 14%. */
  card: { boxShadow: '0 1px 4px rgba(0, 0, 0, 0.14)' },
} as const satisfies Record<string, ViewStyle>;
