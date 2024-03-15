import he from 'he';
import shuffleAnswersArray from '../../../utils/shuffleArray';
import { delay as timer } from '../../../utils/handleMemoryCardClick';

let allCorrectAnswers = true;
let availableQuestions = [];
let currentQuestion = {};
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

const getNewQuestion = async (progressText, questionTitle, answersContainer, scoreText) => {
    if (availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS) {
        localStorage.setItem('lastScore', score);
    };

    const answers = Array.from(answersContainer.children);
    const correctAnswer = he.decode(availableQuestions[questionsCounter].correctAnswer);

    progressText.innerText = `${questionsCounter + 1} / ${MAX_QUESTIONS}`;

    questionTitle.innerText = he.decode(availableQuestions[questionsCounter].question);

    answers[0].firstChild.innerText = he.decode(availableQuestions[questionsCounter].firstAnswer);
    answers[1].firstChild.innerText = he.decode(availableQuestions[questionsCounter].secondAnswer);
    answers[2].firstChild.innerText = he.decode(availableQuestions[questionsCounter].thirdAnswer);
    answers[3].firstChild.innerText = he.decode(availableQuestions[questionsCounter].fourthAnswer);

    scoreText.innerText = score;

    console.log(correctAnswer);
};

const quizLogic = async (progressText, questionTitle, answersContainer, scoreText) => {
    questionsCounter = 0;
    score = 0;
    availableQuestions = await getCardsInfo();

    for (let i = 0; i < availableQuestions.length; i++) {
        getNewQuestion(progressText, questionTitle, answersContainer, scoreText);
        await timer(5000);
        questionsCounter++;
    }
};

export default quizLogic;