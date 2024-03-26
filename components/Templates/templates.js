export const createButton = (className, text, eventFunction) => {
    const button = document.createElement('button');
    button.className = className;
    button.innerText = text;
    button.addEventListener('click', eventFunction);
    return button;
};

export const createContainer = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

export const createContainerWithInnerHTML = (className, innerHTML) => {
    const copyright = document.createElement('div');
    copyright.className = className;
    copyright.innerHTML += innerHTML;
    return copyright;
};

export const createImg = (className, src, alt) => {
    const img = document.createElement('img');
    img.className = className;
    img.src = src;
    img.alt = alt;
    img.setAttribute('draggable', 'false');
    return img;
};

export const createText = (className, text) => {
    const paragraph = document.createElement('p');
    paragraph.className = className;
    paragraph.innerText = text;
    return paragraph;
};

export const createTitle = (tagName, className, text) => {
    const title = document.createElement(tagName);
    title.className = className;
    title.innerText = text;
    return title;
};