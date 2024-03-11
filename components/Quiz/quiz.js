import './quiz.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import quizLogic from './Quiz-Logic/quiz-logic';

const quizCardTemplate = () => {

    const quizCard = document.createElement('div');
    quizCard.className = 'rtc-quiz-card';

    const quizQuestion = document.createElement('h3');
    quizQuestion.className = 'rtc-quiz-card-question';
    quizQuestion.id = 'question';
    quizQuestion.innerText = 'What is the answer to this question?';
    quizCard.appendChild(quizQuestion);

    for (let i = 0; i <= 3; i++) {
        const quizAnswerContainer = document.createElement('div');
        quizAnswerContainer.className = 'rtc-quiz-answer';
        quizAnswerContainer.id = `answer_${i + 1}`;

        const quizAnswerText = document.createElement('p');
        quizAnswerText.className = 'rtc-quiz-answer_text';
        quizAnswerText.id = 'answer';
        quizAnswerText.setAttribute('data-number', `${i + 1}`);
        quizAnswerText.innerText = `Answer ${i + 1}`;

        quizAnswerContainer.appendChild(quizAnswerText);
        quizCard.appendChild(quizAnswerContainer);
    }

    return quizCard;
};

const quizTestTemplate = (event) => {

    mainMenuCleaner('quiz');

    const quizMain = document.querySelector('.rtc-quiz');

    const quizGame = document.createElement('div');
    quizGame.className = 'rtc-quiz-game';
    quizGame.classList.add('test');

    const quizHudItem_1 = document.createElement('div');
    quizHudItem_1.className = 'rtc-quiz-hud_item';

    const quizHudPrefix_1 = document.createElement('h3');
    quizHudPrefix_1.className = 'rtc-quiz-hud_item-prefix';
    quizHudPrefix_1.innerText = 'Questions';

    const quizHudProgress = document.createElement('p');
    quizHudProgress.className = 'rtc-quiz-hud_item-progress';
    quizHudProgress.id = 'questions-progress';
    quizHudProgress.innerText = '1 / 10';

    const quizHudItem_2 = document.createElement('div');
    quizHudItem_2.className = 'rtc-quiz-hud_item';

    const quizHudPrefix_2 = document.createElement('h3');
    quizHudPrefix_2.className = 'rtc-quiz-hud_item-prefix';
    quizHudPrefix_2.innerText = 'Total Score';

    const quizScore = document.createElement('p');
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
    quizLogic();
};

const quizTemplate = (event) => {
    if (event.type === 'click') {
        mainMenuCleaner('quiz');

        const quizMain = document.querySelector('.rtc-quiz');

        const quizGame = document.createElement('div');
        quizGame.className = 'rtc-quiz-game';

        const quizGameDescription = document.createElement('h2');
        quizGameDescription.className = 'rtc-quiz-description';
        quizGameDescription.innerText = 'It is time for a Quiz!';

        const quizPlayButton = document.createElement('button');
        quizPlayButton.className = 'rtc-quiz-play_button';
        quizPlayButton.innerText = 'Go!';
        quizPlayButton.addEventListener('click', quizTestTemplate);

        quizGame.appendChild(quizGameDescription);
        quizGame.appendChild(quizPlayButton);
        quizMain.appendChild(quizGame);
    }
};

export default quizTemplate;