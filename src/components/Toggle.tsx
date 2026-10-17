import { StyleSheet, View } from 'react-native';

import { colors, radii } from '@/theme';

/**
 * Trilho de 52×30 com thumb branco de 24 — pixel do protótipo
 * (`Tela de Como Recebo Avisos`). Puramente decorativo: quem carrega a semântica
 * de `switch` é a linha que o envolve, não este componente.
 */
// ponytail: sem a animação de 150ms da v0.2.1; entra se o teste de campo sentir falta.
export function Toggle({ isOn }: { isOn: boolean }) {
  return (
    <View
      importantForAccessibility="no-hide-descendants"
      style={[styles.track, isOn ? styles.trackOn : styles.trackOff]}
    >
      <View style={styles.thumb} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: 52,
    height: 30,
    padding: 3,
    borderRadius: radii.pill,
  },
  trackOn: {
    backgroundColor: colors.actionGreen,
    alignItems: 'flex-end',
  },
  trackOff: {
    backgroundColor: colors.gray200,
    alignItems: 'flex-start',
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: radii.pill,
    backgroundColor: colors.white,
  },
});
