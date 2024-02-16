import './card.css'

const cardTemplate = (cardImage) => {
    const memoryCard = document.createElement('div');
    memoryCard.className = 'rtc-memory--board-card';

    const memoryCardImg = document.createElement('img');
    memoryCardImg.className = 'rtc-memory--board-card-img';
    memoryCardImg.src = cardImage.src;
    memoryCardImg.alt = `${cardImage.name} image`;
    memoryCardImg.setAttribute('draggable', 'false');
    memoryCard.appendChild(memoryCardImg);

    return memoryCard;
};

export default cardTemplate;