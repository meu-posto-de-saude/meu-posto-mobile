import { useFonts } from 'expo-font';

import { robotoFonts } from '@/theme/fonts';

export function useAppFonts() {
  const [isLoaded, error] = useFonts(robotoFonts);

  return { isLoaded, error };
}
