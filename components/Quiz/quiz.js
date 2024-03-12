import './quiz.css'
import mainMenuCleaner from '../../utils/mainMenuCleaner';
import quizLogic from './Quiz-Logic/quiz-logic';

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
    quizHudProgress.innerText = ' / 10';

    const quizCard = document.createElement('div');
    quizCard.className = 'rtc-quiz-card';

    const quizQuestion = document.createElement('h3');
    quizQuestion.className = 'rtc-quiz-card-question';
    quizQuestion.id = 'question';
    quizQuestion.innerText = '-';

    const quizAnswersContainer = document.createElement('div');
    quizAnswersContainer.className = 'rtc-quiz-card-answers';

    for (let i = 0; i <= 3; i++) {

        const quizAnswer = document.createElement('div');
        quizAnswer.className = 'rtc-quiz-card-answer';

        const quizAnswerText = document.createElement('p');
        quizAnswerText.className = 'rtc-quiz-answer_text';
        quizAnswerText.id = 'answer';
        quizAnswerText.setAttribute('data-number', `${i + 1}`);
        quizAnswerText.innerText = '-';

        quizAnswer.appendChild(quizAnswerText);
        quizAnswersContainer.appendChild(quizAnswer);
    }

    const quizHudItem_2 = document.createElement('div');
    quizHudItem_2.className = 'rtc-quiz-hud_item';

    const quizHudPrefix_2 = document.createElement('h3');
    quizHudPrefix_2.className = 'rtc-quiz-hud_item-prefix';
    quizHudPrefix_2.innerText = 'Score';

    const quizScore = document.createElement('p');
    quizScore.className = 'rtc-quiz-hud_item-score';
    quizScore.id = 'score';
    quizScore.innerText = '0';

    quizHudItem_1.appendChild(quizHudPrefix_1);
    quizHudItem_1.appendChild(quizHudProgress);

    quizCard.appendChild(quizQuestion);
    quizCard.appendChild(quizAnswersContainer);

    quizHudItem_2.appendChild(quizHudPrefix_2);
    quizHudItem_2.appendChild(quizScore);

    quizGame.appendChild(quizHudItem_1);
    quizGame.appendChild(quizCard);
    quizGame.appendChild(quizHudItem_2);

    quizMain.appendChild(quizGame);
    quizLogic(quizHudProgress, quizQuestion, quizAnswersContainer);
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