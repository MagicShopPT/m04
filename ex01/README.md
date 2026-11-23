Trabalho realizado por: *Vitor Silva* **13422**. Licenciatura em Informática, 19/11/2026.

# Módulo 04 — REACT

Este ficheiro documenta o progresso do Módulo 04 da unidade curricular de Programação WEB do Instituto Superior Miguel Torga (ISMT) até ao **EX01 — First Component**.

## Lista de Exercícios Realizados
- [x] **EX01 — First Component** *(Nível L1)*: Aplicação React composta por componentes modulares (`App`, `Header`, `Navigation`, `Main` e `Footer`).

## Descrição dos Exercícios e Tomadas de Decisão

### EX01 — First Component
* **Objetivo:** Compreender a estrutura de uma aplicação React organizada por componentes reutilizáveis que devolvem JSX.
* **Decisões tomadas:**
  * Inicialização do projeto com Vite (`npm create vite@latest ex01`) na pasta `ex01/` dentro do repositório `m04`.
  * Criação dos componentes `Header`, `Navigation`, `Main` e `Footer` em ficheiros próprios na pasta `src/components/`, compostos posteriormente dentro de `App` em `src/App.jsx`.
  * Utilização de elementos semânticos HTML no JSX (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) e navegação interna por âncoras.

## Tecnologias Utilizadas
* React (com Vite e ESLint)
* JavaScript (JSX)
* HTML5 / CSS3

## Como Executar
1. Abrir a pasta `m04/ex01` no Visual Studio Code.
2. No terminal integrado, instalar dependências (`npm install`) e iniciar o servidor de desenvolvimento (`npm run dev`).
3. Abrir o endereço local indicado pelo Vite (ex.: `http://localhost:5173/`) no navegador.

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
└── README.md