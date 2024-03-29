import { delay } from '../../../utils/delay';

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

export default handleMemoryCardClick;