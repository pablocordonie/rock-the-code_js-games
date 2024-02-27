import './checkers.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import { delay } from '../../utils/handleCardClick';

const generateBoard = () => {
    const checkersBoard = document.createElement('div');
    checkersBoard.className = 'rtc-checkers--board';

    for (let i = 0; i <= 3; i++) {
        const checkersRow_1 = document.createElement('div');
        checkersRow_1.className = 'rtc-checkers--board-row';
        checkersBoard.appendChild(checkersRow_1);

        for (let j = 1; j <= 8; j++) {
            const checkersBox = document.createElement('div');
            checkersBox.className = 'rtc-checkers--board-box';
            if (j % 2 === 0) {
                checkersBox.classList.add('color1-box');
            } else {
                checkersBox.classList.add('color2-box');
            }
            checkersRow_1.appendChild(checkersBox);
        }

        const checkersRow_2 = document.createElement('div');
        checkersRow_2.className = 'rtc-checkers--board-row';
        checkersBoard.appendChild(checkersRow_2);

        for (let k = 1; k <= 8; k++) {
            const checkersBox = document.createElement('div');
            checkersBox.className = 'rtc-checkers--board-box';
            if (k % 2 === 0) {
                checkersBox.classList.add('color2-box');
            } else {
                checkersBox.classList.add('color1-box');
            }
            checkersRow_2.appendChild(checkersBox);
        }
    }

    return checkersBoard;
};

const checkersTemplate = (event) => {
    if (event.type === 'click') {
        console.log('Rendered Checkers Board Test');
        mainMenuCleaner('checkers');

        const checkersMain = document.querySelector('.rtc-checkers');

        const checkersGame = document.createElement('div');
        checkersGame.className = 'rtc-checkers-game';

        const checkersGameDescription = document.createElement('h2');
        checkersGameDescription.className = 'rtc-checkers-description';
        checkersGameDescription.innerText = 'Duelo de damas!';

        const checkersPoints_1 = document.createElement('div');
        checkersPoints_1.className = 'rtc-checkers--points_div1';
        checkersPoints_1.innerHTML += `<h3 class="rtc-checkers--points_div1-h3">0</h3>`;

        const checkersPoints_2 = document.createElement('div');
        checkersPoints_2.className = 'rtc-checkers--points_div2';
        checkersPoints_2.innerHTML += `<h3 class="rtc-checkers--points_div2-h3">0</h3>`;

        checkersGame.appendChild(checkersPoints_1);
        checkersGame.appendChild(generateBoard());
        checkersGame.appendChild(checkersPoints_2);
        checkersMain.appendChild(checkersGameDescription);
        checkersMain.appendChild(checkersGame);
    }
};

export default checkersTemplate;