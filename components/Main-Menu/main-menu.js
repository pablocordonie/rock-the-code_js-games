import './main-menu.css'
import memoryTemplate from '../Memory/memory';
import memoryCardImages from '../../data/data';

const mainMenuTemplate = () => {
    const app = document.querySelector('#app');

    const welcomeMain = document.createElement('main');
    welcomeMain.className = 'rtc-welcome';

    const h1 = document.createElement('h1');
    h1.className = 'rtc-welcome-h1';
    h1.innerText = 'The Board 🎲️🎲️';

    const gamesDiv = document.createElement('div');
    gamesDiv.className = 'rtc-welcome-games';

    const memoryButton = document.createElement('button');
    memoryButton.className = 'rtc-welcome-games-button';
    memoryButton.classList.add('rtc-memory');
    memoryButton.innerText = 'Memory';
    memoryButton.addEventListener('click', (event) => memoryTemplate(event, memoryCardImages));

    gamesDiv.appendChild(memoryButton);

    welcomeMain.appendChild(h1);
    welcomeMain.appendChild(gamesDiv);

    app.appendChild(welcomeMain);
};

export default mainMenuTemplate;