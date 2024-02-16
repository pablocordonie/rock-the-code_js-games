import './memory.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import shuffleArray from '../../utils/shuffleArray';
import cardTemplate from './Card/card';
import handleCardClick from '../../utils/handleCardClick';
import { delay } from '../../utils/handleCardClick';

const memoryBoardTemplate = (event, data) => {

    if (event.type === 'click') {
        mainMenuCleaner('memory');

        const memoryDiv = document.querySelector('.rtc-memory');

        const memoryGame = document.createElement('div');
        memoryGame.className = 'rtc-memory-game';

        const memoryBoard = document.createElement('div');
        memoryBoard.className = 'rtc-memory--board';

        const memoryPoints_1 = document.createElement('div');
        memoryPoints_1.className = 'rtc-memory--points_div1';

        const memoryPoints_2 = document.createElement('div');
        memoryPoints_2.className = 'rtc-memory--points_div2';

        memoryBoard.addEventListener('click', (event) => {
            if (event.target.classList.contains('rtc-memory--board-card')) {
                handleCardClick(event);
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

        memoryDiv.appendChild(memoryGame);
    }
};

export default memoryBoardTemplate;