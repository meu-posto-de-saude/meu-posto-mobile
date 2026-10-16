# Padrões de desenvolvimento

| Elemento                 | Formato / Regra                                              | Exemplos                                      |
| ------------------------ | ------------------------------------------------------------ | --------------------------------------------- |
| **Branch**               | `<tipo>/<descricao>` em `kebab-case`, a partir de `develop`  | `feat/scheduling-flow` · `fix/slot-taken`     |
| **Commit**               | `<tipo>: <descricao>` (Conventional Commits)                 | `feat: add time slot screen`                  |
| **Nome do PR**           | `[TIPO] Descrição objetiva`                                  | `[FEAT] Adiciona fluxo de agendamento`        |
| **Variável**             | `camelCase`, nome descritivo, sem abreviação desnecessária   | `appointmentDate`                             |
| **Booleano**             | `camelCase` com prefixo `is`, `has`, `can`, `should`         | `isAvailable` · `canCancel`                   |
| **Função / método**      | `camelCase`, começando com verbo                             | `listSlots()` · `bookAppointment()`           |
| **Handler de evento**    | prefixo `handle`                                             | `handleConfirm` · `handleCancel`              |
| **Classe / tipo**        | `PascalCase`                                                 | `AppointmentRepository`                       |
| **Erro de domínio**      | `PascalCase` + sufixo `Error`, estende `DomainError`         | `SlotTakenError`                              |
| **Constante global**     | `UPPER_SNAKE_CASE`                                           | `MAX_LOGIN_ATTEMPTS`                          |
| **`const` local**        | `camelCase` — não usar `UPPER_SNAKE_CASE` só por ser `const` | `const patientName = 'Maria Fictícia'`        |
| **Componente React**     | `PascalCase`, arquivo `PascalCase.tsx` com o mesmo nome      | `StatusChip.tsx`                              |
| **Tela**                 | `PascalCase` + sufixo `Screen`, em `src/features/<domínio>/` | `TimeSlotScreen.tsx`                          |
| **Variável de ambiente** | `UPPER_SNAKE_CASE`, nada sensível no código                  | `EXPO_PUBLIC_API_URL`                         |
| **Idioma do código**     | Inglês, com termos de domínio do glossário PT-EN do vault    | `getAppointmentById`, não `buscarAgendamento` |

## Arquivos de rota (Expo Router)

Os arquivos dentro de `src/app/` seguem a convenção do **Expo Router** (SDK 58):

- o nome do arquivo é um segmento de URL: `kebab-case` e **em português**, como a interface (`src/app/perfil/meus-dados.tsx` → `/perfil/meus-dados`). É a única exceção à regra do código em inglês;
- arquivos especiais mantêm o nome do framework: `_layout.tsx`, grupos entre parênteses (`(tabs)`);
- o arquivo de rota **não implementa a tela** — importa `src/features/<domínio>/<Nome>Screen.tsx` e o renderiza:

  ```tsx
  import { TimeSlotScreen } from '@/features/scheduling/TimeSlotScreen';

  export default function TimeSlotRoute() {
    return <TimeSlotScreen />;
  }
  ```

## Onde fica cada coisa

- `src/components/` — só componentes do design system usados por mais de uma feature.
- `src/features/<domínio>/components/` — componente usado por uma feature só.
- `src/utils/` — formatadores e validadores compartilhados (CPF, data, telefone, CEP).

## Regras que o CI verifica (`npm run guards`)

- Nunca arquivo JavaScript (`.js`, `.jsx`, `.mjs`, `.cjs`) em `src/` ou `scripts/`: o projeto é 100% TypeScript. Script de ferramenta roda com `node arquivo.ts` (type stripping nativo do Node).
- Nunca `allowFontScaling={false}` nem `maxFontSizeMultiplier`: o layout aguenta fonte em 200%.
- Nunca AsyncStorage: token vai em `expo-secure-store`, o resto em `expo-sqlite`.
