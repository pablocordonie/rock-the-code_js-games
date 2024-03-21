import he from 'he';
import { mainMenuCleaner as cleaner } from '../../../utils/mainMenuCleaner';
import shuffleAnswersArray from '../../../utils/shuffleArray';
import { delay as timer } from '../../../utils/delay';

let acceptedAnswers = true;
let availableQuestions = [];
let correctAnswer = '';
let unselectedCorrectAnswer = '';
let questionsCounter = 0;
let score = 0;

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 3;

const getCardsInfo = async () => {
    let answersArray = [];
    const questionsCards = [];
    let currentCard = {};

    const questionsArray = await fetch(`https://opentdb.com/api.php?amount=${MAX_QUESTIONS}&difficulty=easy&type=multiple`).then((res) => res.json()).then((res) => res.results).catch(error => console.log(error));

    for (let i = 0; i < MAX_QUESTIONS; i++) {

        answersArray.push(questionsArray[i].correct_answer);
        for (let j = 0; j <= 2; j++) {
            answersArray.push(questionsArray[i].incorrect_answers[j]);
        }

        const shuffledAnswersArray = shuffleAnswersArray(answersArray);

        currentCard = {
            question: questionsArray[i].question,
            correctAnswer: questionsArray[i].correct_answer,
            firstAnswer: shuffledAnswersArray[0],
            secondAnswer: shuffledAnswersArray[1],
            thirdAnswer: shuffledAnswersArray[2],
            fourthAnswer: shuffledAnswersArray[3]
        };

        questionsCards.push(currentCard);

        answersArray = [];
        currentCard = {};
    }

    return questionsCards;
};

const saveHighScore = (event) => {
    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    const MAX_HIGH_SCORES = 5;
    const mostRecentScore = localStorage.getItem('lastScore');
    const username = document.querySelector('#username');

    event.preventDefault();

    const newScore = {
        name: username.value,
        score: mostRecentScore,
    };

    highScores.push(newScore);

    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(MAX_HIGH_SCORES, 1);

    localStorage.setItem('highScores', JSON.stringify(highScores));

    const mainContent = document.querySelector('#app > main');
    mainContent.innerHTML = `
        <div class="rtc-quiz-endgame-ranking">
            <h2 class="rtc-quiz-endgame-ranking_title">Ranking</h2>
            <div class="rtc-quiz-endgame-ranking_scores"></div>
            <h3 class="rtc-quiz-endgame-ranking_message">Thanks for Playing! 😃️</h3>
        </div>
    `;

    highScores.forEach(highScore => {
        const scoresContainer = document.querySelector('.rtc-quiz-endgame-ranking_scores');
        scoresContainer.innerHTML += `
            <div class="rtc-quiz-endgame-ranking_scores-score">
                <h3 class="rtc-quiz-endgame-ranking_scores-score-username">${highScore.name}</h3>
                <h3 class="rtc-quiz-endgame-ranking_scores-score-points">${highScore.score}</h3>
            </div>
        `;
    });
};

const getNewQuestion = (progressText, questionTitle, answers, scoreText) => {
    if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('lastScore', score);
        console.log('No hay más preguntas, señoría!');
        cleaner('quiz');

        const mainContent = document.querySelector('#app > main');
        mainContent.innerHTML = `
            <div class="rtc-quiz-endgame">
                <h2 class="rtc-quiz-endgame-final_score" id="finalScore">${scoreText.innerText}</h2>
                <form class="rtc-quiz-endgame-form">
                    <h3 class="rtc-quiz-endgame-form-title">
                        Enter your name below to save your score!
                    </h3>
                    <input class="rtc-quiz-endgame-form-input" id="username" type="text" name="" placeholder="Enter your name"
                    >
                    <button class="rtc-quiz-endgame-form-button" id="saveScoreButton" type="button" disabled>
                        Save
                    </button>
                </form>
            </div>
        `;

        const username = document.querySelector('#username');
        const saveScoreBtn = document.querySelector('#saveScoreButton');

        username.addEventListener('keyup', () => {
            saveScoreBtn.disabled = !username.value;
        });

        saveScoreBtn.addEventListener('click', saveHighScore);

    } else {
        correctAnswer = he.decode(availableQuestions[0].correctAnswer);

        questionsCounter++;
        progressText.innerText = `${questionsCounter} / ${MAX_QUESTIONS}`;

        questionTitle.innerText = he.decode(availableQuestions[0].question);

        answers[0].firstChild.innerText = he.decode(availableQuestions[0].firstAnswer);
        answers[1].firstChild.innerText = he.decode(availableQuestions[0].secondAnswer);
        answers[2].firstChild.innerText = he.decode(availableQuestions[0].thirdAnswer);
        answers[3].firstChild.innerText = he.decode(availableQuestions[0].fourthAnswer);

        scoreText.innerText = score;

        unselectedCorrectAnswer = answers.find(answer => answer.firstChild.innerText === correctAnswer);

        availableQuestions.splice(0, 1);
        acceptedAnswers = true;
    };
};

const addListenersToAnswers = (progressText, questionTitle, answers, scoreText) => {

    answers.forEach(answer => {
        answer.addEventListener('click', async (event) => {
            if (!acceptedAnswers) {
                return;
            }

            acceptedAnswers = false;
            const selectedAnswer = event.target;

            let classToApply = selectedAnswer.innerText === correctAnswer ? 'correct' : 'incorrect';

            if (classToApply === 'correct') {
                incrementScore(SCORE_POINTS, scoreText);
                if (selectedAnswer.localName === 'p') {
                    selectedAnswer.parentElement.classList.add(classToApply);
                    await timer(5000);
                    selectedAnswer.parentElement.classList.remove(classToApply);
                } else {
                    selectedAnswer.classList.add(classToApply);
                    await timer(5000);
                    selectedAnswer.classList.remove(classToApply);
                }
            } else {
                if (selectedAnswer.localName === 'p') {
                    selectedAnswer.parentElement.classList.add(classToApply);
                    unselectedCorrectAnswer.classList.add('correct');
                    await timer(5000);
                    selectedAnswer.parentElement.classList.remove(classToApply);
                    unselectedCorrectAnswer.classList.remove('correct');
                } else {
                    selectedAnswer.classList.add(classToApply);
                    unselectedCorrectAnswer.classList.add('correct');
                    await timer(5000);
                    selectedAnswer.classList.remove(classToApply);
                    unselectedCorrectAnswer.classList.remove('correct');
                }
            }
            getNewQuestion(progressText, questionTitle, answers, scoreText);
        });
    });
};

const incrementScore = (scorePoints, scoreText) => {
    score += scorePoints;
    scoreText.innerText = score;
};

const quizLogic = async (progressText, questionTitle, answersContainer, scoreText) => {
    questionsCounter = 0;
    score = 0;
    availableQuestions = await getCardsInfo();

    const answers = Array.from(answersContainer.children);

    getNewQuestion(progressText, questionTitle, answers, scoreText);
    addListenersToAnswers(progressText, questionTitle, answers, scoreText);
};

export default quizLogic;