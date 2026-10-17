import { StyleSheet, Text, View } from 'react-native';

import { colors, layout, radii, typography } from '@/theme';

/**
 * Mesmo alvo e mesma forma do `PillButton` cheio, em `gray200` com texto `gray500` —
 * o botão travado de `Tela de Agendar Consulta`, repetido nos cinco passos do cadastro.
 */
export function LockedButton({ label }: { label: string }) {
  return (
    <View accessibilityRole="button" accessibilityState={{ disabled: true }} style={styles.base}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'stretch',
    minHeight: layout.buttonHeight,
    borderRadius: radii.pill,
    backgroundColor: colors.gray200,
    paddingHorizontal: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    ...typography.button,
    color: colors.gray500,
    textAlign: 'center',
  },
});
