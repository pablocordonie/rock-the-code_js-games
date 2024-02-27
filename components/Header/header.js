import './header.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import checkersTemplate from '../Checkers/checkers';
import memoryCardImages from '../../data/data';
import memoryTemplate from '../Memory/memory';

const headerTemplate = () => {
    const app = document.querySelector('#app');

    const header = document.createElement('header');
    header.className = 'rtc-header';

    const h1 = document.createElement('h1');
    h1.className = 'rtc-header-h1';
    h1.innerText = 'The Board 🎲️🎲️';

    const gamesDiv = document.createElement('div');
    gamesDiv.className = 'rtc-header-games';

    const checkersButton = document.createElement('button');
    checkersButton.className = 'rtc-header-games-button';
    checkersButton.classList.add('rtc-header-checkers');
    checkersButton.innerText = 'Checkers';
    checkersButton.addEventListener('click', checkersTemplate);

    const memoryButton = document.createElement('button');
    memoryButton.className = 'rtc-header-games-button';
    memoryButton.classList.add('rtc-header-memory');
    memoryButton.innerText = 'Memory';
    memoryButton.addEventListener('click', (event) => memoryTemplate(event, memoryCardImages));

    const quizButton = document.createElement('button');
    quizButton.className = 'rtc-header-games-button';
    quizButton.classList.add('rtc-header-quiz');
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

    header.appendChild(h1);
    header.appendChild(gamesDiv);

    app.appendChild(header);

    return app;
};

export default headerTemplate;