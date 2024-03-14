import SpaceData from '../data/space/space.js';

const App = () => {
  const el = document.createElement('div');
  el.className = 'App';

  //função de embaralhamento de array Fisher-Yates
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomNumber = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomNumber]] = [array[randomNumber], array[i]];
    }
  };
  
  //variáveis de estado
  let selectedCards = [];
  let isWaiting = false; //isWaiting é uma flag booleana (estado de espera), aguarda uma resposta do usuário antes de prosseguir ou indica um processo em andamento
  let pairsFound = 0; // Adicionando a declaração da variável pairsFound

  const createCardElements = () => {
    const memoryGameSection = document.createElement('section');
    memoryGameSection.className = 'memory-game'; //atribuído a classe CSS "memory-game"

    // Filtrar o array para remover a carta 'backcard'
    const filteredSpaceData = SpaceData.items.filter(item => item.id !== 'backcard');

    // Duplicar cada carta (exceto 'backcard') para criar um par correspondente
    const duplicatedSpaceData = [...filteredSpaceData, ...filteredSpaceData];

    shuffleArray(duplicatedSpaceData); // Embaralhar o array de cartas duplicadas

    duplicatedSpaceData.forEach(item => {
      const memoryCard = createMemoryCard(item);
      memoryGameSection.appendChild(memoryCard);
    });

    el.appendChild(memoryGameSection);
  };

  const createMemoryCard = (item) => {
    const memoryCard = document.createElement('div');
    memoryCard.className = 'memory-card';

    const frontFace = document.createElement('img');
    frontFace.className = 'front-face';
    frontFace.src = item.image;
    frontFace.alt = item.id;

    const backFace = document.createElement('img');
    backFace.className = 'back-face';
    backFace.src = 'images/backcard.png';
    backFace.alt = 'backcard';

    memoryCard.appendChild(frontFace);
    memoryCard.appendChild(backFace);

    memoryCard.addEventListener('click', flipCard);

    return memoryCard;
  };

  const flipCard = (event) => {
    if (isWaiting) return;

    const card = event.currentTarget;

    if (selectedCards.includes(card)) return; //obtenção da carta atual que foi clicada (event.currentTarget)

    selectedCards.push(card); //add o cartão atual à lista de cartões selecionados
    card.classList.toggle('flip'); //add ou remov. a classe flip do cartão, invertendo o estado virado ou não

    if (selectedCards.length === 2) { //verifica se o comprimento(nº de elementos do array selectedCards) é igual ou superior a 2, indica que o jogador virou duas cartas.
      isWaiting = true;

      setTimeout(() => {
        const [firstCard, secondCard] = selectedCards; //desestrutura a lista de cartões selecionados em duas variaveis para que passem pela condição de imgs iguais ou não

        if (firstCard.children[0].alt === secondCard.children[0].alt) {
          // Verifica se os alts das imagens são iguais
          firstCard.classList.add('matched');
          secondCard.classList.add('matched');
          pairsFound++;

          if (pairsFound === SpaceData.items.length / 2) {
            // Verifica se todos os pares foram encontrados
            showWinMessage();
          }
        } else {
          firstCard.classList.toggle('flip');
          secondCard.classList.toggle('flip');
        }

        selectedCards = [];
        isWaiting = false;
      }, 1000);
    }
  };

  const showWinMessage = () => {
    const winMessage = document.createElement('div');
    winMessage.className = 'win-message';
    winMessage.textContent = 'Parabéns! Você encontrou todos os pares!';
    el.appendChild(winMessage);

    winMessage.classList.add('show');

  };

  createCardElements();

  return el;
};

export default App;
