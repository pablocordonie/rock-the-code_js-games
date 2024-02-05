import './memory.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';

const memoryBoardTemplate = (event) => {
    if (event.type === 'click') {
        mainMenuCleaner('memory');

        const memoryDiv = document.querySelector('.rtc-memory');
        console.log(memoryDiv);

        const memoryGame = document.createElement('div');
        memoryGame.className = 'rtc-memory-game';

        const memoryBoard = document.createElement('div');
        memoryBoard.className = 'rtc-memory--board';

        const memoryPoints_1 = document.createElement('div');
        memoryPoints_1.className = 'rtc-memory--points_div1';

        const memoryPoints_2 = document.createElement('div');
        memoryPoints_2.className = 'rtc-memory--points_div2';

        for (let i = 0; i <= 16; i++) {
            const memoryCard = document.createElement('div');
            memoryCard.className = 'rtc-memory--board-card';
            memoryBoard.appendChild(memoryCard);
        }

        memoryGame.appendChild(memoryPoints_1);
        memoryGame.appendChild(memoryBoard);
        memoryGame.appendChild(memoryPoints_2);

        memoryDiv.appendChild(memoryGame);
    }
};

export default memoryBoardTemplate;