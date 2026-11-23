Trabalho realizado por: *Vitor Silva* **13422**. Licenciatura em Informática, 23/11/2026.

# Módulo 04 — REACT

Este ficheiro documenta a conclusão dos exercícios do Módulo 04 da unidade curricular de Programação WEB do Instituto Superior Miguel Torga (ISMT).

## Lista de Exercícios Realizados
- [x] **EX01 — First Component** *(Nível L1)*: Aplicação React composta por componentes modulares (`App`, `Header`, `Navigation`, `Main` e `Footer`).
- [x] **EX02 — Props** *(Nível L2)*: Componente reutilizável `ProductCard` com propriedades de produto (`name`, `price`, `category`, `image`) e variantes visuais.
- [x] **EX03 — Component Tree** *(Nível L2)*: Aplicação de produtos estruturada na árvore `App` com `Header`, `ProductList`, `ProductCard` e `Footer`.
- [x] **EX04 — State** *(Nível L2)*: Contador e lista dinâmica com `useState`, gestão de eventos e múltiplos estados relacionados.
- [x] **EX05 — React Forms** *(Nível L3)*: Formulário de registo com inputs controlados, validação, mensagens de erro, submissão e componente de campo reutilizável.
- [x] **EX06 — useEffect** *(Nível L3)*: Consumo de API externa com `useEffect`, `useState` e `fetch`, contemplando os estados `loading`, `success` e `error`.
- [x] **EX07 — React Router** *(Nível L3)*: SPA com rotas `/`, `/products`, `/products/:id`, `/contact`, `/about` e página 404.

## Descrição dos Exercícios e Tomadas de Decisão

### EX01 — First Component
* **Objetivo:** Compreender a estrutura de uma aplicação React organizada por componentes reutilizáveis que devolvem JSX.
* **Decisões tomadas:**
  * Inicialização do projeto com Vite na pasta `ex01/` dentro do repositório `m04`.
  * Criação dos componentes `Header`, `Navigation`, `Main` e `Footer` em `src/components/` e composição dentro de `App` em `src/App.jsx`.

### EX02 — Props
* **Objetivo:** Criar um componente reutilizável (`ProductCard`) parametrizado através de `props` e explorar variantes de apresentação.
* **Decisões tomadas:**
  * Criação de `src/components/ProductCard.jsx` recebendo `name`, `price`, `category`, `image` e `variant`.
  * Aplicação de estilos específicos em `src/index.css` para as variantes `default`, `featured` e `compact`.

### EX03 — Component Tree
* **Objetivo:** Estruturar uma aplicação de produtos numa árvore de componentes com passagem de dados de cima para baixo (`App` → `ProductList` → `ProductCard`).
* **Decisões tomadas:**
  * Separação entre `Header`, `ProductList` e `Footer` em `App.jsx`, delegando a iteração do array de produtos (`.map()` com `key`) para `ProductList` e a apresentação de cada item para `ProductCard`.

### EX04 — State
* **Objetivo:** Gerir estado reativo com `useState` num contador e numa lista dinâmica, incluindo múltiplos estados relacionados.
* **Decisões tomadas:**
  * Separação em `CounterSection` (estado numérico do contador e ações de incremento, decremento e reposição) e `DynamicListSection` (múltiplos estados relacionados para `items`, `newItemText`, `selectedCategory` e `filterCategory`, com adição, conclusão, remoção e filtragem sem mutação direta do estado).

### EX05 — React Forms
* **Objetivo:** Construir um formulário de registo com inputs controlados, validação de campos, mensagens de erro e fluxo de submissão.
* **Decisões tomadas:**
  * Criação do componente reutilizável `FormField` (`src/components/FormField.jsx`) para centralizar `<label>`, `<input>` controlado e mensagem de erro acessível (`role="alert"`).
  * Validação no *submit* (`event.preventDefault()`) para nome, email, palavra-passe e confirmação de palavra-passe, apresentando feedback de sucesso após validação válida.

### EX06 — useEffect
* **Objetivo:** Consumir uma API externa de forma assíncrona em React e representar explicitamente os estados `loading`, `success` e `error`.
* **Decisões tomadas:**
  * Uso de `useEffect` com `fetch` e `AbortController` para pedir dados à API (`JSONPlaceholder`) e evitar atualizações de estado após desmontagem/novo pedido.
  * Representação visual distinta dos estados `loading`, `error` (incluindo verificação de `response.ok`) e `success`, com possibilidade de recarregar os dados.

### EX07 — React Router
* **Objetivo:** Construir uma SPA com navegação entre rotas estáticas, rotas com parâmetros dinâmicos e tratamento de rotas inexistentes (`404`).
* **Decisões tomadas:**
  * Configuração de `BrowserRouter`, `Routes` e `Route` em `src/App.jsx` para `/`, `/products`, `/products/:id`, `/contact`, `/about` e fallback `*` (`NotFoundPage`).
  * Leitura do parâmetro `id` via `useParams` em `ProductDetailPage.jsx` para apresentar os detalhes do produto selecionado.

## Tecnologias Utilizadas
* React (com Vite e ESLint)
* React Router (`react-router-dom`)
* JavaScript (JSX / Fetch API)
* HTML5 / CSS3

## Como Executar
1. Abrir a pasta `m04` no Visual Studio Code.
2. Entrar na diretoria do exercício pretendido (ex.: `cd ex07`), executar `npm install` e correr `npm run dev`.
3. Abrir o URL local indicado pelo Vite no navegador e testar as rotas (incluindo um caminho inválido como `/inexistente` para validar a página 404).

## Estrutura do Repositório
```text
m04/
├── ex01/ ... ex06/
├── ex07/
│   ├── index.html
│   ├── package.json
│   ├── README.md
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── data/
│       │   └── products.js
│       └── pages/
│           ├── HomePage.jsx
│           ├── ProductsPage.jsx
│           ├── ProductDetailPage.jsx
│           ├── ContactPage.jsx
│           ├── AboutPage.jsx
│           └── NotFoundPage.jsx
└── README.md