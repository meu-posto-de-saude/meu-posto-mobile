import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, layout, radii, typography } from '@/theme';

type PillButtonProps = {
  label: string;
  onPress: () => void;
  /** Cheio é a ação principal; vazado é a secundária — mesmo alvo, porque secundário não quer dizer menor. */
  variant: 'filled' | 'outline';
  /**
   * `danger`: ação que desfaz algo (sair da fila, cancelar) — mesma forma, cor de erro.
   * `neutral`: saída de uma tela que já terminou (`VOLTAR AO INÍCIO` no Sucesso) —
   * borda cinza e texto escuro, para não competir com o verde do que deu certo.
   */
  tone?: 'action' | 'danger' | 'neutral';
  fullWidth?: boolean;
  testID?: string;
};

export function PillButton({
  label,
  onPress,
  variant,
  tone = 'action',
  fullWidth = true,
  testID,
}: PillButtonProps) {
  const isFilled = variant === 'filled';
  const toneColor = tone === 'danger' ? colors.statusError : colors.actionGreen;
  const borderColor = tone === 'neutral' ? colors.gray200 : toneColor;
  const textColor = isFilled ? colors.white : tone === 'neutral' ? colors.teal800 : toneColor;

  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.base,
        fullWidth ? styles.fullWidth : styles.fitContent,
        isFilled
          ? {
              backgroundColor: pressed && tone === 'action' ? colors.actionGreenPressed : toneColor,
            }
          : { borderColor, borderWidth: 2 },
        pressed && !(isFilled && tone === 'action') && styles.pressed,
      ]}
    >
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: layout.buttonHeight,
    borderRadius: radii.pill,
    paddingHorizontal: 24,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  fitContent: {
    alignSelf: 'flex-start',
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    ...typography.button,
    textAlign: 'center',
  },
});
