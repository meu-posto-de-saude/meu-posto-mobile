import type { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Icon } from '@/components/Icon';
import { colors, fontFamily, radii, shadows, typography } from '@/theme';
import type { IconName } from '@/components/icons';

type InfoRowProps = {
  icon: IconName;
  label: string;
  value: string;
  isLast?: boolean;
};

/** Grade `34 | 1fr`: eyebrow maiúsculo e valor em destaque. Uma fala só ("rótulo: valor") para o leitor de tela. */
export function InfoRow({ icon, label, value, isLast = false }: InfoRowProps) {
  return (
    <View
      style={[styles.row, !isLast && styles.rowDivider]}
      accessible
      accessibilityLabel={`${label}: ${value}`}
    >
      <View style={styles.iconBox}>
        <Icon name={icon} size={22} color={colors.gray500} />
      </View>
      <View style={styles.texts} importantForAccessibility="no-hide-descendants">
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}

/** Cartão branco que envolve as `InfoRow`. */
export function InfoCard({ children }: { children: ReactNode }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.card,
    ...shadows.card,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 13,
  },
  rowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  iconBox: {
    width: 34,
    marginRight: 10,
  },
  texts: {
    flex: 1,
    gap: 2,
  },
  label: {
    ...typography.micro,
    color: colors.gray500,
    letterSpacing: 0.7,
  },
  value: {
    ...typography.paragraph,
    fontFamily: fontFamily.medium,
    color: colors.teal800,
  },
});
