# ArkanFlow SaaS

Uma plataforma SaaS multi-tenant moderna e escalável, desenvolvida para gerenciar negócios locais com foco em experiência do usuário, performance e automação inteligente.

---

## 🚀 Sobre o Projeto

O **ArkanFlow** é uma solução completa para gestão de agendamentos e operações de serviços (barbearias, salões, clínicas, petshops). Desenvolvido com uma arquitetura robusta, ele permite que múltiplos negócios operem de forma isolada, segura e performática dentro da mesma infraestrutura.

## 🛠 Stack Tecnológica

O projeto foi construído utilizando as melhores práticas do mercado:

- **Frontend:** Next.js 15 (App Router), TypeScript, SCSS Modules
- **Backend:** Server Actions, API Routes, Prisma ORM
- **Database:** PostgreSQL
- **Autenticação:** Auth.js (NextAuth)
- **Performance:** TanStack Query
- **Qualidade:** ESLint, Prettier, Husky

## ✨ Funcionalidades Principais

- **Multi-tenant Architecture:** Isolamento total de dados por empresa.
- **Gestão de Agendamentos:** Calendário inteligente com status de fluxo.
- **Gestão Financeira:** Controle de entradas, saídas e ticket médio.
- **Design System:** Interface premium, responsiva e focada em UX.
- **Escalabilidade:** Estrutura modular preparada para novos nichos de mercado.

## 🏗 Estrutura do Projeto

```text
src/
├── modules/      # Lógica de negócio isolada (Auth, Appointments, etc.)
├── components/   # UI System (Reusable components)
├── styles/       # Arquitetura SCSS Profissional (Abstracts, Layout, Theme)
├── lib/          # Configurações externas (Prisma, Auth)
└── app/          # Rotas e Layouts (Next.js App Router)
```

## 📐 Padrões de Design

- **Paleta de Cores:** Foco em tons escuros (#0B0F19), azul funcional e acentos premium.
- **Tipografia:** Inter (Hierarquia clara e espaçamento premium).
- **Estilo:** Glassmorphism leve, bordas suaves, interface minimalista.

## 🚀 Como Começar

1. Clone o repositório: `git clone https://github.com/manoelarcanjo/ArkanFlow`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente (`.env.example`)
4. Rode as migrações: `npx prisma migrate dev`
5. Inicie o servidor: `npm run dev`

---

_Desenvolvido com foco em alta performance e escalabilidade._
