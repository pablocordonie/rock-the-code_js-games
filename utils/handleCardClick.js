let flippedCards = [];

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const handleCardClick = async (event) => {

    const card = event.target;

    card.classList.add('flipped');
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        const firstCardImage = flippedCards[0];
        const secondCardImage = flippedCards[1];

        if (firstCardImage.firstChild.alt === secondCardImage.firstChild.alt) {

            // TO-DO: Sumar 1 punto al marcador del juego

            console.log('Son 2 cartas idénticas!');

            flippedCards = [];
            console.log(flippedCards);

        } else {

            await delay(1000);

            flippedCards.forEach(flippedCard => {
                flippedCard.classList.remove('flipped');
            });

            flippedCards = [];
            console.log(flippedCards);
        }
    }
};

export default handleCardClick;