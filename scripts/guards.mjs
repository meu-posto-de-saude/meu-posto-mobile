// Regras inegociáveis do vault que o lint não cobre (nota "Stack Mobile Expo"):
// a fonte precisa escalar até 200% e o token nunca vai para AsyncStorage.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const FORBIDDEN = [
  { pattern: /allowFontScaling=\{\s*false\s*\}/, reason: 'trava a escala de fonte' },
  { pattern: /maxFontSizeMultiplier/, reason: 'limita a escala de fonte' },
  { pattern: /@react-native-async-storage/, reason: 'armazenamento sem criptografia' },
];
const ROOTS = ['src'];

const violations = [];

for (const root of ROOTS) {
  for (const file of readdirSync(root, { recursive: true })) {
    if (!/\.(ts|tsx)$/.test(file)) {
      continue;
    }
    const path = join(root, file);
    readFileSync(path, 'utf8')
      .split('\n')
      .forEach((line, index) => {
        for (const { pattern, reason } of FORBIDDEN) {
          if (pattern.test(line)) {
            violations.push(`${path}:${index + 1} — ${reason}`);
          }
        }
      });
  }
}

if (violations.length > 0) {
  console.error(`guards: padrão proibido encontrado\n${violations.join('\n')}`);
  process.exit(1);
}

console.log('guards: ok');
