import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { CodeBoxes } from '@/components/CodeBoxes';
import { FieldError } from '@/components/FieldError';
import { Icon } from '@/components/Icon';
import { LockedButton } from '@/components/LockedButton';
import { PillButton } from '@/components/PillButton';
import { TextField } from '@/components/TextField';
import { Toggle } from '@/components/Toggle';
import { colors, layout, radii, typography } from '@/theme';

const noop = () => {};

export function FormSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('maria.teste@exemplo');
  const [password, setPassword] = useState('senha-de-teste');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [code, setCode] = useState('48');
  const [isToggleOn, setIsToggleOn] = useState(true);

  return (
    <View style={styles.card}>
      <Text style={styles.heading} accessibilityRole="header">
        Botões
      </Text>
      <PillButton label="CONFIRMAR CONSULTA" variant="filled" onPress={noop} />
      <PillButton label="ESCOLHER OUTRO HORÁRIO" variant="outline" onPress={noop} />
      <PillButton label="SAIR DA FILA" variant="filled" tone="danger" onPress={noop} />
      <PillButton label="CANCELAR CONSULTA" variant="outline" tone="danger" onPress={noop} />
      <PillButton label="VOLTAR AO INÍCIO" variant="outline" tone="neutral" onPress={noop} />
      <PillButton label="AJUSTADO" variant="filled" fullWidth={false} onPress={noop} />
      <LockedButton label="BUSCAR HORÁRIOS" />

      <Text style={styles.heading} accessibilityRole="header">
        Campos
      </Text>
      <TextField
        label="Nome completo"
        placeholder="Como está no documento"
        value={name}
        onChangeText={setName}
      />
      <TextField
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        hasError
      />
      <FieldError message="Confira o e-mail: falta o final, como .com ou .com.br." />
      <TextField
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secure={!isPasswordVisible}
        suffix={
          <Pressable
            onPress={() => setIsPasswordVisible((visible) => !visible)}
            accessibilityRole="button"
            accessibilityLabel={isPasswordVisible ? 'Ocultar senha' : 'Mostrar senha'}
            style={styles.suffix}
          >
            <Icon
              name={isPasswordVisible ? 'visibilityOff' : 'visibility'}
              color={colors.gray500}
            />
          </Pressable>
        }
      />

      <Text style={styles.heading} accessibilityRole="header">
        Código ({code.length}/6)
      </Text>
      <CodeBoxes value={code} onChangeText={setCode} />

      <Text style={styles.heading} accessibilityRole="header">
        Chave
      </Text>
      <Pressable
        onPress={() => setIsToggleOn((on) => !on)}
        accessibilityRole="switch"
        accessibilityState={{ checked: isToggleOn }}
        style={styles.toggleRow}
      >
        <Text style={styles.toggleLabel}>Lembrete um dia antes</Text>
        <Toggle isOn={isToggleOn} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.card,
    padding: 16,
    gap: 12,
  },
  heading: {
    ...typography.itemNameStrong,
    color: colors.gray800,
  },
  suffix: {
    minWidth: layout.minTouchTarget,
    minHeight: layout.minTouchTarget,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleRow: {
    minHeight: layout.rowHeight,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  toggleLabel: {
    ...typography.itemName,
    flex: 1,
    color: colors.gray800,
  },
});
