import './header.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import memorySwitch from '../Memory/memory';

const headerTemplate = () => {
    const app = document.querySelector('#app');

    const header = document.createElement('header');
    header.className = 'rtc-header';

    const h1 = document.createElement('h1');
    h1.className = 'rtc-header-h1';
    h1.innerText = 'The Board 🎲️🎲️';

    const gamesDiv = document.createElement('div');
    gamesDiv.className = 'rtc-header-games';

    const chessButton = document.createElement('button');
    chessButton.className = 'rtc-header-games-button';
    chessButton.classList.add('rtc-header-chess');
    chessButton.innerText = 'Chess';
    chessButton.addEventListener('click', (event) => {
        if (event.type === 'click') {
            console.log('Rendered Chess Board Test');
            mainMenuCleaner('chess');
        }
    });

    const memoryButton = document.createElement('button');
    memoryButton.className = 'rtc-header-games-button';
    memoryButton.classList.add('rtc-header-memory');
    memoryButton.innerText = 'Memory';
    memoryButton.addEventListener('click', memorySwitch);

    const trivialButton = document.createElement('button');
    trivialButton.className = 'rtc-header-games-button';
    trivialButton.classList.add('rtc-header-trivial');
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

    header.appendChild(h1);
    header.appendChild(gamesDiv);

    app.appendChild(header);

    return app;
};

export default headerTemplate;