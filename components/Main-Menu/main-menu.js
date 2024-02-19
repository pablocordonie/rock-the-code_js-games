import './main-menu.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import memoryCardImages from '../../data/data';
import memoryBoardTemplate from '../Memory/memory';

const mainMenuTemplate = () => {
    const app = document.querySelector('#app');

    const welcomeMain = document.createElement('main');
    welcomeMain.className = 'rtc-welcome';

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
    memoryButton.addEventListener('click', (event) => memoryBoardTemplate(event, memoryCardImages));

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

    welcomeMain.appendChild(h1);
    welcomeMain.appendChild(gamesDiv);

    app.appendChild(welcomeMain);
};

export default mainMenuTemplate;