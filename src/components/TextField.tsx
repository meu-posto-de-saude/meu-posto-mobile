import { useState, type ReactNode } from 'react';
import { StyleSheet, Text, TextInput, View, type KeyboardTypeOptions } from 'react-native';

import { colors, fontFamily, layout, radii, typography } from '@/theme';

type TextFieldProps = {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secure?: boolean;
  hasError?: boolean;
  keyboardType?: KeyboardTypeOptions;
  /** Botão de mostrar/ocultar senha — o único uso hoje (`Tela de Cadastro#^regra-exibir-senha-padrao`). */
  suffix?: ReactNode;
  testID?: string;
};

export function TextField({
  label,
  placeholder,
  value,
  onChangeText,
  secure = false,
  hasError = false,
  keyboardType,
  suffix,
  testID,
}: TextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = hasError ? colors.statusError : isFocused ? colors.teal600 : colors.gray200;
  const borderWidth = hasError || isFocused ? 2 : 1;

  return (
    <View style={styles.container}>
      {label !== undefined && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.box, { borderColor, borderWidth }]}>
        <TextInput
          testID={testID}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.gray500}
          secureTextEntry={secure}
          keyboardType={keyboardType}
          accessibilityLabel={label}
          // Teclado sem autocorreção e sem capitalização nos campos de e-mail e
          // senha (`Etapa 1 — Protótipo do App`, passo 6.5).
          autoCorrect={false}
          autoCapitalize="none"
          spellCheck={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={styles.input}
        />
        {suffix}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },
  label: {
    ...typography.body,
    fontFamily: fontFamily.medium,
    color: colors.gray800,
  },
  box: {
    minHeight: layout.fieldHeight,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: radii.card,
  },
  input: {
    ...typography.itemName,
    flex: 1,
    color: colors.gray800,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
});
