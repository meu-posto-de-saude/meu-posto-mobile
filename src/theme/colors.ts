/**
 * Tokens de cor de `UI/Design-System/Fundamentos de Design` (vault).
 *
 * Regra do vault: `brandGreen` e `green050` são decorativos e nunca recebem
 * texto por cima; `actionGreen` nunca aparece sobre a faixa institucional
 * (contraste 1.16 — some). Ação dentro da faixa é texto branco sublinhado.
 */
export const colors = {
  // Marca
  brandGreen: '#4AA369',
  teal600: '#136C68',
  teal800: '#0E4F48',
  actionGreen: '#22794F',
  actionGreenPressed: '#1F6D47',
  green050: '#EAF4EF',

  // Neutros
  white: '#FFFFFF',
  gray025: '#EDF0EF',
  gray050: '#F0F2F1',
  gray200: '#D8DEDB',
  gray500: '#5E6664',
  gray800: '#3C3C3C',

  // Status
  statusOk: '#22794F',
  statusWarning: '#8A5200',
  warning050: '#FBF2EC',
  statusError: '#8C2F26',
  error050: '#F9EDEB',

  /** Véu de overlay: preto a 45%. */
  scrim: 'rgba(0, 0, 0, 0.45)',
} as const;

/** `linear-gradient(160deg, #4AA369 0%, #136C68 100%)` — só marca, splash e cabeçalho de perfil (ADR-0027). */
export const brandGradient = `linear-gradient(160deg, ${colors.brandGreen} 0%, ${colors.teal600} 100%)`;

export type Colors = typeof colors;
