import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Icon } from '@/components/Icon';
import { colors, layout, typography } from '@/theme';
import type { IconName } from '@/components/icons';

type SelectorRowProps = {
  icon: IconName;
  /** Nome do campo ou da especialidade. */
  label: string;
  /** Ganha do `placeholder` quando existe. */
  value?: string;
  /** Em `teal` a pessoa leria o campo como já respondido — por isso cinza. */
  placeholder?: string;
  isSelected?: boolean;
  onPress: () => void;
};

/** Linha `56 | 1fr | 32`: ícone, duas linhas de texto, chevron ou check, divisória embaixo. */
export function SelectorRow({
  icon,
  label,
  value,
  placeholder,
  isSelected = false,
  onPress,
}: SelectorRowProps) {
  const subline = value ?? placeholder;

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: isSelected }}
      style={[styles.row, isSelected && styles.rowSelected]}
    >
      <View style={styles.iconBox}>
        <Icon name={icon} size={24} color={colors.gray500} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.label}>{label}</Text>
        {subline !== undefined && (
          <Text
            style={[
              styles.subline,
              { color: value !== undefined ? colors.teal800 : colors.gray500 },
            ]}
          >
            {subline}
          </Text>
        )}
      </View>
      <View style={styles.trailing}>
        {isSelected ? (
          <Icon name="check" size={24} color={colors.actionGreen} />
        ) : (
          <Icon name="chevronRight" size={22} color={colors.gray500} />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: layout.rowHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  rowSelected: {
    backgroundColor: colors.green050,
  },
  iconBox: {
    width: layout.rowHeight,
    alignItems: 'center',
  },
  texts: {
    flex: 1,
    gap: 2,
  },
  label: {
    ...typography.rowLabel,
    color: colors.gray800,
  },
  subline: {
    ...typography.body,
  },
  trailing: {
    width: 32,
    alignItems: 'center',
  },
});
