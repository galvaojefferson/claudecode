# Petshop Feliz Aula

Landing page institucional de um petshop fictício, construída com Next.js (App Router). Apresenta os serviços (banho e tosa, veterinário, hotelzinho e loja de produtos), a história do negócio, depoimentos de clientes e contato via WhatsApp.

O projeto é usado no curso **Claude Code do zero ao avançado** (MCP, Skills, Hooks e Rules).

## Seções da página

Página única (`app/page.tsx`) composta por Server Components em `components/`:

| Componente | Conteúdo |
|------------|----------|
| `site-header.tsx` | Navegação do topo |
| `hero-section.tsx` | Chamada principal e botões de ação |
| `services-section.tsx` | Cards dos serviços (`#servicos`) |
| `about-section.tsx` | Sobre o petshop |
| `testimonials-section.tsx` | Depoimentos |
| `contact-section.tsx` | Endereço, horários, telefone e WhatsApp (`#contato`) |
| `site-footer.tsx` | Rodapé |

O visual usa tokens de marca (`brand`, `brand-foreground`, `brand-soft`) definidos em `app/globals.css`, com tema claro e escuro automático via `prefers-color-scheme`.

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
│   ├── layout.tsx      # Layout raiz (fontes Geist, metadata, lang pt-BR)
│   ├── page.tsx        # Home: compõe as seções da landing page
│   └── globals.css     # Tailwind 4 + tokens de tema (claro/escuro)
├── components/         # Seções da página (header, hero, serviços, etc.)
├── public/             # Assets estáticos
├── .claude/            # Rules e skills do Claude Code
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
