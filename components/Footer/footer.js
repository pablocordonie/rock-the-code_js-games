import './footer.css'
import { createContainer, createContainerWithInnerHTML } from '../Templates/templates';

const footerTemplate = () => {
    const app = document.querySelector('#app');

    const footer = createContainer('footer', 'rtc-footer');

    const copyright = createContainerWithInnerHTML('rtc-footer-copyright', `<p class="rtc-footer-copyright-p">Pablo Cordonié - &copy;2024 Rock{theCode}</p>`);

    footer.appendChild(copyright);
    app.appendChild(footer);
}

export default footerTemplate;