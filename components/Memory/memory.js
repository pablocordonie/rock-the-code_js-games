import './memory.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';

const memoryTemplate = () => console.log('Rendered Memory Game Board Test');

const memorySwitch = () => {
    const memoryButton = document.querySelector('.rtc-memory');

    memoryButton.addEventListener('click', () => {
        mainMenuCleaner();
        memoryTemplate();
    });
};

export default memorySwitch;