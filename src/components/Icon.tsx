import { SymbolView } from 'expo-symbols';
import { useWindowDimensions, View } from 'react-native';

import { ICONS, type IconName } from '@/components/icons';
import { symbolWeights } from '@/theme';

type IconProps = {
  name: IconName;
  size?: number;
  color: string;
  /** Preenchido só para reforçar um estado ligado — a cor sozinha não basta. */
  isFilled?: boolean;
  /** Sem rótulo o ícone é decorativo e fica fora da árvore de acessibilidade. */
  accessibilityLabel?: string;
};

export function Icon({ name, size = 24, color, isFilled = false, accessibilityLabel }: IconProps) {
  const { fontScale } = useWindowDimensions();
  const symbol = ICONS[name];
  const weight = isFilled ? symbolWeights.filled : symbolWeights.outline;

  return (
    <View
      style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}
      accessible={accessibilityLabel !== undefined}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityLabel === undefined ? undefined : 'image'}
      importantForAccessibility={accessibilityLabel === undefined ? 'no-hide-descendants' : 'yes'}
    >
      {/*
        No Android e na web o expo-symbols desenha o ícone como texto, que cresce com
        a escala de fonte do sistema e estouraria a caixa. Dividir pelo fontScale
        mantém o ícone no tamanho pedido, como na v0.2.1; o texto continua escalando.
      */}
      <SymbolView
        name={{ android: symbol, web: symbol }}
        size={size / fontScale}
        weight={{ ios: 'regular', android: weight }}
        tintColor={color}
      />
    </View>
  );
}
