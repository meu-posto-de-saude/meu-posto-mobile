import { Redirect } from 'expo-router';

import { DebugScreen } from '@/features/debug/DebugScreen';

export default function DebugRoute() {
  // Fora do build de desenvolvimento a rota não existe para o paciente.
  if (!__DEV__) {
    return <Redirect href="/" />;
  }

  return <DebugScreen />;
}
