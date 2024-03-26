import './header.css'
import { createButton, createContainer, createTitle } from '../Templates/templates';
import memoryCardImages from '../../data/data';
import connect4Template from '../Connect-4/connect4';
import memoryTemplate from '../Memory/memory';
import quizTemplate from '../Quiz/quiz';

const headerTemplate = () => {
    const app = document.querySelector('#app');

    const header = createContainer('header', 'rtc-header');

    const h1 = createTitle('h1', 'rtc-header-h1', 'The Board 🎲️🎲️');

    const gamesDiv = createContainer('div', 'rtc-header-games');

    const connect4Button = createButton('rtc-header-games-button rtc-header-connect4', 'Connect4', connect4Template);

    const memoryButton = createButton('rtc-header-games-button rtc-header-memory', 'Memory', (event) => memoryTemplate(event, memoryCardImages));

    const quizButton = createButton('rtc-header-games-button rtc-header-quiz', 'Quiz', quizTemplate);

    gamesDiv.appendChild(connect4Button);
    gamesDiv.appendChild(memoryButton);
    gamesDiv.appendChild(quizButton);

    header.appendChild(h1);
    header.appendChild(gamesDiv);

    app.appendChild(header);

    return app;
};

export default headerTemplate;