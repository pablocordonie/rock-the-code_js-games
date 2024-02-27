import './main-menu.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import checkersTemplate from '../Checkers/checkers';
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

    const checkersButton = document.createElement('button');
    checkersButton.className = 'rtc-welcome-games-button';
    checkersButton.classList.add('rtc-checkers');
    checkersButton.innerText = 'Checkers';
    checkersButton.addEventListener('click', checkersTemplate);

    const memoryButton = document.createElement('button');
    memoryButton.className = 'rtc-welcome-games-button';
    memoryButton.classList.add('rtc-memory');
    memoryButton.innerText = 'Memory';
    memoryButton.addEventListener('click', (event) => memoryTemplate(event, memoryCardImages));

    const quizButton = document.createElement('button');
    quizButton.className = 'rtc-welcome-games-button';
    quizButton.classList.add('rtc-quiz');
    quizButton.innerText = 'Quiz';
    quizButton.addEventListener('click', (event) => {
        if (event.type === 'click') {
            console.log('Rendered Quiz Board Test');
            mainMenuCleaner('quiz');
        }
    });

    gamesDiv.appendChild(checkersButton);
    gamesDiv.appendChild(memoryButton);
    gamesDiv.appendChild(quizButton);

    welcomeMain.appendChild(h1);
    welcomeMain.appendChild(gamesDiv);

    app.appendChild(welcomeMain);
};

export default mainMenuTemplate;