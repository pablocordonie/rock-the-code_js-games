import './memory.css'
import { createContainer, createContainerWithInnerHTML, createImg, createTitle } from '../Templates/templates';
import { delay } from '../../utils/delay';
import handleMemoryCardClick from './Logic/memoryLogic';
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import shuffleArray from '../../utils/shuffleArray';

const cardTemplate = (cardImage) => {
    const memoryCard = createContainer('div', 'rtc-memory--board-card');
    const memoryCardImg = createImg('rtc-memory--board-card-img', cardImage.src, `${cardImage.name} image`);

    memoryCard.appendChild(memoryCardImg);

    return memoryCard;
};

const memoryTemplate = (event, data) => {
    mainMenuCleaner('memory');

    const memoryMain = document.querySelector('.rtc-memory');

    const memoryGame = createContainer('div', 'rtc-memory-game');

    const memoryGameDescription = createTitle('h2', 'rtc-memory-description', 'Find the 8 pairs');

    const memoryBoard = createContainer('div', 'rtc-memory--board');

    const memoryPoints_1 = createContainerWithInnerHTML('rtc-memory--points rtc-memory--points_div1', '<h3 class="rtc-memory--points_div1-h3">0</h3>');

    const memoryPoints_2 = createContainerWithInnerHTML('rtc-memory--points rtc-memory--points_div2', '<h3 class="rtc-memory--points_div2-h3">0</h3>');

    memoryBoard.addEventListener('click', (event) => {
        if (event.target.classList.contains('rtc-memory--board-card')) {
            handleMemoryCardClick(event, data, memoryGameDescription);
        }
    });

    for (let i = 0; i <= 1; i++) {
        data = shuffleArray(data);
        data.forEach(async (cardImage, index) => {
            await delay(index * 25);
            memoryBoard.appendChild(cardTemplate(cardImage));
        });
    };

    memoryGame.appendChild(memoryPoints_1);
    memoryGame.appendChild(memoryBoard);
    memoryGame.appendChild(memoryPoints_2);

    memoryMain.appendChild(memoryGameDescription);
    memoryMain.appendChild(memoryGame);
};

export default memoryTemplate;