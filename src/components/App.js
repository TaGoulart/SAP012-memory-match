import SpaceData from '../data/space/space.js';
//import '../src/style.css';

const App = () => {
  const el = document.createElement('div');
  el.className = 'App';

  // Cria o conjunto de cartas com base nos dados de SpaceData
  const createCardElements = () => {
    const memoryGameSection = document.createElement('section');
    memoryGameSection.className = 'memory-game';
       
    SpaceData.items.slice(1).forEach(item => { //(1) p começar a partir do segundo elem., excluindo o backcard.
      const memoryCard1 = createMemoryCard(item);
      const memoryCard2 = createMemoryCard(item);

      memoryGameSection.appendChild(memoryCard1);
      memoryGameSection.appendChild(memoryCard2);
    });

    el.appendChild(memoryGameSection) //arcoragem completa com o elemento principal el
  }
   
// Função para criar um elemento de cartão
const createMemoryCard = (item) => { //declaração da funç. que aceita o arg. item p criar o memorycard
  const memoryCard = document.createElement('div');
  memoryCard.className = 'memory-card';

  const frontFace = document.createElement('img'); //elemento img criado é atribuido a variavel frontface
  frontFace.className = 'front-face'; //def. classe css do elementro front-face
  frontFace.src = item.image; //arq. data 
  frontFace.alt = item.id; //o atributo alt é definido c/ valor do atributo id do obj item. Proporciona uma descrição alternativa.

  const backFace = document.createElement('img'); //elemento img criado é atribuido a variavel backface
  backFace.className = 'back-face'; //def. classe css do elementro back-face
  backFace.src = 'images/backcard.png';
  backFace.alt = 'backcard';

  memoryCard.appendChild(frontFace);
  memoryCard.appendChild(backFace);// backface filho do elemento memorycard

  // Adicionar um ouvinte de evento de clique para virar a carta
  memoryCard.addEventListener('click', flipCard);

  return memoryCard;
};

   // Chame a função para criar os elementos de cartas com base nos dados de SpaceData
 createCardElements();

//flipcard
const cards = el.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip') ; 
}

cards.forEach(card => card.addEventListener('click', flipCard)); //qnd é clicado em qlqr uma das cartas, a funç será chamada flipcard

  return el;
};

export default App;


