const mainMenuCleaner = () => {
    const main = document.querySelector('#app');
    main.innerHTML = '';
    return main;
};

export default mainMenuCleaner;