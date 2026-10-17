import { StyleSheet, Text, View } from 'react-native';

import { colors, radii, typography, type TypographyRole } from '@/theme';

const SAMPLE = 'Agendar consulta às 14:30 — ação';
const roles = Object.keys(typography) as TypographyRole[];

export function TypeScaleSection() {
  return (
    <View style={styles.card}>
      <Text style={styles.heading} accessibilityRole="header">
        Tipografia ({roles.length} papéis)
      </Text>
      {roles.map((role) => (
        <View key={role} style={styles.row}>
          <Text style={styles.label}>
            {role} · {typography[role].fontSize}
          </Text>
          <Text style={[typography[role], styles.sample]}>{SAMPLE}</Text>
        </View>
      ))}
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
  row: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
    paddingBottom: 8,
  },
  label: {
    ...typography.eyebrow,
    color: colors.gray500,
  },
  sample: {
    color: colors.teal800,
  },
});
