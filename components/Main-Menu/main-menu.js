import './main-menu.css'

const mainMenuTemplate = () => {
    const main = document.querySelector('#app');
    const welcomeDiv = document.createElement('div');
    const h1 = document.createElement('h1');
    welcomeDiv.className = 'rtc-welcome';
    h1.className = 'rtc-welcome-h1';

    h1.innerText = 'Time to Play!';
    welcomeDiv.appendChild(h1);

    main.appendChild(welcomeDiv);
};

export default mainMenuTemplate;