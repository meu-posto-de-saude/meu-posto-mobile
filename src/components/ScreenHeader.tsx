import type { ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, type Href } from 'expo-router';

import { Icon } from '@/components/Icon';
import { colors, layout, typography } from '@/theme';

type ScreenHeaderProps = {
  title: string;
  /**
   * O protótipo não empilha: cada header navega para um destino fixo, não
   * um "voltar" de pilha (`Mapeamento HTML → Telas do App`).
   */
  backTo: Href;
  onBack?: () => void;
  subtitle?: string;
  /** Coluna de 56 da direita — hoje só o chevron desabilitado do calendário. */
  rightAction?: ReactNode;
};

/** Faixa institucional `teal-600`, primeiro filho de `ScreenWithHeader` — cresce com a fonte em vez de estourar. */
export function ScreenHeader({ title, backTo, onBack, subtitle, rightAction }: ScreenHeaderProps) {
  return (
    <SafeAreaView edges={['top']} style={styles.band}>
      <View style={styles.row}>
        <Pressable
          onPress={onBack ?? (() => router.replace(backTo))}
          accessibilityRole="button"
          accessibilityLabel="Voltar"
          style={styles.side}
        >
          <Icon name="chevronLeft" size={26} color={colors.white} />
        </Pressable>
        <Text
          style={styles.title}
          accessibilityRole="header"
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <View style={styles.side}>{rightAction}</View>
      </View>
      {subtitle !== undefined && <Text style={styles.subtitle}>{subtitle}</Text>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  band: {
    backgroundColor: colors.teal600,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  side: {
    width: layout.navHeight,
    height: layout.navHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    ...typography.headerTitle,
    flex: 1,
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  subtitle: {
    ...typography.support,
    color: colors.white,
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingBottom: 18,
  },
});
