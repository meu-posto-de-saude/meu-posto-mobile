import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import { colors, typography } from '@/theme';

/**
 * Véu que cobre a tela inteira durante um envio — bloqueia toque e impede o
 * leitor de tela de continuar lendo a tela de baixo (evita a ação duplicada
 * de um segundo toque).
 */
export function SendingOverlay({ message }: { message: string }) {
  return (
    <View
      style={StyleSheet.absoluteFill}
      accessible
      accessibilityLiveRegion="polite"
      accessibilityLabel={message}
    >
      <View style={styles.veil}>
        <ActivityIndicator size="large" color={colors.teal600} />
        <Text style={styles.message}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  veil: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.94)',
  },
  message: {
    ...typography.body,
    color: colors.gray800,
  },
});
