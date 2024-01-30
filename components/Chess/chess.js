import './chess.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';

const chessTemplate = () => console.log('Rendered Chess Board Test');

const chessSwitch = () => {
    const chessButton = document.querySelector('.rtc-chess');

    chessButton.addEventListener('click', () => {
        mainMenuCleaner();
        chessTemplate();
    });
};

export default chessSwitch;