import type { ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

import { colors, fontFamily, radii, shadows, typography } from '@/theme';

const MODULES = 29;
const EYE = 7;
const SIZE = 172;

type QrBlockProps = {
  code: string;
  margin?: ViewStyle['margin'];
};

/**
 * Cartão de QR mais código, idêntico na Tela de Sucesso e na Tela de Código.
 *
 * O desenho **não é um QR de verdade**: é um padrão determinístico derivado
 * do código, com os três olhos no lugar. Um QR legível só faz sentido quando
 * o código vier do banco — aqui ele é fictício, e um scanner leria um código
 * que não existe em lugar nenhum. O que o leitor de tela precisa é do
 * código, e esse vem no rótulo.
 */
export function QrBlock({ code, margin }: QrBlockProps) {
  return (
    <View style={[styles.card, margin !== undefined && { margin }]}>
      <View
        accessible
        accessibilityRole="image"
        accessibilityLabel={`Código de check-in ${code.split('').join(' ')}`}
      >
        <Svg width={SIZE} height={SIZE}>
          {buildModules(code).map(({ x, y, w, h, fill }, index) => (
            <Rect key={index} x={x} y={y} width={w} height={h} fill={fill} />
          ))}
        </Svg>
      </View>
      <Text style={styles.code}>{formatCode(code)}</Text>
      <Text style={styles.hint}>Se o leitor não funcionar, diga este código na recepção.</Text>
    </View>
  );
}

/** `4K7P2M9X` vira `4K7P 2M9X` — como a pessoa lê em voz alta na recepção. */
export function formatCode(code: string): string {
  return code.length === 8 ? `${code.slice(0, 4)} ${code.slice(4)}` : code;
}

type Module = { x: number; y: number; w: number; h: number; fill: string };

/** Grade 29×29: três olhos de 7×7 e módulos sorteados por um LCG semeado pelo código — mesmo código, mesmo padrão. */
function buildModules(code: string): Module[] {
  const m = SIZE / MODULES;
  const modules: Module[] = [];
  const square = (x: number, y: number, fill: string, w = 1, h = 1): Module => ({
    x: x * m,
    y: y * m,
    w: w * m,
    h: h * m,
    fill,
  });

  // Moldura cheia, miolo branco, pupila cheia — nessa ordem de desenho.
  const drawEye = (ex: number, ey: number) => {
    modules.push(square(ex, ey, colors.teal800, EYE, EYE));
    modules.push(square(ex + 1, ey + 1, colors.white, 5, 5));
    modules.push(square(ex + 2, ey + 2, colors.teal800, 3, 3));
  };
  drawEye(0, 0);
  drawEye(MODULES - EYE, 0);
  drawEye(0, MODULES - EYE);

  let seed = code.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) & 0x7fffffff, 7);
  const next = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed;
  };

  const insideEye = (x: number, y: number) =>
    (x < EYE + 1 && y < EYE + 1) ||
    (x > MODULES - EYE - 2 && y < EYE + 1) ||
    (x < EYE + 1 && y > MODULES - EYE - 2);

  for (let y = 0; y < MODULES; y += 1) {
    for (let x = 0; x < MODULES; x += 1) {
      if (insideEye(x, y)) {
        continue;
      }
      if (next() % 100 < 45) {
        modules.push(square(x, y, colors.teal800));
      }
    }
  }

  return modules;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: radii.card,
    padding: 18,
    alignItems: 'center',
    margin: 16,
    ...shadows.card,
  },
  code: {
    ...typography.code,
    fontFamily: fontFamily.mono,
    color: colors.teal800,
    marginTop: 12,
  },
  hint: {
    ...typography.supportLong,
    color: colors.gray500,
    textAlign: 'center',
    marginTop: 6,
  },
});
