import { Roboto_400Regular } from '@expo-google-fonts/roboto/400Regular';
import { Roboto_500Medium } from '@expo-google-fonts/roboto/500Medium';
import { Roboto_600SemiBold } from '@expo-google-fonts/roboto/600SemiBold';
import { Roboto_700Bold } from '@expo-google-fonts/roboto/700Bold';
import { Platform } from 'react-native';

/**
 * Fontes carregadas na inicialização do app, via `useAppFonts`.
 *
 * Importadas peso a peso, e não pelo índice do pacote, para o bundle levar só
 * os quatro arquivos usados.
 */
export const robotoFonts = {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
};

/** No React Native o peso vem do arquivo da fonte, não de `fontWeight`. */
export const fontFamily = {
  regular: 'Roboto_400Regular',
  medium: 'Roboto_500Medium',
  semiBold: 'Roboto_600SemiBold',
  bold: 'Roboto_700Bold',
  /** Código de check-in: largura fixa para os dois blocos de quatro não dançarem. */
  mono: Platform.select({ ios: 'Menlo', default: 'monospace' }),
} as const;
