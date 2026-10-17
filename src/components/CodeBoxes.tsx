import { StyleSheet, Text, TextInput, View } from 'react-native';

import { colors, fontFamily, radii, typography } from '@/theme';

const LENGTH = 6;

type CodeBoxesProps = {
  value: string;
  onChangeText: (code: string) => void;
  testID?: string;
};

/**
 * As seis caixas do código de verificação. É **um** campo para o leitor de tela,
 * não seis: TalkBack anunciando "campo 1 de 6" seis vezes é inutilizável
 * (`Tela de Login#Acessibilidade`). O `TextInput` invisível fica por cima das
 * caixas — recebe o toque, abre o teclado e guarda o valor; as caixas são só desenho.
 */
export function CodeBoxes({ value, onChangeText, testID }: CodeBoxesProps) {
  return (
    <View>
      <View style={styles.row} importantForAccessibility="no-hide-descendants">
        {Array.from({ length: LENGTH }, (_, index) => {
          // A caixa seguinte ao último dígito é o cursor, feito de borda.
          const isCursor = index === value.length;
          return (
            <View key={index} style={[styles.box, isCursor ? styles.cursor : styles.idle]}>
              <Text style={styles.digit}>{value[index] ?? ''}</Text>
            </View>
          );
        })}
      </View>
      <TextInput
        testID={testID}
        value={value}
        onChangeText={(text) => onChangeText(text.replace(/\D/g, '').slice(0, LENGTH))}
        keyboardType="number-pad"
        maxLength={LENGTH}
        autoCorrect={false}
        caretHidden
        accessibilityLabel="Código de 6 números"
        style={styles.hiddenInput}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  box: {
    flex: 1,
    minHeight: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: radii.card,
  },
  idle: {
    borderColor: colors.gray200,
    borderWidth: 1,
  },
  cursor: {
    borderColor: colors.teal600,
    borderWidth: 2,
  },
  digit: {
    ...typography.otpDigit,
    fontFamily: fontFamily.semiBold,
    color: colors.teal800,
  },
  // Invisível: o que a pessoa vê são as caixas de baixo.
  hiddenInput: {
    ...StyleSheet.absoluteFill,
    color: 'transparent',
    opacity: 0,
  },
});
