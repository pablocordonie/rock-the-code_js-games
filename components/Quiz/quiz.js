import './quiz.css'
import { createButton, createContainer, createText, createTitle } from '../Templates/templates';
import { createAnswer, createHudState, createQuestion } from './Templates/quizTemplates';
import mainContentCleaner from '../../utils/mainContentCleaner';
import quizLogic, { resetQuizGame } from './Logic/quizLogic';

const quizTestTemplate = (event) => {

    mainContentCleaner('quiz');

    const quizMain = document.querySelector('.rtc-quiz');

    const quizGame = createContainer('div', 'rtc-quiz-game test');

    const quizReset = createButton('rtc-quiz-reset', 'Reset', resetQuizGame);

    const quizHudItem_1 = createContainer('div', 'rtc-quiz-hud_item');

    const quizHudPrefix_1 = createTitle('h3', 'rtc-quiz-hud_item-prefix', 'Question');

    const quizHudProgress = createHudState('rtc-quiz-hud_item-progress', 'progress', '');

    const quizCard = createContainer('div', 'rtc-quiz-card');

    const quizQuestion = createQuestion('rtc-quiz-card-question', 'question', '-');

    const quizAnswersContainer = createContainer('div', 'rtc-quiz-card-answers');

    for (let i = 0; i <= 3; i++) {
        const quizAnswer = createAnswer('rtc-quiz-card-answer', 'answer');
        const quizAnswerText = createText('rtc-quiz-card-answer_text', '-');

        quizAnswer.appendChild(quizAnswerText);
        quizAnswersContainer.appendChild(quizAnswer);
    }

    const quizHudItem_2 = createContainer('div', 'rtc-quiz-hud_item');

    const quizHudPrefix_2 = createTitle('h3', 'rtc-quiz-hud_item-prefix', 'Score');

    const quizScore = createHudState('rtc-quiz-hud_item-score', 'score', '0');

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
    quizMain.appendChild(quizReset);
    quizLogic(quizHudProgress, quizQuestion, quizAnswersContainer, quizScore);
};

const quizTemplate = (event) => {
    mainContentCleaner('quiz');

    const quizMain = document.querySelector('.rtc-quiz');

    const quizGame = createContainer('div', 'rtc-quiz-game');

    const quizGameDescription = createTitle('h2', 'rtc-quiz-description', 'Are you ready for a Quiz?');

    const quizPlayButton = createButton('rtc-quiz-play_button', 'Go!', quizTestTemplate);

    quizGame.appendChild(quizGameDescription);
    quizGame.appendChild(quizPlayButton);
    quizMain.appendChild(quizGame);
};

export default quizTemplate;