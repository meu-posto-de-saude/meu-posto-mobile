# meu-posto-mobile

App do paciente do projeto Meu Posto de Saúde — agendamento em UBS.

## Stack

- [Expo SDK 58](https://docs.expo.dev/versions/v58.0.0/) + React Native 0.88 + TypeScript (strict)
- [Expo Router](https://docs.expo.dev/router/introduction/) — rotas por arquivo
- oxlint · Prettier · Husky + lint-staged

## Requisitos

- Node.js 22 (`>=22.13.0`; o CI usa a versão de [`.nvmrc`](./.nvmrc))
- Expo Go compatível com o **SDK 58**:
  - **Android:** a Play Store pode estar atrás — instale o APK oficial em [expo/expo-go-releases](https://github.com/expo/expo-go-releases/releases) (versão `58.x`).
  - **iPhone:** a App Store parou no SDK 54. Rodar no iPhone exige `eas go` (TestFlight) com conta Apple Developer.

## Como rodar

```bash
npm install
npm run dev
```

Escaneie o QR code com o Expo Go. Se a rede bloquear a conexão, use `npx expo start --tunnel`.

## Scripts

| Comando                | O que faz                                       |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | servidor de desenvolvimento                     |
| `npm run android`      | abre no Android                                 |
| `npm run web`          | abre no navegador                               |
| `npm run lint`         | oxlint                                          |
| `npm run format`       | formata com Prettier                            |
| `npm run format:check` | só verifica a formatação                        |
| `npm run typecheck`    | `tsc --noEmit`                                  |
| `npm run guards`       | regras de acessibilidade e armazenamento seguro |

## Estrutura

```
src/
├── app/        rotas (Expo Router), nomes em português — só roteamento
├── components/ design system compartilhado
├── features/   telas e lógica por domínio
├── services/   repositório, armazenamento seguro, cache offline
├── types/      modelos, enums, erros
├── utils/      formatadores e validadores
├── hooks/
└── theme/      tokens de design
```

Convenções em [`padroes-desenvolvimento.md`](./padroes-desenvolvimento.md).

## Fluxo de branches

- `develop` — integração, branch padrão
- `main` — produção, recebe PR de `develop` com tag SemVer

O pre-commit roda lint e formatação nos arquivos alterados e bloqueia commit com conflito em relação à `develop`.
