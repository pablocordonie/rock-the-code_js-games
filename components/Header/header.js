import './header.css'
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

    const memoryButton = document.createElement('button');
    memoryButton.className = 'rtc-header-games-button';
    memoryButton.classList.add('rtc-header-memory');
    memoryButton.innerText = 'Memory';
    memoryButton.addEventListener('click', (event) => memoryTemplate(event, memoryCardImages));

    gamesDiv.appendChild(memoryButton);

    header.appendChild(h1);
    header.appendChild(gamesDiv);

    app.appendChild(header);

    return app;
};

export default headerTemplate;