import './connect4.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';

const redPlayer = 'R';
const yellowPlayer = 'Y';
let currentPlayer = redPlayer;

let gameOver = false;
const board = [];

const rows = 6;
const columns = 7;
const currentColumns = [5, 5, 5, 5, 5, 5, 5];

let connect4Circle;

const setWinner = (r, c) => {
    let winnerMessage = document.querySelector('.rtc-connect4-description');

    if (board[r][c] == redPlayer) {
        winnerMessage.innerText = 'Red Wins!';
    } else {
        winnerMessage.innerText = 'Yellow Wins!';
    }

    gameOver = true;
};


const checkWinner = () => {
    // horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== ' ' &&
                board[r][c] === board[r][c + 1] &&
                board[r][c + 1] === board[r][c + 2] &&
                board[r][c + 2] === board[r][c + 3]) {
                setWinner(r, c);
                return;
            }
        }
    }
    // vertical
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r + 1][c] && board[r + 1][c] == board[r + 2][c] && board[r + 2][c] == board[r + 3][c]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
    // anti diagonal
    for (let r = 0; r < rows - 3; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r + 1][c + 1] && board[r + 1][c + 1] == board[r + 2][c + 2] && board[r + 2][c + 2] == board[r + 3][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }

    // diagonal
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] != ' ') {
                if (board[r][c] == board[r - 1][c + 1] && board[r - 1][c + 1] == board[r - 2][c + 2] && board[r - 2][c + 2] == board[r - 3][c + 3]) {
                    setWinner(r, c);
                    return;
                }
            }
        }
    }
};

const connect4Logic = (event) => {
    const descriptionGame = document.querySelector('.rtc-connect4-description');

    if (gameOver) {
        return;
    }

    let coords = event.target.id.split('-');
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    r = currentColumns[c];

    if (r < 0) {
        return;
    }

    board[r][c] = currentPlayer;
    connect4Circle = document.getElementById(`${r}-${c}`);

    if (currentPlayer == redPlayer) {
        connect4Circle.classList.add('rtc-connect4--board-red_piece');

        currentPlayer = yellowPlayer;
        descriptionGame.innerText = 'Yellow Turn';
    } else {
        connect4Circle.classList.add('rtc-connect4--board-yellow_piece');

        currentPlayer = redPlayer;
        descriptionGame.innerText = 'Red Turn';
    }

    r -= 1; // Updates the row height for the column after setting the piece inside the column
    currentColumns[c] = r; // Updates the array currentColumns
    checkWinner();
};

const generateBoard = () => {
    const connect4Board = document.createElement('div');
    connect4Board.className = 'rtc-connect4--board';

    for (let r = 0; r < rows; r++) {
        let row = [];
        const connect4Row = document.createElement('div');
        connect4Row.className = 'rtc-connect4--board-row';
        connect4Row.id = `row-${r + 1}`;

        connect4Board.appendChild(connect4Row);

        for (let c = 0; c < columns; c++) {
            row.push(' ');
            const connect4Box = document.createElement('div');
            connect4Box.className = 'rtc-connect4--board-box';
            connect4Box.id = `row-${r + 1} | box-${c + 1}`;

            connect4Circle = document.createElement('div');
            connect4Circle.className = 'rtc-connect4--board-circle';
            connect4Circle.id = `${r}-${c}`;
            connect4Circle.addEventListener('click', connect4Logic);

            connect4Box.appendChild(connect4Circle);
            connect4Row.appendChild(connect4Box);
        }
        board.push(row);
    }
    return connect4Board;
};

const connect4Template = (event) => {
    if (event.type === 'click') {
        mainMenuCleaner('connect4');

        const connect4Main = document.querySelector('.rtc-connect4');

        const connect4Game = document.createElement('div');
        connect4Game.className = 'rtc-connect4-game';

        const connect4GameDescription = document.createElement('h2');
        connect4GameDescription.className = 'rtc-connect4-description';
        connect4GameDescription.innerText = 'Red Turn';

        connect4Game.appendChild(generateBoard());
        connect4Main.appendChild(connect4GameDescription);
        connect4Main.appendChild(connect4Game);
    }
};

export default connect4Template;