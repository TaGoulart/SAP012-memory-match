# Memory Match Game

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. História do Usuário](#3-historia-do-usuario)
- [4. Objetivos de aprendizagem](#4-objetivos-de-aprendizagem)
- [5. Considerações técnicas](#7-considerações-técnicas)
- [8. Pistas, tips e leituras complementares](#8-pistas-tips-e-leituras-complementares)
- [9. Checklist](#9-checklist)

---

## 1. Preâmbulo

O jogo [_Memory Match_](<https://en.wikipedia.org/wiki/Concentration_(card_game)>),
também conhecido como _Concentration_, _Match Match_, _Match Up_, _Memory_,
entre outros, é um jogo de cartas em que todas as cartas são postas viradas
pra baixo sobre a superficie, virando duas cartas em cada turno. O
objetivo do jogo é encontrar pares de cartas iguais.

## 2. Resumo do projeto

Este projeto foi desenvolvido durante o bootcamp da Laboratoria. Nele, foi implementado um jogo da memória. 

![Concentration (interface)](https://raw.githubusercontent.com/TaGoulart/SAP012-memory-match/main/print1.png)


## 3. História do Usuário

Quem são os principais usuários do produto:

Crianças em idade escolar, geralmente até 6 anos.
Educadores e pais que desejam proporcionar uma experiência educativa e divertida sobre o espaço.
Aprimorar suas habilidades em português e inglês ao associar cartas com palavras em ambos os idiomas.

Quais são os objetivos destes usuários em relação com o produto:
Crianças:

Desenvolver habilidades de memória.
Aprender fatos interessantes sobre o espaço, planetas e astronautas.
Divertir-se enquanto participam de uma atividade educativa.

Educadores/Pais:

Proporcionar uma ferramenta educativa e envolvente para o aprendizado.
Estimular o interesse das crianças pelo espaço e pela ciência.
Apoiar o aprendizado de línguas estrangeiras.

Quais são os principais componentes da interface e por que:

Cartas Personalizadas: Ilustrações coloridas de planetas, astronautas, naves espaciais e cometas com legendas em português e inglês.

Quando utilizam ou utilizariam o produto:
Crianças:
Durante o tempo livre em casa.
Como uma atividade educativa durante a escola ou férias.
Em grupos, para promover interação social e prática de idiomas.

Educadores/Pais:
Como uma ferramenta educativa em sala de aula ou em casa.
Como uma opção de entretenimento educativo para crianças.
Para auxiliar no ensino e prática de português e inglês.


## 4. Objetivos de aprendizagem

HTML
Uso de HTML semântico

CSS
Uso de seletores de CSS

Modelo de caixa (box model): borda, margem, preenchimento

Uso de flexbox em CSS

Web APIs
Uso de seletores de DOM

Manipulação de eventos de DOM (listeners, propagação, delegação)

Manipulação dinâmica de DOM

JavaScript
Diferenciar entre tipos de dados primitivos e não primitivos

Arrays (arranjos)

Objetos (key, value)

Variáveis (declaração, atribuição, escopo)

Uso de condicionais (if-else, switch, operador ternário, lógica booleana)

Uso de laços (while, for, for..of)

Funções (params, args, return)

Testes unitários (unit tests)

Módulos de ECMAScript (ES modules)

Uso de linter (ESLINT)

Uso de identificadores descritivos (Nomenclatura e Semântica)

Diferença entre expressões (expressions) e declarações (statements)

Controle de Versões (Git e GitHub)
Git: Instalação e configuração

Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)

Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)

GitHub: Criação de contas e repositórios, configuração de chave SSH

GitHub: Implantação com GitHub Pages

GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)

Centrado no usuário
Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro

Design de produto
Criar protótipos para obter feedback e iterar

Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)

Pesquisa
Planejar e executar testes de usabilidade

## 5. Considerações técnicas

A lógica do projeto foi implementada completamente em JavaScript,
HTML e CSS. 

Para iniciar um novo jogo, sempre temos que embaralhar as cartas antes de 
exibi-las na tela. Para isso, foi explorado algoritmos existentes para esse propósito,
como o renomado algoritmo de Fisher-Yates (também conhecido como algoritmo de Knuth).

Neste projeto, não foi reinventado foi utilizado o algoritmo de Fisher-Yates
para criar uma função shuffle que embaralha as cartas de forma eficiente.
Essa função está integrada à aplicação e é utilizada sempre que um novo jogo é
iniciado, garantindo uma experiência dinâmica e desafiadora para os jogadores.

O _boilerplate_ contém uma estrutura de arquivos como ponto de partida, assim
como toda a configuração de dependências:

```text
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
└── src
    ├── components
    │   ├── App.js
    │   └── App.spec.js
    ├── data
    │   ├── pokemon
    │   │   ├── pokemon.js
    │   │   └── pokemon.json
    │   ├── README.md
    │   └── webdev
    │       ├── webdev.js
    │       └── webdev.json
    ├── index.html
    ├── main.js
    └── style.css
```

### `src/index.html`

Como no projeto anterior, existe um arquivo `index.html`. Como já sabe, aqui
entra a página que vai ser exibida ao usuário. Também serve para indicar quais
scripts serão utilizados e juntar tudo o que foi feito.

### `src/main.js`

Recomendamos usar `src/main.js` como ponto de entrada da sua aplicação. O
_boilerplate_ inclui este arquivo para _conectar_ ou _montar_ o _componente_
`App` no DOM. Desta forma poderemos fazer testes unitários de nossos
componentes sen necessidade de que estejam conectados a um DOM global.

Esta não é a única forma de dividir seu código. Pode usar mais arquivos e
pastas, contanto que a estrutura esteja clara para suas companheiras.

### `src/components/App.js`

Este arquivo contém um _componente_ de exemplo que mostra como podemos
representar um _componente_ como uma função que retorna um `HTMLElement`. Na
hora de construir interfaces, é útil pensar nos termos de _componentes_ ou
_vistas_ que podemos ir aninhando umas dentro das outras. Te convidamos a
pensar quais _componentes_ ou _caixinhas_ são necessárias para construir sua aplicação
e que vá adicionando _componentes_ no directorio `components` para implementar
cada um deles. Embora, novamente, no final, a forma de organizar seu arquivos depende
de você e da sua equipe. Há muitas formas de faze-lo, e o _boilerplate_
é apenas uma sugestão 🙊.

### `src/components/App.spec.js`

Este arquivo mostra como podemos criar arquivos com _especificações_
(expressadas como testes unitários) de nossos componentes.

### `src/data`

Nesta pasta há dados com conjuntos de cartas como exemplo que pode usar na sua
aplicação, assim como informação sobre como adicionar seus próprios conjuntos.
Encontrará uma pasta por cada set, e dentro de cada pasta dois arquivos: um
com la extensão `.js` e outro `.json`. Ambos arquivos contém o mesmos dados;
a diferença é que o `.js` usaremos através de um `import`, enquanto que
o `.json` está aqui para opcionalmente carregar os dados de forma assíncrona com
[`fetch()`](https://developer.mozilla.org/pt/docs/Web/API/Fetch_API).

### Conteúdo de referência

#### UX Design (Experiência do usuário)

- Investigação com usuários / entrevistas
- Princípios de design/UI

#### Desenvolvimento Front-End

- Unidade de testes do curso de JavaScript do LMS.
- Unidade de arrays do curso de JavaScript do LMS.
- Unidade de objetos do curso de JavaScript do LMS.
- Unidade de funções do curso de JavaScript do LMS.
- Unidade de DOM do curso de JavaScript do LMS.
- [Array no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array.map no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.sort no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.filter no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filtro)
- [Array.reduce no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.forEach no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- [Object.keys no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [Object.entries no MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- [Fetch API no MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [json.org](https://json.org/json-pt.html)
- [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
- [Módulos: Export](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
- [Módulos: Import](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)

#### Ferramentas

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Jest](https://jestjs.io/)

#### Organização do Trabalho

- [Histórias de Usuário](https://www.youtube.com/watch?v=sEtiCJfXTE8)
- [Definição de pronto](https://www.youtube.com/watch?v=Kfss63Q42F8)
- [Critérios de aceitação](https://medium.com/@karladiasn/user-stories-e-crit%C3%A9rios-de-aceita%C3%A7%C3%A3o-317c48403fcd)
- [Guia](https://docs.google.com/presentation/d/1bOq8ns5wsvXdksdqYL3aQoxzFQsXTVlyvlV-yxI2oBM/present?token=AC4w5VhHBbEEA9u2w8bm3Ey1Cse349frbg%3A1567540902700&includes_info_params=1&eisi=CM_ytPW4teQCFQrJgQodeTcEZg#slide=id.g5282e1a53f_1_106)

## 9. Checklist

- [x] Usar VanillaJS.
- [x] Passa pelo linter (`npm run pretest`)
- [x] Passa pelos testes (`npm test`)
- [x] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
- [x] Inclui uma _definição de produto_ clara e informativa no `README.md`.
- [x] Inclui histórias de usuário no `README.md`.
- [x] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
- [x] Inclui _Desenho da Interface de Usuário_ (protótipo de alta fidelidade)
      no `README.md`.
- [x] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
- [x] UI: Mostra cartas _embaralhadas_ corretamente.
- [x] UI: Permite o usuário _virar_ as cartas de 2 em 2.
- [x] UI: Deixa os pares que foram formados virados.
- [x] UI: Informar o usuário que ganhou quando for relevante.
- [x] UI: É _responsivo_.
- [x] UI: A interface segue os fundamentos de _visual design_.
