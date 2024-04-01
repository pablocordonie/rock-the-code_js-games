import './connect4.css'
import { createButton, createContainer, createTitle } from '../Templates/templates';
import { createBoardGrid } from './Templates/connect4Template';
import connect4Logic, { resetConnect4Game } from './Logic/connect4Logic';
import mainContentCleaner from '../../utils/mainContentCleaner';

const columns = 7;
const rows = 6;

let board = [];
let connect4Circle = '';

const generateBoard = (resetButton) => {
    const connect4Board = createContainer('div', 'rtc-connect4-board');

    for (let r = 0; r < rows; r++) {
        let row = [];
        const connect4Row = createBoardGrid('rtc-connect4-board-row', `row-${r + 1}`);

        connect4Board.appendChild(connect4Row);

        for (let c = 0; c < columns; c++) {
            row.push(' ');
            const connect4Box = createBoardGrid('rtc-connect4-board-box', `row-${r + 1} | box-${c + 1}`);

            connect4Circle = createBoardGrid('rtc-connect4-board-circle', `${r}-${c}`);
            connect4Circle.addEventListener('click', (event) => connect4Logic(event, connect4Circle, columns, rows, board, resetButton));

            connect4Box.appendChild(connect4Circle);
            connect4Row.appendChild(connect4Box);
        }
        board.push(row);
    }
    return connect4Board;
};

const connect4Template = (event) => {
    mainContentCleaner('connect4');

    const connect4Main = document.querySelector('.rtc-connect4');

    const connect4Game = createContainer('div', 'rtc-connect4-game');
    const connect4GameDescription = createTitle('h2', 'rtc-connect4-description', 'Red Turn');
    const connect4Reset = createButton('rtc-connect4-reset', 'Reset', (event) => resetConnect4Game(event, board, connect4Circle));

    connect4Game.appendChild(generateBoard(connect4Reset));
    connect4Main.appendChild(connect4GameDescription);
    connect4Main.appendChild(connect4Game);
    connect4Main.appendChild(connect4Reset);
};

export default connect4Template;