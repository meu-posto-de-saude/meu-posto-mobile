import { StyleSheet, Text, View } from 'react-native';

import { Icon } from '@/components/Icon';
import { iconNames } from '@/components/icons';
import { colors, radii, typography } from '@/theme';

export function IconSection() {
  return (
    <View style={styles.card}>
      <Text style={styles.heading} accessibilityRole="header">
        Ícones ({iconNames.length}) — devem sair vazados
      </Text>
      <View style={styles.grid}>
        {iconNames.map((name) => (
          <View key={name} style={styles.cell}>
            <Icon name={name} color={colors.teal800} />
            <Text style={styles.label}>{name}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.heading} accessibilityRole="header">
        Estado ligado (preenchido)
      </Text>
      <View style={styles.grid}>
        <View style={styles.cell}>
          <Icon name="favorite" color={colors.gray500} />
          <Text style={styles.label}>favorito: não</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="favorite" color={colors.actionGreen} isFilled />
          <Text style={styles.label}>favorito: sim</Text>
        </View>
        <View style={styles.cell}>
          <Icon name="checkCircle" color={colors.actionGreen} isFilled />
          <Text style={styles.label}>checkCircle</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.card,
    padding: 16,
    gap: 12,
  },
  heading: {
    ...typography.itemNameStrong,
    color: colors.gray800,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cell: {
    width: 96,
    alignItems: 'center',
    gap: 4,
    paddingVertical: 8,
  },
  label: {
    ...typography.eyebrow,
    color: colors.gray500,
    textAlign: 'center',
  },
});
