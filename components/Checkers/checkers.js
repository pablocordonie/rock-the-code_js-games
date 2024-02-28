import './checkers.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import { delay } from '../../utils/handleCardClick';

const generateBoard = () => {
    let rowCount = 1;
    const checkersBoard = document.createElement('div');
    checkersBoard.className = 'rtc-checkers--board';

    for (let i = 0; i <= 3; i++) {
        let boxCount = 1;
        const checkersRow_1 = document.createElement('div');
        checkersRow_1.className = 'rtc-checkers--board-row';
        checkersRow_1.classList.add(`row-${rowCount++}`);
        checkersBoard.appendChild(checkersRow_1);

        for (let j = 1; j <= 8; j++) {
            const checkersBox = document.createElement('div');
            checkersBox.className = 'rtc-checkers--board-box';
            checkersBox.classList.add(`box-${boxCount++}`);
            if (j % 2 === 0) {
                checkersBox.classList.add('color1-box');
            } else {
                checkersBox.classList.add('color2-box');
            }
            checkersRow_1.appendChild(checkersBox);
        }

        boxCount = 1;
        const checkersRow_2 = document.createElement('div');
        checkersRow_2.className = 'rtc-checkers--board-row';
        checkersRow_2.classList.add(`row-${rowCount++}`);
        checkersBoard.appendChild(checkersRow_2);

        for (let k = 1; k <= 8; k++) {
            const checkersBox = document.createElement('div');
            checkersBox.className = 'rtc-checkers--board-box';
            checkersBox.classList.add(`box-${boxCount++}`);
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

const placeChecker = (type, position, count) => {
    let id = '';

    const piece = document.createElement('div');
    piece.className = 'rtc-checkers--board-checker';
    piece.id = id + '-' + count;

    switch (type) {
        case 'dark':
            piece.classList.add('dark_checker');
            id = 'dark';
            break;
        case 'light':
            piece.classList.add('light_checker');
            id = 'light';
            break;
        case 'dark-queen':
            piece.classList.add('dark_checker');
            piece.classList.add('queen_checker');
            id = 'dark-queen';
            break;
        case 'light-queen':
            piece.classList.add('light_checker');
            piece.classList.add('queen_checker');
            id = 'light-queen';
            break;
    }

    piece.addEventListener('click', () => console.log('selected piece: ' + piece.id));

    const boxSelector = `.row-${position[0]} > .box-${position[1]}`;
    const box = document.querySelector(boxSelector);
    box.appendChild(piece);
};

const placeInitialCheckers = (checker) => {
    let count = 1;
    const initialRowIndex = checker === 'dark' ? 1 : 6;
    const finalRowIndex = initialRowIndex + 2;

    for (let i = initialRowIndex; i <= finalRowIndex; i++) {
        for (let j = 1; j <= 4; j++) {
            let subtract = i % 2 === 1 ? 0 : 1;
            placeChecker(checker, [i, j * 2 - subtract], count);
            count++;
        }
    }
};

const checkersTemplate = (event) => {
    if (event.type === 'click') {

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
        placeInitialCheckers('dark');
        placeInitialCheckers('light');
    }
};

export default checkersTemplate;