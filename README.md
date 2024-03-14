# Memory Match Game

## Índice

- [1. Preâmbulo](#1-preâmbulo)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. História do Usuário](#3-historia-do-usuario)
- [4. Considerações gerais](#4-considerações-gerais)
- [5. Critérios de aceitação mínimos do projeto](#5-critérios-de-aceitação-mínimos-do-projeto)
- [6. Hacker edition](#6-hacker-edition)
- [7. Considerações técnicas](#7-considerações-técnicas)
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

Exemplos de Histórias de Usuário:
Como jogador, quero associar a palavra "Mars" com a carta correspondente para praticar meu vocabulário em inglês enquanto jogo.
Como pai, quero que meu filho pratique e aprenda português ao mesmo tempo em que se diverte no jogo.
Como educador, quero incluir o jogo como parte das atividades bilíngues da minha aula, para promover o aprendizado de idiomas de forma lúdica.

### HTML

- [ ] **Uso de HTML semântico**

  <details><summary>Links</summary><p>

  * [HTML semântico](https://curriculum.laboratoria.la/pt/topics/html/html5/semantic-html)
  * [Semantics in HTML - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de seletores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/pt/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/pt_BR/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caixa (box model): borda, margem, preenchimento**

  <details><summary>Links</summary><p>

  * [Modelo de Caixa e Display](https://curriculum.laboratoria.la/pt/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox em CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#pt-br)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

#### DOM (Document Object Model)

- [ ] **Uso de seletores de DOM**

  <details><summary>Links</summary><p>

  * [Modificando o DOM](https://curriculum.laboratoria.la/pt/topics/browser/dom/1-dom-methods-selection)
  * [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
  * [Locating DOM elements using selectors - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manipulação de eventos de DOM (listeners, propagação, delegação)**

  <details><summary>Links</summary><p>

  * [Introdução a eventos - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/removeEventListener)
  * [Objeto Event](https://developer.mozilla.org/pt-BR/docs/Web/API/Event)
</p></details>

- [ ] **Manipulação dinâmica de DOM**

  <details><summary>Links</summary><p>

  * [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Variáveis (declaração, atribuição, escopo)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de dados e operadores](https://curriculum.laboratoria.la/pt/topics/javascript/basics/values-variables-and-types)
  * [Variáveis](https://curriculum.laboratoria.la/pt/topics/javascript/basics/variables)
</p></details>

- [ ] **Uso de condicionais (if-else, switch, operador ternário, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estruturas condicionais e repetitivas](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisões no seu código — condicionais - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de laços (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Laços (Loops)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/loops)
  * [Laços e iterações - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funções (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funções (controle de fluxo)](https://curriculum.laboratoria.la/pt/topics/javascript/flow-control/functions)
  * [Funções clássicas](https://curriculum.laboratoria.la/pt/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/pt/topics/javascript/functions/arrow)
  * [Funções — blocos reutilizáveis de código - MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descritivos (Nomenclatura e Semântica)**

- [ ] **Diferença entre expressões (expressions) e declarações (statements)**

#### Tipos de dados

- [ ] **Diferenciar entre tipos de dados primitivos e não primitivos**

- [ ] **Arrays (arranjos)**

  <details><summary>Links</summary><p>

  * [Arranjos](https://curriculum.laboratoria.la/pt/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org//pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos em JavaScript](https://curriculum.laboratoria.la/pt/topics/javascript/objects/objects)
</p></details>

#### Testing em Javascript

- [ ] **Testes unitários (unit tests)**

  <details><summary>Links</summary><p>

  * [Introdução ao Jest - Documentação oficial](https://jestjs.io/docs/pt-BR/getting-started)
</p></details>

#### Módulos

- [ ] **Módulos de ECMAScript (ES modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

### Controle de Versões (Git e GitHub)

#### Git

- [ ] **Git: Instalação e configuração**

- [ ] **Git: Controle de versão com git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integração de mudanças entre ramos (branch, checkout, fetch, merge, reset, rebase, tag)**

#### GitHub

- [ ] **GitHub: Criação de contas e repositórios, configuração de chave SSH**

- [ ] **GitHub: Implantação com GitHub Pages**

  <details><summary>Links</summary><p>

  * [Site oficial do GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboração pelo Github (branches | forks | pull requests | code review | tags)**

### Centrado no usuário

- [ ] **Desenhar e desenvolver um produto ou serviço colocando as usuárias no centro**

### Design de produto

- [ ] **Criar protótipos para obter feedback e iterar**

- [ ] **Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)**

### Pesquisa

- [ ] **Planejar e executar testes de usabilidade**


#### Protótipo de alta fidelidade

O próximo passo é desenhar a sua Interface de Usuário (UI que vem do inglês -
_User Interface_). Para isso aprenda a utilizar algm ferramenta de
desenho visual. Nós te recomendamos o [Figma](https://www.figma.com/), que é
uma ferramenta que funciona no navegador com um conta gratuita.
Porém, a escolha é livre e você pode utilizar outros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

O desenho deve representar a sua solução _ideal_. Digamos que é o que
desejaria implementar se tivesse tempo ilimitado para trabalhar. Além disso,
seu desenho deve seguir os fundamentos de _visual design_.

#### Testes de usabilidade

Durante o desafio deverá fazer _tests_ de usabilidade com distintos usuários, e
com base nos resultados, deverá iterar seus desenhos. Conte quais problemas de
usabilidade foram encontradas através dos _tests_ e como elas foram
melhoradas na sua proposta final.

### Implantação de la Interface de Usuário (HTML/CSS/JS)

Assim que desenhar sua interface de usuário, deve trabalhar em sua implantação.
**Não** é necessário que construa a interface exatamente como foi desenhado.
O tempo de hacking é escasso, assim deverá priorizar

Como mínimo, sua implantação deve:

1. Dado um set de cartas, embaralhar as cartas e mostrá-las na interface.
2. Permitir al usuário _virar_ as cartas de 2 em 2.
3. Os pares encontrados devem permanecer viradas para cima.
4. Indicar ao usuário que ganhou quando conseguir virar todas as cartas.
5. Ser _responsiva_, ou seja, deve ser visualizada sem problemas a partir de
   diversos tamanhos de tela: celulares, tablets e desktops.
6. Que a interface siga os fundamentos de _visual design_.

### Testes unitários

O _boilerplate_ deste projeto inclui
[testes unitários (_unit tests_) de um componente como exemplo](./src/components/App.spec.js).
A medida que vai agregando componentes, terá que ir agregando os testes para
manter uma boa _cobertura_.

Seus _testes unitários_ devem ter uma cobertura de 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), e _branches_
(_ramas_) de seus componentes.

## 6. Hacker edition

As seções chamadas _Hacker Edition_ são **opcionais**. Se já tiver terminado
todos os requisitos anteriores e tiver tempo, pode tentar completá-las. Dessa
forma, você pode aprofundar e/ou exercitar mais os objetivos de aprendizagem
deste projeto.

Features/características extra sugeridas:

- Ao invés de consumir os dados estáticos fornecidos neste repositório, pode
  consumir os dados de forma dinâmica, carregando um arquivo JSON por meio de
  `fetch`. A pasta `src/data` contém uma versão `.js` e uma `.json` de
  de cada conjunto de dados.
- Adicionar novos conjuntos de cartas.
- Calcular a pontuação baseado na quantidade de turnos.
- Adicionar timer e ter conta em pontuação.
- 100% Coverage

## 7. Considerações técnicas

A lógica do projeto deve ser implementada completamente em JavaScript,
HTML e CSS. Neste projeto NÃO é permitido usar bibliotecas ou frameworks, apenas
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

Para iniciar um novo jogo, sempre teremos que _embaralhar_ as cartas antes de
printá-las na tela. Para isso, te convidamos a explorar algoritmos
existentes para este tipo de operação (chamada _shuffle_ em inglês), como por
exemplo o [_algoritmo de Fisher-Yates (aka Knuth)_](https://es.wikipedia.org/wiki/Algoritmo_de_Fisher-Yates).

Neste projeto não se espera que _invente_ ou implemente seu próprio algoritmo
para embaralhar as cartas. Considere as opções existentes,
escolha uma e a adapte para seu projeto (agregando uma função `shuffle`
que possa ser usada em sua aplicação).

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

Quando estiver pronta para codar, te sugerimos começar desta maneira:

1. Uma das integrantes da equipe deve realizar um
[fork](https://help.github.com/articles/fork-a-repo/) do repositório de sua
   turma (a equipe de formação fornecerá o link). A outra integrante da dupla
   deve fazer um fork **a partir do repositório de sua companheira** e
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) um `remote`
   a partir dele.
2. [Clona](https://help.github.com/articles/cloning-a-repository/)
   seu _fork_ a seu computadora (copia local).
3. Instale as dependências do projeto com o comando `npm install`, assumindo que
   já tenha instalado o [Node.js](https://nodejs.org/) (que inclui
   [npm](https://docs.npmjs.com/)).
4. Se tudo correr bem, deve ser capaz de executar os :traffic_light: testes
   unitários (unit tests) com o comando `npm test`.
5. Para ver a interface de seu programa no navegador, utilize o comando `npm start`
   para subir o servidor web no endereço `http://localhost:5000`.
6. Comece a codar! :rocket:

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

- [ ] Usar VanillaJS.
- [ ] Passa pelo linter (`npm run pretest`)
- [ ] Passa pelos testes (`npm test`)
- [ ] Testes unitários cobrem um mínimo de 70% de statements, functions, lines e
  branches.
- [ ] Inclui uma _definição de produto_ clara e informativa no `README.md`.
- [ ] Inclui histórias de usuário no `README.md`.
- [ ] Inclui rascunho da solução (protótipo de baixa fidelidade) no `README.md`.
- [ ] Inclui _Desenho da Interface de Usuário_ (protótipo de alta fidelidade)
      no `README.md`.
- [ ] Inclui uma lista de problemas detectados nos testes de usabilidade no
  `README.md`.
- [ ] UI: Mostra cartas _embaralhadas_ corretamente.
- [ ] UI: Permite o usuário _virar_ as cartas de 2 em 2.
- [ ] UI: Deixa os pares que foram formados virados.
- [ ] UI: Informar o usuário que ganhou quando for relevante.
- [ ] UI: É _responsivo_.
- [ ] UI: A interface segue os fundamentos de _visual design_.
