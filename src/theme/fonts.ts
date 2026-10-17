import { MaterialSymbols_400Regular } from '@expo-google-fonts/material-symbols/400Regular';
import { MaterialSymbols_400Regular_Filled } from '@expo-google-fonts/material-symbols/400Regular_Filled';
import { Roboto_400Regular } from '@expo-google-fonts/roboto/400Regular';
import { Roboto_500Medium } from '@expo-google-fonts/roboto/500Medium';
import { Roboto_600SemiBold } from '@expo-google-fonts/roboto/600SemiBold';
import { Roboto_700Bold } from '@expo-google-fonts/roboto/700Bold';
import { Platform } from 'react-native';

/**
 * Pesos de Material Symbols no formato que o `expo-symbols` espera. `outline` é o
 * estilo do ADR-0041; `filled` só reforça um estado ligado (favorito, confirmado).
 */
export const symbolWeights = {
  outline: { name: 'MaterialSymbols_400Regular', font: MaterialSymbols_400Regular },
  filled: { name: 'MaterialSymbols_400Regular_Filled', font: MaterialSymbols_400Regular_Filled },
} as const;

/**
 * Fontes carregadas na inicialização do app, via `useAppFonts`.
 *
 * Importadas peso a peso, e não pelo índice do pacote, para o bundle levar só os
 * arquivos usados. Os símbolos entram aqui para nenhum ícone aparecer em branco
 * enquanto o `expo-symbols` carrega a própria fonte.
 */
export const appFonts = {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_600SemiBold,
  Roboto_700Bold,
  [symbolWeights.outline.name]: symbolWeights.outline.font,
  [symbolWeights.filled.name]: symbolWeights.filled.font,
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
