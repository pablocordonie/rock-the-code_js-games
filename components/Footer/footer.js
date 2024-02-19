import './footer.css'

const footerTemplate = () => {
    const app = document.querySelector('#app');

    const footer = document.createElement('footer');
    footer.className = 'rtc-footer';

    const copyright = document.createElement('div');
    copyright.className = 'rtc-footer-copyright';
    copyright.innerHTML += `
        <p class="rtc-footer-copyright-p">&copy;2024 Rock{theCode} Todos los derechos reservados</p>
    `;

    footer.appendChild(copyright);
    app.appendChild(footer);
}

export default footerTemplate;