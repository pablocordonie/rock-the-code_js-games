const mainMenuCleaner = (game) => {
    const header = document.querySelector('.rtc-header');
    const mainContent = document.querySelector('#app > div');

    mainContent.innerHTML = '';
    mainContent.className = `rtc-${game}`;
    header.classList.add('open');
    return mainContent;
};

export default mainMenuCleaner;