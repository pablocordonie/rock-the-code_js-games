export const mainMenuCleaner = (game) => {
    const header = document.querySelector('.rtc-header');
    const mainContent = document.querySelector('#app > main');
    const headerButtons = Array.from(document.querySelectorAll('.rtc-header-games-button'));

    headerButtons.forEach(button => {
        if (button.hasAttribute('disabled')) {
            button.removeAttribute('disabled', '');
        }
    });

    const connect4Button = document.querySelector(`.rtc-header-${game}`);
    connect4Button.setAttribute('disabled', '');

    mainContent.innerHTML = '';
    mainContent.className = `rtc-${game}`;
    header.classList.add('open');
    return mainContent;
};

export default mainMenuCleaner;