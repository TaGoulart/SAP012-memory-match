import '@testing-library/jest-dom/extend-expect'; // Importe este arquivo para adicionar expect.extend() à sua instância do Jest
import App from '../components/App';

test('exibe a mensagem de parabéns quando todos os pares são encontrados', () => {
  // Renderize o componente App
  const appContainer = document.createElement('div');
  appContainer.id = 'app-container';
  document.body.appendChild(appContainer);
  appContainer.appendChild(App());

  // Simule a descoberta de todos os pares clicando em duas cartas
  const firstImage = document.getElementById('image-1');
  const secondImage = document.getsElementById('image-2');

  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  firstImage.dispatchEvent(clickEvent);
  secondImage.dispatchEvent(clickEvent);

  // Verifique se a mensagem de parabéns é exibida
  const winMessage = document.querySelector('.win-message');
  expect(winMessage.textContent).toBe('Parabéns! Você encontrou todos os pares!');
});
