import './main-menu.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';

const mainMenuTemplate = () => {
    const main = document.querySelector('#app');

    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'rtc-welcome';

    const h1 = document.createElement('h1');
    h1.className = 'rtc-welcome-h1';
    h1.innerText = 'The Board 🎲️🎲️';

    const gamesDiv = document.createElement('div');
    gamesDiv.className = 'rtc-welcome-games';

    const chessButton = document.createElement('button');
    chessButton.className = 'rtc-welcome-games-button';
    chessButton.classList.add('rtc-chess');
    chessButton.innerText = 'Chess';
    chessButton.addEventListener('click', (event) => {
        if (event.type === 'click') {
            console.log('Rendered Chess Board Test');
            mainMenuCleaner('chess');
        }
    });

    const memoryButton = document.createElement('button');
    memoryButton.className = 'rtc-welcome-games-button';
    memoryButton.classList.add('rtc-memory');
    memoryButton.innerText = 'Memory';
    memoryButton.addEventListener('click', (event) => {
        if (event.type === 'click') {
            console.log('Rendered Memory Board Test');
            mainMenuCleaner('memory');
        }
    });

    const trivialButton = document.createElement('button');
    trivialButton.className = 'rtc-welcome-games-button';
    trivialButton.classList.add('rtc-trivial');
    trivialButton.innerText = 'Trivial';
    trivialButton.addEventListener('click', (event) => {
        if (event.type === 'click') {
            console.log('Rendered Trivial Board Test');
            mainMenuCleaner('trivial');
        }
    });

    gamesDiv.appendChild(chessButton);
    gamesDiv.appendChild(memoryButton);
    gamesDiv.appendChild(trivialButton);

    welcomeDiv.appendChild(h1);
    welcomeDiv.appendChild(gamesDiv);

    main.appendChild(welcomeDiv);
};

export default mainMenuTemplate;