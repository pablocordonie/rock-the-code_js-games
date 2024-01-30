import './trivial.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';

const trivialTemplate = () => console.log('Rendered Trivial Board Test');

const trivialSwitch = () => {
    const trivialButton = document.querySelector('.rtc-trivial');

    trivialButton.addEventListener('click', () => {
        mainMenuCleaner();
        trivialTemplate();
    });
};

export default trivialSwitch;