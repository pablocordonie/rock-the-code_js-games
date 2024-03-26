import './main-menu.css'
import { createButton, createContainer, createTitle } from '../Templates/templates';
import memoryCardImages from '../../data/data';
import connect4Template from '../Connect-4/connect4';
import memoryTemplate from '../Memory/memory';
import quizTemplate from '../Quiz/quiz';

const mainMenuTemplate = () => {
    const app = document.querySelector('#app');

    const welcomeMain = createContainer('main', 'rtc-welcome');

    const h1 = createTitle('h1', 'rtc-header-h1', 'The Board 🎲️🎲️');

    const gamesDiv = createContainer('div', 'rtc-welcome-games');

    const connect4Button = createButton('rtc-welcome-games-button rtc-welcome-connect4', 'Connect4', connect4Template);

    const memoryButton = createButton('rtc-welcome-games-button rtc-welcome-memory', 'Memory', (event) => memoryTemplate(event, memoryCardImages));

    const quizButton = createButton('rtc-welcome-games-button rtc-welcome-quiz', 'Quiz', quizTemplate);

    gamesDiv.appendChild(connect4Button);
    gamesDiv.appendChild(memoryButton);
    gamesDiv.appendChild(quizButton);

    welcomeMain.appendChild(h1);
    welcomeMain.appendChild(gamesDiv);

    app.appendChild(welcomeMain);
};

export default mainMenuTemplate;