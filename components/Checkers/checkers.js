import './checkers.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';

let selectedBoxes = [];

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
                checkersBox.classList.add('color2-box');
            } else {
                checkersBox.classList.add('color1-box');
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
                checkersBox.classList.add('color1-box');
            } else {
                checkersBox.classList.add('color2-box');
            }
            checkersRow_2.appendChild(checkersBox);
        }
    }

    return checkersBoard;
};

const getBox = (position) => {
    const boxSelector = `.row-${position[0]} > .box-${position[1]}`;
    const box = document.querySelector(boxSelector);
    return box;
};

const toCleanSelectedBoxes = () => {
    selectedBoxes.forEach(selectedBox => selectedBox.classList.remove('selected'));
    selectedBoxes = [];
};

const toMoveChecker = (checker, move) => {
    const actualBox = getBox(checker.position);
    const newBox = getBox(move);

    actualBox.removeChild(checker.piece);
    newBox.appendChild(checker.piece);
    checker.position = move;
};

const placeChecker = (type, position, count, checkers) => {

    // Creación de cada ficha
    const piece = document.createElement('div');
    piece.className = 'rtc-checkers--board-checker';

    switch (type) {
        case 'dark':
            piece.classList.add('dark_checker');
            piece.id = 'dark' + '-' + count;
            break;
        case 'light':
            piece.classList.add('light_checker');
            piece.id = 'light' + '-' + count;
            break;
        case 'dark-queen':
            piece.classList.add('dark_checker');
            piece.classList.add('queen_checker');
            piece.id = 'dark-queen';
            break;
        case 'light-queen':
            piece.classList.add('light_checker');
            piece.classList.add('queen_checker');
            piece.id = 'light-queen';
            break;
    }

    // Colocar pieza en el DOM
    getBox(position).appendChild(piece);

    // Modelo de cada ficha
    const checker = {
        id: '',
        position: '' + position[0] + position[1],
        type: type,
        possibleMoves: () => {
            // Si es oscura, se mueve 1 fila más
            // Si es clara, se mueve una fila menos
            // Ambos se pueden mover una columna más ó menos
            let actualRow = position[0];
            let actualColumn = position[1];

            let newRow = actualRow + 1;
            if (type === 'light') {
                newRow = actualRow - 1;
            }

            return ['' + newRow + (actualColumn + 1), '' + newRow + (actualColumn - 1)];
        },
        active: true,
        isQueen: false,
        selected: false,
        piece
    };

    // Agregar ficha a la colección
    checker.id = piece.id;
    checkers[piece.id] = checker;

    // Agregar evento de click
    piece.addEventListener('click', () => {
        const possibleMoves = checker.possibleMoves();
        toCleanSelectedBoxes();

        possibleMoves.forEach(possibleMove => {
            const selectedBox = getBox(possibleMove);
            selectedBox.classList.toggle('selected');
            selectedBoxes.push(selectedBox);
            selectedBox.addEventListener('click', () => {
                toCleanSelectedBoxes();
                toMoveChecker(checker, possibleMove);
            });
        });
    });
};

const placeInitialCheckers = (checkerColor) => {
    // Devolver un objeto con las 12 fichas
    const checkers = {};
    let count = 1;
    const initialRowIndex = checkerColor === 'dark' ? 1 : 6;
    const finalRowIndex = initialRowIndex + 2;

    for (let i = initialRowIndex; i <= finalRowIndex; i++) {
        for (let j = 1; j <= 4; j++) {
            let subtract = i % 2 === 1 ? 0 : 1;
            placeChecker(checkerColor, [i, j * 2 - subtract], count, checkers);
            count++;
        }
    }

    return checkers;
};

const availableBoxesToMove = () => {
    const boardLimits = 8;
    const boxes = [];

    for (let rowIndex = 1; rowIndex <= boardLimits; rowIndex++) {
        for (let columnIndex = 1; columnIndex <= boardLimits; columnIndex++) {
            if (rowIndex % 2 === 1 && columnIndex % 2 === 0 || columnIndex % 2 === 1 && rowIndex % 2 === 0) {
                boxes.push('' + rowIndex + columnIndex);
            }
        }
    }

    return boxes;
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
        availableBoxesToMove();
    }
};

export default checkersTemplate;