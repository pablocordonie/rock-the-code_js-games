import './memory.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import shuffleArray from '../../utils/shuffleArray';
import cardTemplate from './Card/card';
import { delay } from '../../utils/delay';

const discoveredPairs = [];
let flippedCards = [];
let gameOver = false;

const handleMemoryCardClick = async (event, data, description) => {

    const card = event.target;

    if (!gameOver) {

        card.classList.add('flipped');
        flippedCards.push(card);

        if (flippedCards.length === 2) {

            const firstCardImage = flippedCards[0];
            const secondCardImage = flippedCards[1];

            if (firstCardImage.firstChild.alt === secondCardImage.firstChild.alt) {

                discoveredPairs.push(flippedCards);

                const points_div1Number = document.querySelector('.rtc-memory--points_div1-h3');
                points_div1Number.innerText = discoveredPairs.length;

                const points_div2Number = document.querySelector('.rtc-memory--points_div2-h3');
                points_div2Number.innerText = discoveredPairs.length;

                flippedCards = [];

                if (discoveredPairs.length === data.length) {
                    gameOver = true;
                    await delay(1000);
                    description.innerText = '🎉️  EPIC WIN!!  🎉️';
                }

            } else {

                await delay(1000);

                flippedCards.forEach(flippedCard => {
                    flippedCard.classList.remove('flipped');
                });

                flippedCards = [];
            }
        }
    } else {
        return;
    }
};

const memoryTemplate = (event, data) => {

    if (event.type === 'click') {
        mainMenuCleaner('memory');

        const memoryMain = document.querySelector('.rtc-memory');

        const memoryGame = document.createElement('div');
        memoryGame.className = 'rtc-memory-game';

        const memoryGameDescription = document.createElement('h2');
        memoryGameDescription.className = 'rtc-memory-description';
        memoryGameDescription.innerText = 'Find the 8 pairs';

        const memoryBoard = document.createElement('div');
        memoryBoard.className = 'rtc-memory--board';

        const memoryPoints_1 = document.createElement('div');
        memoryPoints_1.className = 'rtc-memory--points';
        memoryPoints_1.classList.add('rtc-memory--points_div1');
        memoryPoints_1.innerHTML += `<h3 class="rtc-memory--points_div1-h3">0</h3>`;

        const memoryPoints_2 = document.createElement('div');
        memoryPoints_2.className = 'rtc-memory--points';
        memoryPoints_2.classList.add('rtc-memory--points_div2');
        memoryPoints_2.innerHTML += `<h3 class="rtc-memory--points_div2-h3">0</h3>`;

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
    }
};

export default memoryTemplate;