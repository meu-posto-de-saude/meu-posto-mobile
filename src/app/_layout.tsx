import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { useAppFonts } from '@/hooks/useAppFonts';
import { colors } from '@/theme';

export default function RootLayout() {
  const { isLoaded, error } = useAppFonts();

  // Sem a Roboto carregada o primeiro quadro sairia na fonte do sistema e
  // pularia de tamanho; com erro, segue na fonte do sistema em vez de travar.
  if (!isLoaded && !error) {
    return null;
  }

  return (
    <>
      <Stack
        screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.gray050 } }}
      />
      <StatusBar style="dark" />
    </>
  );
}
