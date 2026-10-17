import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import type { Href } from 'expo-router';

import { ScreenHeader } from '@/components/ScreenHeader';
import { colors } from '@/theme';

type ScreenWithHeaderProps = {
  title: string;
  backTo: Href;
  onBack?: () => void;
  subtitle?: string;
  rightAction?: ReactNode;
  background?: string;
  children: ReactNode;
};

/** Toda tela do núcleo com a faixa `teal-600` no topo: header cresce com a fonte, corpo ocupa o resto. */
export function ScreenWithHeader({
  title,
  backTo,
  onBack,
  subtitle,
  rightAction,
  background = colors.gray050,
  children,
}: ScreenWithHeaderProps) {
  return (
    <View style={[styles.container, { backgroundColor: background }]}>
      <ScreenHeader
        title={title}
        backTo={backTo}
        onBack={onBack}
        subtitle={subtitle}
        rightAction={rightAction}
      />
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
});
