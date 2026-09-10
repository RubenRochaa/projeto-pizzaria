This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) from the creators of Next.js!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Pizzaria

Sistema web para gerenciamento de uma pizzaria, com cadastro de usuários,
categorias e produtos, além de criação e acompanhamento de pedidos.

O projeto é organizado em duas aplicações:

- `frontend`: interface web em Next.js, React e Sass.
- `backend`: API REST em Express, TypeScript e Prisma.

## Tecnologias

- Next.js 16 e React 19
- Node.js e TypeScript
- Express
- PostgreSQL
- Prisma ORM
- JWT para autenticação
- Axios para comunicação entre frontend e backend

## Pré-requisitos

- Node.js instalado
- npm instalado
- PostgreSQL em execução

## Configuração do backend

Entre na pasta do backend e instale as dependências:

```bash
cd backend
npm install
```

Crie um arquivo `.env` dentro de `backend`:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/pizzaria"
JWT_SECRET="uma-chave-secreta"
```

Crie ou atualize as tabelas do banco e gere o cliente Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

Inicie a API:

```bash
npm run dev
```

A API ficará disponível em `http://localhost:3333`.

## Configuração do frontend

Em outro terminal, instale as dependências e inicie o Next.js:

```bash
cd frontend
npm install
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

Atualmente, o frontend usa `http://localhost:3333` como endereço fixo da API.
Se o backend for executado em outro endereço, ajuste `frontend/src/services/api.ts`.

## Funcionalidades da API

### Usuários

- `POST /users`: cria um usuário.
- `POST /session`: autentica um usuário.
- `GET /me`: retorna os dados do usuário autenticado.

### Categorias e produtos

- `POST /category`: cria uma categoria.
- `GET /category`: lista as categorias.
- `POST /product`: cria um produto com imagem.
- `GET /category/product`: lista produtos por categoria.

### Pedidos

- `POST /order`: cria um pedido.
- `DELETE /order`: remove um pedido.
- `POST /order/add`: adiciona um produto ao pedido.
- `DELETE /order/remove`: remove um produto do pedido.
- `PUT /order/send`: envia um pedido.
- `GET /orders`: lista os pedidos.
- `GET /order/detail`: consulta os detalhes de um pedido.
- `POST /order/finish`: finaliza um pedido.

As rotas protegidas exigem um token JWT no header:

```http
Authorization: Bearer SEU_TOKEN
```

## Estrutura do projeto

```text
backend/
	prisma/       # schema e migrations do banco
	src/          # API, controllers, services e middlewares
frontend/
	src/app/      # páginas e layouts do Next.js
	src/services/ # cliente da API
```

## Scripts disponíveis

No `backend`:

```bash
npm run dev
```

No `frontend`:

```bash
npm run dev
npm run build
npm run start
```
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
