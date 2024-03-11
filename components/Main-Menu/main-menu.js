import './main-menu.css'
import memoryCardImages from '../../data/data';
import connect4Template from '../Connect-4/connect4';
import memoryTemplate from '../Memory/memory';
import quizTemplate from '../Quiz/quiz';

const mainMenuTemplate = () => {
    const app = document.querySelector('#app');

    const welcomeMain = document.createElement('main');
    welcomeMain.className = 'rtc-welcome';

    const h1 = document.createElement('h1');
    h1.className = 'rtc-welcome-h1';
    h1.innerText = 'The Board 🎲️🎲️';

    const gamesDiv = document.createElement('div');
    gamesDiv.className = 'rtc-welcome-games';

    const connect4Button = document.createElement('button');
    connect4Button.className = 'rtc-welcome-games-button';
    connect4Button.classList.add('rtc-connect4');
    connect4Button.innerText = 'Connect4';
    connect4Button.addEventListener('click', connect4Template);

    const memoryButton = document.createElement('button');
    memoryButton.className = 'rtc-welcome-games-button';
    memoryButton.classList.add('rtc-memory');
    memoryButton.innerText = 'Memory';
    memoryButton.addEventListener('click', (event) => memoryTemplate(event, memoryCardImages));

    const quizButton = document.createElement('button');
    quizButton.className = 'rtc-welcome-games-button';
    quizButton.classList.add('rtc-quiz');
    quizButton.innerText = 'Quiz';
    quizButton.addEventListener('click', quizTemplate);

    gamesDiv.appendChild(connect4Button);
    gamesDiv.appendChild(memoryButton);
    gamesDiv.appendChild(quizButton);

    welcomeMain.appendChild(h1);
    welcomeMain.appendChild(gamesDiv);

    app.appendChild(welcomeMain);
};

export default mainMenuTemplate;