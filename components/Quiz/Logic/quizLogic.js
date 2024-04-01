import he from 'he';
import { createEndgameForm, createEndgameRanking, createScoresContainer, renderLoader } from '../Templates/quizTemplates';
import mainContentCleaner from '../../../utils/mainContentCleaner';
import quizTemplate from '../quiz';
import shuffleAnswersArray from '../../../utils/shuffleArray';
import { delay as timer } from '../../../utils/delay';

let answersArray = [];
let acceptedAnswers = true;
let availableQuestions = [];
let correctAnswer = '';
let currentCard = {};
let unselectedCorrectAnswer = '';
let questionsArray = [];
let questionsCards = [];
let questionsCounter = 0;
let score = 0;

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

const getCardsInfo = async () => {

    await timer(3000);

    questionsArray = await fetch(`https://opentdb.com/api.php?amount=${MAX_QUESTIONS}&difficulty=easy&type=multiple`).then((res) => res.json()).then((res) => res.results).catch(error => console.log(error));

    for (let i = 0; i < questionsArray.length; i++) {

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
    }

    return questionsCards;
};

const saveHighScore = (event, resetButton) => {
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

    createEndgameRanking(resetButton);

    highScores.forEach(highScore => createScoresContainer(highScore));
};

const getNewQuestion = (progressText, questionTitle, answers, scoreText, resetButton) => {
    if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('lastScore', score);
        mainContentCleaner('quiz');

        createEndgameForm(scoreText);

        const username = document.querySelector('#username');
        const saveScoreBtn = document.querySelector('#saveScoreButton');

        username.addEventListener('keyup', () => {
            saveScoreBtn.disabled = !username.value;
        });

        saveScoreBtn.addEventListener('click', (event) => saveHighScore(event, resetButton));

    } else {
        correctAnswer = he.decode(availableQuestions[0].correctAnswer);

        questionsCounter++;
        progressText.innerText = `${questionsCounter} of ${MAX_QUESTIONS}`;

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

const addListenersToAnswers = (progressText, questionTitle, answers, scoreText, resetButton) => {

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
                    await timer(3000);
                    selectedAnswer.parentElement.classList.remove(classToApply);
                } else {
                    selectedAnswer.classList.add(classToApply);
                    await timer(3000);
                    selectedAnswer.classList.remove(classToApply);
                }
            } else {
                if (selectedAnswer.localName === 'p') {
                    selectedAnswer.parentElement.classList.add(classToApply);
                    unselectedCorrectAnswer.classList.add('correct');
                    await timer(3000);
                    selectedAnswer.parentElement.classList.remove(classToApply);
                    unselectedCorrectAnswer.classList.remove('correct');
                } else {
                    selectedAnswer.classList.add(classToApply);
                    unselectedCorrectAnswer.classList.add('correct');
                    await timer(3000);
                    selectedAnswer.classList.remove(classToApply);
                    unselectedCorrectAnswer.classList.remove('correct');
                }
            }
            getNewQuestion(progressText, questionTitle, answers, scoreText, resetButton);
        });
    });
};

const incrementScore = (scorePoints, scoreText) => {
    score += scorePoints;
    scoreText.innerText = score;
};

export const resetQuizGame = (event) => {
    mainContentCleaner('quiz');

    answersArray = [];
    acceptedAnswers = true;
    availableQuestions = [];
    correctAnswer = '';
    currentCard = {};
    unselectedCorrectAnswer = '';
    questionsArray = [];
    questionsCards = [];
    questionsCounter = 0;
    score = 0;

    quizTemplate();
};

const quizLogic = async (progressText, questionTitle, answersContainer, scoreText, resetButton) => {
    questionsCounter = 0;
    score = 0;
    renderLoader();
    availableQuestions = await getCardsInfo();

    const answers = Array.from(answersContainer.children);

    getNewQuestion(progressText, questionTitle, answers, scoreText);
    addListenersToAnswers(progressText, questionTitle, answers, scoreText, resetButton);
};

export default quizLogic;