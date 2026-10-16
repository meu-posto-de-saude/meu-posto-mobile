// Regras inegociáveis que o lint não cobre:
// - o projeto é 100% TypeScript (nenhum arquivo JavaScript em src/ ou scripts/);
// - a fonte escala até 200% e o token nunca vai para AsyncStorage (vault, nota "Stack Mobile Expo").
// Roda direto no Node (type stripping nativo, Node >= 22.18), sem compilador.
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

type ForbiddenPattern = {
  pattern: RegExp;
  reason: string;
};

const FORBIDDEN_IN_APP: readonly ForbiddenPattern[] = [
  { pattern: /allowFontScaling=\{\s*false\s*\}/, reason: 'trava a escala de fonte' },
  { pattern: /maxFontSizeMultiplier/, reason: 'limita a escala de fonte' },
  { pattern: /@react-native-async-storage/, reason: 'armazenamento sem criptografia' },
];
const APP_ROOT = 'src';
// scripts/ entra só na regra de extensão: este arquivo contém os padrões acima como texto.
const TYPESCRIPT_ONLY_ROOTS: readonly string[] = [APP_ROOT, 'scripts'];

const violations: string[] = [];

function listFiles(root: string): string[] {
  return readdirSync(root, { recursive: true, encoding: 'utf8' }).map((file) => join(root, file));
}

for (const root of TYPESCRIPT_ONLY_ROOTS) {
  for (const path of listFiles(root)) {
    if (/\.(js|jsx|mjs|cjs)$/.test(path)) {
      violations.push(`${path} — JavaScript; o projeto é 100% TypeScript`);
    }
  }
}

for (const path of listFiles(APP_ROOT)) {
  if (!/\.(ts|tsx)$/.test(path)) {
    continue;
  }
  readFileSync(path, 'utf8')
    .split('\n')
    .forEach((line, index) => {
      for (const { pattern, reason } of FORBIDDEN_IN_APP) {
        if (pattern.test(line)) {
          violations.push(`${path}:${index + 1} — ${reason}`);
        }
      }
    });
}

if (violations.length > 0) {
  console.error(`guards: padrão proibido encontrado\n${violations.join('\n')}`);
  process.exit(1);
}

console.log('guards: ok');
