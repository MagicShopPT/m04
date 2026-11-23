Trabalho realizado por: *Vitor Silva* **13422**. Licenciatura em Informática, 19/11/2026.

# Módulo 04 — REACT

Este ficheiro documenta o progresso do Módulo 04 da unidade curricular de Programação WEB do Instituto Superior Miguel Torga (ISMT) até ao **EX02 — Props**.

## Lista de Exercícios Realizados
- [x] **EX01 — First Component** *(Nível L1)*: Aplicação React composta por componentes modulares (`App`, `Header`, `Navigation`, `Main` e `Footer`).
- [x] **EX02 — Props** *(Nível L2)*: Componente reutilizável `ProductCard` com propriedades de produto (`name`, `price`, `category`, `image`) e variantes visuais.

## Descrição dos Exercícios e Tomadas de Decisão

### EX01 — First Component
* **Objetivo:** Compreender a estrutura de uma aplicação React organizada por componentes reutilizáveis que devolvem JSX.
* **Decisões tomadas:**
  * Inicialização do projeto com Vite na pasta `ex01/` dentro do repositório `m04`.
  * Criação dos componentes `Header`, `Navigation`, `Main` e `Footer` em `src/components/` e composição dentro de `App` em `src/App.jsx`.
  * Utilização de elementos semânticos HTML no JSX (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) e navegação por âncoras.

### EX02 — Props
* **Objetivo:** Criar um componente reutilizável (`ProductCard`) parametrizado através de `props` e explorar variantes de apresentação.
* **Decisões tomadas:**
  * Criação de `src/components/ProductCard.jsx` recebendo `name`, `price`, `category`, `image` e uma propriedade opcional `variant` (com valor por defeito `'default'`).
  * Reutilização do `ProductCard` em `src/App.jsx` com diferentes conjuntos de `props` e aplicação de classes CSS correspondentes às variantes (`default`, `featured` e `compact`) em `src/index.css`.

## Tecnologias Utilizadas
* React (com Vite e ESLint)
* JavaScript (JSX)
* HTML5 / CSS3

## Como Executar
1. Abrir a pasta `m04/ex02` no Visual Studio Code.
2. No terminal integrado, instalar dependências (`npm install`) e iniciar o servidor de desenvolvimento (`npm run dev`).
3. Abrir o endereço local indicado pelo Vite (ex.: `http://localhost:5175/`) no navegador.

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
└── README.md