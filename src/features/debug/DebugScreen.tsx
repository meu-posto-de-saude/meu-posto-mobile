import { ScrollView, StyleSheet, Text, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { IconSection } from '@/features/debug/components/IconSection';
import { TypeScaleSection } from '@/features/debug/components/TypeScaleSection';
import { colors, layout, typography } from '@/theme';

/** Catálogo do design system — prova visual de cada etapa, a 100% e a 200% de fonte. */
export function DebugScreen() {
  const { fontScale } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title} accessibilityRole="header">
          Catálogo do design system
        </Text>
        <Text style={styles.scale}>Escala de fonte do sistema: {fontScale.toFixed(2)}×</Text>
        <IconSection />
        <TypeScaleSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray050,
  },
  content: {
    padding: layout.screenPadding,
    gap: 16,
  },
  title: {
    ...typography.sectionH2,
    color: colors.teal800,
  },
  scale: {
    ...typography.meta,
    color: colors.gray500,
  },
});
