import './header.css'
import memoryCardImages from '../../data/data';
import connect4Template from '../Connect-4/connect4';
import memoryTemplate from '../Memory/memory';
import quizTemplate from '../Quiz/quiz';

const headerTemplate = () => {
    const app = document.querySelector('#app');

    const header = document.createElement('header');
    header.className = 'rtc-header';

    const h1 = document.createElement('h1');
    h1.className = 'rtc-header-h1';
    h1.innerText = 'The Board 🎲️🎲️';

    const gamesDiv = document.createElement('div');
    gamesDiv.className = 'rtc-header-games';

    const connect4Button = document.createElement('button');
    connect4Button.className = 'rtc-header-games-button';
    connect4Button.classList.add('rtc-header-connect4');
    connect4Button.innerText = 'Connect4';
    connect4Button.addEventListener('click', connect4Template);

    const memoryButton = document.createElement('button');
    memoryButton.className = 'rtc-header-games-button';
    memoryButton.classList.add('rtc-header-memory');
    memoryButton.innerText = 'Memory';
    memoryButton.addEventListener('click', (event) => memoryTemplate(event, memoryCardImages));

    const quizButton = document.createElement('button');
    quizButton.className = 'rtc-header-games-button';
    quizButton.classList.add('rtc-header-quiz');
    quizButton.innerText = 'Quiz';
    quizButton.addEventListener('click', quizTemplate);

    gamesDiv.appendChild(connect4Button);
    gamesDiv.appendChild(memoryButton);
    gamesDiv.appendChild(quizButton);

    header.appendChild(h1);
    header.appendChild(gamesDiv);

    app.appendChild(header);

    return app;
};

export default headerTemplate;