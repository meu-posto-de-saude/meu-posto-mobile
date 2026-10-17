import { StyleSheet, Text, View } from 'react-native';

import { Icon } from '@/components/Icon';
import { colors, typography } from '@/theme';

/**
 * Ícone + texto de erro logo abaixo de um `TextField`. A região viva faz o leitor
 * de tela anunciar o erro assim que ele aparece.
 */
export function FieldError({ message }: { message: string }) {
  return (
    <View style={styles.row} accessibilityLiveRegion="polite" accessibilityRole="alert">
      <Icon name="error" size={19} color={colors.statusError} />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 7,
  },
  text: {
    ...typography.meta,
    flex: 1,
    color: colors.statusError,
  },
});
