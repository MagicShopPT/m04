Trabalho realizado por: *Vitor Silva* **13422**. Licenciatura em Informática, 23/11/2026.

# Módulo 04 — REACT

Este ficheiro documenta o progresso do Módulo 04 da unidade curricular de Programação WEB do Instituto Superior Miguel Torga (ISMT) até ao **EX06 — useEffect**.

## Lista de Exercícios Realizados
- [x] **EX01 — First Component** *(Nível L1)*: Aplicação React composta por componentes modulares (`App`, `Header`, `Navigation`, `Main` e `Footer`).
- [x] **EX02 — Props** *(Nível L2)*: Componente reutilizável `ProductCard` com propriedades de produto (`name`, `price`, `category`, `image`) e variantes visuais.
- [x] **EX03 — Component Tree** *(Nível L2)*: Aplicação de produtos estruturada na árvore `App` com `Header`, `ProductList`, `ProductCard` e `Footer`.
- [x] **EX04 — State** *(Nível L2)*: Contador e lista dinâmica com `useState`, gestão de eventos e múltiplos estados relacionados.
- [x] **EX05 — React Forms** *(Nível L3)*: Formulário de registo com inputs controlados, validação, mensagens de erro, submissão e componente de campo reutilizável.
- [x] **EX06 — useEffect** *(Nível L3)*: Consumo de API externa com `useEffect`, `useState` e `fetch`, contemplando os estados `loading`, `success` e `error`.

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

## Tecnologias Utilizadas
* React (com Vite e ESLint)
* JavaScript (JSX / Fetch API)
* HTML5 / CSS3

## Como Executar
1. Abrir a pasta `m04/ex06` no Visual Studio Code.
2. No terminal integrado, instalar dependências (`npm install`) e iniciar o servidor de desenvolvimento (`npm run dev`).
3. Abrir o endereço local indicado pelo Vite no navegador.

## Estrutura do Projeto
```text
m04/
├── ex01/
|   ├── index.html
|   ├── package.json
|   ├── README.md
|   └── src/
|       ├── main.jsx
|       ├── App.jsx
|       └── components/
|           ├── Header.jsx
|           ├── Navigation.jsx
|           ├── Main.jsx
|           └── Footer.jsx
├── ex02/
|    ├── index.html
|    ├── package.json
|    ├── README.md
|    └── src/
|        ├── main.jsx
|        ├── App.jsx
|        ├── index.css
|        └── components/
|            └── ProductCard.jsx
└── ex03/
|   ├── index.html
|   ├── package.json
|   ├── README.md
|   └── src/
|       ├── main.jsx
|       ├── App.jsx
|       ├── index.css
|       └── components/
|           ├── Header.jsx
|           ├── ProductList.jsx
|           ├── ProductCard.jsx
|           └── Footer.jsx
├── ex04/
|   ├── index.html
|   ├── package.json
|   ├── README.md
|   └── src/
|       ├── main.jsx
|       ├── App.jsx
|       ├── index.css
|       └── components/
|           ├── CounterSection.jsx
|           └── DynamicListSection.jsx
├── ex05/
|   ├── index.html
|   ├── package.json
|   ├── README.md
|   └── src/
|       ├── main.jsx
|       ├── App.jsx
|       ├── index.css
|       └── components/
|           └── FormField.jsx
├── ex06/
|   ├── index.html
|   ├── package.json
|   ├── README.md
|   └── src/
|       ├── main.jsx
|       ├── App.jsx
|       └── index.css
└── README.md