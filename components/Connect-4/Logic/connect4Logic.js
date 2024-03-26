export const board = [];
const currentColumns = [5, 5, 5, 5, 5, 5, 5];
const redPlayer = 'R';
const yellowPlayer = 'Y';

let currentPlayer = redPlayer;
let gameOver = false;

const setWinner = (r, c) => {
    let winnerMessage = document.querySelector('.rtc-connect4-description');

    if (board[r][c] == redPlayer) {
        winnerMessage.innerText = 'Red Wins!';
    } else {
        winnerMessage.innerText = 'Yellow Wins!';
    }

    gameOver = true;
};

const checkWinner = (columns, rows) => {
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

const connect4Logic = (event, connect4Circle, columns, rows) => {
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
    checkWinner(columns, rows);
};

export default connect4Logic;