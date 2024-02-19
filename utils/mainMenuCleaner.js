const mainMenuCleaner = (game) => {
    const header = document.querySelector('.rtc-header');
    const mainContent = document.querySelector('#app > main');

    mainContent.innerHTML = '';
    mainContent.className = `rtc-${game}`;
    header.classList.add('open');
    return mainContent;
};

export default mainMenuCleaner;