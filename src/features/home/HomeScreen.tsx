import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors, typography } from '@/theme';

/** Placeholder da E1 — vira a Tela de Início no porte do fluxo Sistema (E8). */
export function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meu Posto de Saúde</Text>
      {__DEV__ && (
        <Link href="/debug" style={styles.debugLink}>
          Abrir catálogo (debug)
        </Link>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
  },
  title: {
    ...typography.sectionH2,
    color: colors.teal800,
  },
  debugLink: {
    ...typography.body,
    color: colors.teal600,
    textDecorationLine: 'underline',
    padding: 12,
  },
});
