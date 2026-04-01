# FEEAGRI — Portal Web

> Frontend oficial da **Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas** — portal institucional com congressos, membros, notícias e publicações.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter)
![SWR](https://img.shields.io/badge/SWR-2.4-black)
![SCSS](https://img.shields.io/badge/SCSS-Sass-CC6699?logo=sass)
![Deploy](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel)
![Analytics](https://img.shields.io/badge/Analytics-Vercel-black?logo=vercel)

---

## Índice

- [Visão Geral](#visão-geral)
- [Stack](#stack)
- [Arquitetura](#arquitetura)
- [Páginas e Rotas](#páginas-e-rotas)
- [Camada de Dados](#camada-de-dados)
- [Como Rodar Localmente](#como-rodar-localmente)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [Deploy](#deploy)
- [Integração com o Backend](#integração-com-o-backend)
- [Decisões Técnicas](#decisões-técnicas)

---

## Visão Geral

Portal institucional da FEEAGRI, consumindo a [API REST do backend](https://github.com/andre-bandeli/feeagri-backend) hospedada no Render. O frontend é uma SPA (Single Page Application) em React, com roteamento client-side, busca de dados via SWR e estilização modular em SCSS.

**Links:**
- 🌐 Site: [www.feeagri.com.br](https://www.feeagri.com.br)
- 🔗 Backend API: [feeagri-backend](https://github.com/andre-bandeli/feeagri-backend)
- 📄 Documentação da API: `https://<api>.onrender.com/api/v1/docs/`

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 |
| Roteamento | React Router 7 |
| Busca de dados | SWR 2.4 |
| HTTP Client | Axios |
| Estilização | SCSS (Sass) |
| Carrossel | React Slick |
| Ícones | React Icons |
| Analytics | Vercel Analytics |
| Deploy | Vercel |

---

## Arquitetura

```
feeagri-web/src/
├── lib/
│   └── api.js              # Instância Axios centralizada + interceptor de erros
├── hooks/                  # Camada de dados — um hook por recurso da API
│   ├── useCongressos.js    # congressos, detalhe, próximo, notícia destaque
│   ├── useMembros.js       # gestão ativa e todas as gestões
│   ├── useNewsletter.js    # listagem de newsletters
│   ├── useNewsletterPost.js# detalhe por slug
│   ├── useParceiros.js     # parceiros agrupados por tipo
│   └── useSlides.js        # slides do hero com fallback estático
├── componentes/            # Componentes reutilizáveis
│   ├── congressos/         # CongressoCard, CongressoDestaque, Skeleton
│   ├── hero/               # Banner principal
│   ├── navbar/             # Navegação
│   ├── footer/             # Rodapé
│   ├── membros/            # CardMembro
│   ├── widget/             # Widgets da sidebar
│   └── ...
├── paginas/                # Views — uma pasta por domínio
│   ├── about/
│   ├── congressos/
│   ├── membros/
│   ├── noticias/
│   ├── parceiros/
│   ├── instituicoes/
│   ├── cursos/
│   └── secundarias/        # Páginas geradas dinamicamente por slug
├── data/                   # Dados estáticos de fallback
│   └── congressos.js
└── styles/                 # Estilos globais e variáveis SCSS
    ├── Global.scss
    ├── variables.scss
    └── buttons.scss
```

### Fluxo de dados

```
Componente → Hook (useSWR) → api.js (Axios) → Backend API
                ↓
         Cache automático (SWR)
                ↓
         Fallback estático (se API offline)
```

---

## Páginas e Rotas

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `Index` | Home — hero, próximo congresso, notícia destaque, parceiros |
| `/about` | `About` | Sobre a FEEAGRI |
| `/cursos` | `Cursos` | Guia de cursos EA, EAA e EB |
| `/congressos` | `Congressos` | Histórico de congressos |
| `/congressos/:slug` | `CongressosCard` | Detalhe do congresso |
| `/membros` | `Membros` | Conselho diretivo da gestão ativa |
| `/membros/delegacao` | `Delegacao` | Delegados da gestão ativa |
| `/conselho-diretivo` | `ConselhoDiretivo` | Conselho diretivo completo |
| `/delegacao` | `DelegacaoSup` | Delegação superior |
| `/noticias/:slug` | `NoticiaPage` | Detalhe de notícia |
| `/newsletter` | `Newsletter` | Listagem de newsletters |
| `/newsletter/:slug` | `NewsletterDetailPage` | Detalhe de newsletter |
| `/parceiros` | `Parceiros` | Parceiros e apoiadores |
| `/instituicoes` | `Instituicoes` | Instituições filiadas |
| `/atividades/:slug` | `Content` | Páginas de atividades dinâmicas |
| `/:slug` | `SlidePage` | Páginas geradas por slide |
| `/suporte` | `Suporte` | Página de suporte |

---

## Camada de Dados

Toda comunicação com a API é feita através de **custom hooks com SWR**, garantindo cache automático, revalidação e estados de loading/erro padronizados.

### api.js — cliente HTTP centralizado

```javascript
// Instância Axios com baseURL da variável de ambiente
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
})

// Interceptor global: dispara evento 'unauthorized' em respostas 401
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      window.dispatchEvent(new Event('unauthorized'))
    }
    return Promise.reject(error)
  }
)
```

### Hooks disponíveis

| Hook | Endpoint | Retorno |
|------|----------|---------|
| `useCongressos()` | `GET /congressos/` | `{ congressos, total, usingFallback, isLoading }` |
| `useCongressoDetalhe(id)` | `GET /congressos/:id/` | `{ congresso, isLoading, error }` |
| `useProximoCongresso()` | `GET /congressos/proximo/` | `{ congresso, usingFallback, isLoading }` |
| `useNoticiaDestaque()` | `GET /noticias/?destaque_home=true` | `{ noticia, isLoading, error }` |
| `useGestaoAtiva()` | `GET /membros/gestoes/?ativa=true` | `{ gestao, membros, delegados, isLoading }` |
| `useTodasGestoes()` | `GET /membros/gestoes/` | `{ gestoes, isLoading, error }` |
| `useNewsletter(limit)` | `GET /newsletters/` | `{ newsletters, total, isLoading }` |
| `useNewsletterPost(slug)` | `GET /newsletters/:slug/` | `{ post, isLoading, error }` |
| `useParceiros()` | `GET /parceiros/` | `{ parceiros, porTipo, total, isLoading }` |
| `useSlides()` | `GET /hero/slides/` | `{ slides, usingFallback, isLoading }` |

### Estratégia de fallback

Recursos críticos para a home (`slides`, `congressos`) têm dados estáticos de fallback. Se a API estiver offline, o site continua funcionando com o conteúdo em `src/data/`.

---

## Como Rodar Localmente

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/andre-bandeli/feeagri-web.git
cd feeagri-web

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# edite o .env com a URL da API

# Inicie o servidor de desenvolvimento
npm start
```

O portal estará disponível em `http://localhost:3000`

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# URL base da API backend
REACT_APP_API_URL=https://<sua-api>.onrender.com/api/v1

# Para desenvolvimento local (com backend rodando localmente)
# REACT_APP_API_URL=http://localhost:8000/api/v1
```

> ⚠️ Todas as variáveis de ambiente do React devem começar com `REACT_APP_`.
> O arquivo `.env` está no `.gitignore` — nunca commite valores de produção.

Na Vercel, configure em: **Project Settings → Environment Variables**

---

## Deploy

O projeto é hospedado na **Vercel** com deploy automático a partir da branch `main`.

### Fluxo de deploy

```
git push origin main
      ↓
Vercel detecta o push
      ↓
Build: npm run build
      ↓
Deploy automático em www.feeagri.com.br
```

### Configuração de rotas (vercel.json)

O `vercel.json` garante que o React Router funcione corretamente em produção — todas as rotas são redirecionadas para o `index.html`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Sem essa configuração, acessar diretamente `/congressos` resultaria em 404.

---

## Integração com o Backend

| Item | Valor |
|------|-------|
| Backend | [feeagri-backend](https://github.com/andre-bandeli/feeagri-backend) |
| Documentação da API | `/api/v1/docs/` (Swagger) |
| Autenticação | JWT via Bearer token |
| Formato | JSON |
| Paginação | `{ count, next, previous, results[] }` |

O frontend consome apenas endpoints públicos (leitura). Endpoints protegidos (criação, edição) são acessados exclusivamente pelo painel admin do backend.

---

## Decisões Técnicas

### SWR para busca de dados
Em vez de `useEffect` + `useState` manual, o projeto usa **SWR** — biblioteca de stale-while-revalidate do time da Vercel. Isso entrega cache automático entre navegações, revalidação em background, deduplicação de requests e estados de loading/erro prontos, com muito menos código.

### Um hook por recurso da API
Cada entidade da API tem seu próprio hook (`useCongressos`, `useMembros`, etc.) em vez de um hook genérico. Isso torna o código mais legível, facilita o isolamento de lógica de negócio (fallback, agrupamento por tipo, extração do primeiro resultado) e simplifica os testes.

### Fallback estático para conteúdo crítico
Slides do hero e lista de congressos têm dados estáticos em `src/data/`. Se a API estiver indisponível, a home continua funcional — importante para um portal institucional que precisa de alta disponibilidade percebida.

### Interceptor global de 401
Em vez de tratar erros de autenticação em cada hook ou componente, o `api.js` dispara um evento global `unauthorized` sempre que a API retorna 401. Qualquer parte da aplicação pode escutar esse evento e reagir (ex: redirecionar para login).

### SCSS modular
Cada componente/página tem seu próprio arquivo `.scss` co-localizado, evitando conflitos de estilo e facilitando a manutenção. Variáveis globais (cores, tipografia, breakpoints) ficam centralizadas em `styles/variables.scss`.

### Vercel Analytics
Integrado nativamente via `@vercel/analytics` — sem configuração de servidor, sem impacto no bundle size crítico, com dados de Web Vitals e pageviews no dashboard da Vercel.