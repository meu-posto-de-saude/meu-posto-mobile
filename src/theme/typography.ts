import type { TextStyle } from 'react-native';

import { fontFamily } from '@/theme/fonts';

/**
 * Escala por papel de `UI/Design-System/Fundamentos de Design` (vault).
 *
 * Cor **não** entra no estilo — quem usa aplica a cor. Nenhum estilo limita a
 * escala de fonte do sistema: layout aguenta 200% (`npm run guards`).
 */
function style(
  family: string,
  size: number,
  lineHeightRatio: number,
  letterSpacing?: number,
): TextStyle {
  return { fontFamily: family, fontSize: size, lineHeight: size * lineHeightRatio, letterSpacing };
}

export const typography = {
  /** dia grande do cartão de confirmação */
  dateHuge: style(fontFamily.semiBold, 38, 1.25),
  /** hora do cartão de confirmação */
  timeLarge: style(fontFamily.semiBold, 30, 1.25),
  /** dia do card de check-in */
  dateCard: style(fontFamily.semiBold, 28, 1.25),
  /** dígito de OTP · título da abertura */
  otpDigit: style(fontFamily.regular, 26, 1.3),
  /** código de check-in — monoespaçado */
  code: style(fontFamily.mono, 19, 1.25, 3),
  /** pergunta de tela de edição, título de seção */
  sectionH2: style(fontFamily.semiBold, 22, 1.3),
  /** título de bloco de destaque e de folha modal */
  sheetTitle: style(fontFamily.semiBold, 21, 1.3),
  /** título de header (h1), toda tela */
  headerTitle: style(fontFamily.semiBold, 20, 1.25),
  /** hora do slot · código de check-in · iniciais do avatar */
  numberHighlight: style(fontFamily.semiBold, 19, 1.25),
  /** rótulo de linha do formulário de agendamento */
  rowLabel: style(fontFamily.regular, 18, 1.45),
  /** nome de item de lista, título de alerta, aba */
  itemName: style(fontFamily.regular, 17, 1.45),
  /** mesma linha, na variante de ênfase (aba ativa, título de alerta) */
  itemNameStrong: style(fontFamily.semiBold, 17, 1.45),
  /** parágrafo de folha modal e de callout */
  paragraph: style(fontFamily.regular, 16.5, 1.5),
  /** corpo, input, valor de campo */
  body: style(fontFamily.regular, 16, 1.45),
  /** texto de botão — maiúsculas com letter-spacing */
  button: style(fontFamily.medium, 16, 1.25, 1.28),
  /** parágrafo explicativo de rodapé */
  support: style(fontFamily.regular, 15.5, 1.5),
  /** meta, rótulo secundário, sublinha de lista */
  meta: style(fontFamily.regular, 15, 1.35),
  /** texto de apoio longo (prazo de 16h, estado do canal) */
  supportLong: style(fontFamily.regular, 14.5, 1.5),
  /** legenda, dia da semana no cartão */
  caption: style(fontFamily.regular, 14, 1.35),
  /** nome do profissional no slot */
  micro: style(fontFamily.regular, 13.5, 1.35),
  /** cabeçalho do calendário */
  microSmall: style(fontFamily.regular, 13, 1.35),
  /** rótulo da barra inferior */
  nav: style(fontFamily.regular, 12.5, 1.15),
  /** selo "em breve", eyebrow maiúsculo */
  badge: style(fontFamily.medium, 12, 1.35, 0.6),
  /** eyebrow do card de check-in, selo da aba desabilitada */
  eyebrow: style(fontFamily.regular, 11.5, 1.35, 0.6),
  /** pill de seção e nome de profissional em maiúsculas */
  sectionPill: style(fontFamily.bold, 12.5, 1.15, 0.8),
} as const satisfies Record<string, TextStyle>;

export type TypographyRole = keyof typeof typography;
