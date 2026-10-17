import { useFonts } from 'expo-font';

import { appFonts } from '@/theme/fonts';

export function useAppFonts() {
  const [isLoaded, error] = useFonts(appFonts);

  return { isLoaded, error };
}
