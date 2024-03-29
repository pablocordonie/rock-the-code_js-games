export const mainContentCleaner = (game) => {
    const header = document.querySelector('.rtc-header');
    const mainContent = document.querySelector('#app > main');
    const headerButtons = Array.from(document.querySelectorAll('.rtc-header-games-button'));

    headerButtons.forEach(button => {
        if (button.hasAttribute('disabled')) {
            button.removeAttribute('disabled', '');
        }
    });

    const gameButton = document.querySelector(`.rtc-header-${game}`);
    gameButton.setAttribute('disabled', '');

    mainContent.innerHTML = '';
    mainContent.className = `rtc-${game}`;
    header.classList.add('open');
    return mainContent;
};

export default mainContentCleaner;