# projeto-1

Projeto Next.js (App Router) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), usado no curso **Claude Code do zero ao avançado** (MCP, Skills, Hooks e Rules).

> **Status:** projeto recém-iniciado. A home (`app/page.tsx`) ainda é o template padrão do `create-next-app` e o `metadata` do layout ainda não foi personalizado.

## Tech Stack

| Tecnologia | Versão | Observações |
|------------|--------|-------------|
| [Next.js](https://nextjs.org) | 16.4.3 | App Router, Turbopack |
| [React](https://react.dev) | 19.3.0 | Server Components por padrão |
| TypeScript | ^5 | |
| [Tailwind CSS](https://tailwindcss.com) | ^4 | via `@tailwindcss/turbopack` |
| ESLint | ^9 | `eslint-config-next` |

Fontes: [Geist](https://vercel.com/font) (Sans e Mono) carregadas com `next/font`.

### Planejado (ainda não instalado)

Definido nas convenções do projeto (`CLAUDE.md`), mas ainda ausente do `package.json`:

- shadcn/ui
- React Hook Form + Zod
- Supabase (`createServerClient` / `createBrowserClient`)
- Stripe
- Runner de testes (o `CLAUDE.md` cita `npm run test`, mas o script não existe)

## Configuração do Next.js

Em `next.config.ts`:

- `cacheComponents: true`
- `partialPrefetching: true`
- Regra do Turbopack para processar `*.css` com `@tailwindcss/turbopack`

## Como começar

Pré-requisitos: Node.js compatível com Next.js 16 e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento (porta 3000) |
| `npm run build` | Build de produção |
| `npm run start` | Servidor de produção (após o build) |
| `npm run lint` | ESLint |
| `npm run type-check` | Checagem de tipos (`tsc --noEmit`) |

Após uma série de mudanças, rode `npm run type-check && npm run lint`.

## Estrutura

```
projeto-1/
├── app/
│   ├── layout.tsx      # Layout raiz (fontes Geist, metadata)
│   ├── page.tsx        # Home (template padrão)
│   └── globals.css     # Tailwind 4 + tokens de tema (claro/escuro)
├── public/             # Assets estáticos (SVGs do template)
├── AGENTS.md           # Regras para agentes (Next.js com breaking changes)
├── CLAUDE.md           # Convenções do projeto para o Claude Code
├── eslint.config.mjs
├── next.config.ts
└── tsconfig.json
```

### Estrutura alvo

Conforme o `CLAUDE.md`, conforme o projeto crescer:

- `app/` — rotas, agrupadas por `(grupo)/`
- `actions/` — Server Actions (mutações)
- `components/ui/` — primitivos reutilizáveis (shadcn)
- `components/` — componentes de feature
- `lib/` — helpers, clients e configurações
- `types/` — tipos globais e schemas Zod compartilhados

## Convenções

- **Server Components por padrão**: use `'use client'` apenas com hooks, eventos ou APIs de browser.
- **Mutações** via Server Actions em `actions/`; nunca chamar o banco direto em Client Components.
- **Estilo**: apenas Tailwind (sem CSS inline nem styled-components); novos design tokens antes do uso.
- **TypeScript**: nunca usar `any` explícito; use `unknown` com type guard.
- **Nomes**: arquivos em kebab-case, componentes em PascalCase.
- **Variáveis de ambiente**: `NEXT_PUBLIC_*` somente para valores seguros no client; segredos apenas em Server Actions ou Route Handlers.
- **Branches**: `feat/`, `fix/`, `chore/` + descrição em kebab-case.
- **Commits**: em inglês, no imperativo (ex.: `add OAuth callback handler`).

## Atenção: Next.js 16

Esta versão do Next.js tem mudanças incompatíveis com versões anteriores. Antes de escrever código, consulte a documentação local em `node_modules/next/dist/docs/` (veja `AGENTS.md`).

## Saiba mais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Deploy na Vercel](https://nextjs.org/docs/app/building-your-application/deploying)
