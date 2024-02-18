import App from './components/App.js';

document.getElementById('root').appendChild(App());

const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip') ; 
}

cards.forEach(card => card.addEventListener('click', flipCard));