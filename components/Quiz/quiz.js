import './quiz.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';

const quizCardTemplate = () => {

    const quizCard = document.createElement('div');
    quizCard.className = 'rtc-quiz-card';

    const quizQuestion = document.createElement('h3');
    quizQuestion.className = 'rtc-quiz-card-question';
    quizQuestion.id = 'question';
    quizQuestion.innerText = '¿Cuál es la respuesta a esta pregunta?';
    quizCard.appendChild(quizQuestion);

    for (let i = 0; i <= 3; i++) {
        const quizAnswerContainer = document.createElement('div');
        quizAnswerContainer.className = 'rtc-quiz-answer';
        quizAnswerContainer.id = `answer_${i + 1}`;

        const quizAnswerText = document.createElement('p');
        quizAnswerText.className = 'rtc-quiz-answer_text';
        quizAnswerText.setAttribute('data-number', `${i + 1}`);
        quizAnswerText.innerText = `Answer ${i + 1}`;

        quizAnswerContainer.appendChild(quizAnswerText);
        quizCard.appendChild(quizAnswerContainer);
    }

    return quizCard;
};

const quizTestTemplate = (event) => {

    mainMenuCleaner('quiz');
    console.log(event);

    const quizMain = document.querySelector('.rtc-quiz');

    const quizGame = document.createElement('div');
    quizGame.className = 'rtc-quiz-game';
    quizGame.classList.add('test');

    const quizHudItem_1 = document.createElement('div');
    quizHudItem_1.className = 'rtc-quiz-hud_item';

    const quizHudPrefix_1 = document.createElement('p');
    quizHudPrefix_1.className = 'rtc-quiz-hud_item-prefix';
    quizHudPrefix_1.id = 'progress-text';
    quizHudPrefix_1.innerText = 'Questions';

    const quizHudProgress = document.createElement('div');
    quizHudProgress.className = 'rtc-quiz-hud_item-progress';
    quizHudProgress.id = 'progress-bar';
    quizHudProgress.innerText = '1 / 10';

    const quizHudItem_2 = document.createElement('div');
    quizHudItem_2.className = 'rtc-quiz-hud_item';

    const quizHudPrefix_2 = document.createElement('p');
    quizHudPrefix_2.className = 'rtc-quiz-hud_item-prefix';
    quizHudPrefix_2.innerText = 'Puntos';

    const quizScore = document.createElement('h3');
    quizScore.className = 'rtc-quiz-hud_item-score';
    quizScore.id = 'score';
    quizScore.innerText = '0';

    quizHudItem_1.appendChild(quizHudPrefix_1);
    quizHudItem_1.appendChild(quizHudProgress);

    quizHudItem_2.appendChild(quizHudPrefix_2);
    quizHudItem_2.appendChild(quizScore);

    quizGame.appendChild(quizHudItem_1);
    quizGame.appendChild(quizCardTemplate());
    quizGame.appendChild(quizHudItem_2);

    quizMain.appendChild(quizGame);

};

const quizTemplate = (event) => {
    if (event.type === 'click') {
        mainMenuCleaner('quiz');

        const quizMain = document.querySelector('.rtc-quiz');

        const quizGame = document.createElement('div');
        quizGame.className = 'rtc-quiz-game';

        const quizGameDescription = document.createElement('h2');
        quizGameDescription.className = 'rtc-quiz-description';
        quizGameDescription.innerText = 'Acierta las 10 preguntas!';

        const quizPlayButton = document.createElement('button');
        quizPlayButton.className = 'rtc-quiz-play_button';
        quizPlayButton.innerText = 'Empezar';
        quizPlayButton.addEventListener('click', quizTestTemplate);

        quizGame.appendChild(quizGameDescription);
        quizGame.appendChild(quizPlayButton);
        quizMain.appendChild(quizGame);
    }
};

export default quizTemplate;