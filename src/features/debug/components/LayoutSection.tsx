import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { InfoCard, InfoRow } from '@/components/InfoRow';
import { QrBlock } from '@/components/QrBlock';
import { ScreenHeader } from '@/components/ScreenHeader';
import { SelectorRow } from '@/components/SelectorRow';
import { SendingOverlay } from '@/components/SendingOverlay';
import { colors, radii, typography } from '@/theme';

export function LayoutSection() {
  const [isSelected, setIsSelected] = useState(false);
  const [isSending, setIsSending] = useState(false);

  return (
    <View style={styles.card}>
      <Text style={styles.heading} accessibilityRole="header">
        Cabeçalho
      </Text>
      <View style={styles.headerSample}>
        <ScreenHeader title="Agendar consulta" backTo="/debug" />
      </View>
      <View style={styles.headerSample}>
        <ScreenHeader
          title="Confirme os dados da consulta antes de enviar o pedido para a unidade"
          backTo="/debug"
          subtitle="Clínica Geral — UBS Jardim das Flores"
        />
      </View>

      <Text style={styles.heading} accessibilityRole="header">
        Linha seletora
      </Text>
      <SelectorRow
        icon="calendar"
        label="Data da consulta"
        placeholder="Escolher data"
        onPress={() => setIsSelected((v) => !v)}
      />
      <SelectorRow
        icon="videocam"
        label="Clínica geral"
        value="Consulta presencial"
        isSelected={isSelected}
        onPress={() => setIsSelected((v) => !v)}
      />

      <Text style={styles.heading} accessibilityRole="header">
        Ficha
      </Text>
      <InfoCard>
        <InfoRow icon="calendar" label="Data" value="24 de outubro, sexta-feira" />
        <InfoRow icon="schedule" label="Horário" value="14h30" />
        <InfoRow icon="location" label="Unidade" value="UBS Jardim das Flores" isLast />
      </InfoCard>

      <Text style={styles.heading} accessibilityRole="header">
        Véu de envio
      </Text>
      <View style={styles.overlaySample}>
        <Text style={typography.body}>Conteúdo da tela, por baixo do véu.</Text>
        {isSending && <SendingOverlay message="Enviando pedido…" />}
      </View>
      <SelectorRow
        icon="autorenew"
        label={isSending ? 'Mostrando o véu' : 'Mostrar véu de envio'}
        onPress={() => setIsSending((v) => !v)}
      />

      <Text style={styles.heading} accessibilityRole="header">
        QR de check-in
      </Text>
      <QrBlock code="4K7P2M9X" margin={0} />
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
  headerSample: {
    borderRadius: radii.card,
    overflow: 'hidden',
  },
  overlaySample: {
    minHeight: 120,
    padding: 16,
    borderRadius: radii.card,
    backgroundColor: colors.gray050,
    overflow: 'hidden',
  },
});
