import he from 'he';
import shuffleAnswersArray from '../../../utils/shuffleArray';

//let allCorrectAnswers = true;
let availableCards = [];
//let currentCard = {};
let questionCounter = 0;
//let score = 0;

//const MAX_SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

const questionsCardsBuilder = async () => {
    let answersArray = [];
    const questionsCards = [];
    let questionCard = {};

    const questionsArray = await fetch('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple').then((res) => res.json()).then((res) => res.results).catch(error => console.log(error));

    for (let i = 0; i <= questionsArray.length - 1; i++) {
        const questionFromArray = questionsArray[i];

        answersArray.push(questionFromArray.correct_answer);
        for (let j = 0; j <= 2; j++) {
            answersArray.push(questionFromArray.incorrect_answers[j]);
        }

        const shuffledAnswersArray = shuffleAnswersArray(answersArray);

        questionCard = {
            question: questionFromArray.question,
            firstAnswer: shuffledAnswersArray[0],
            secondAnswer: shuffledAnswersArray[1],
            thirdAnswer: shuffledAnswersArray[2],
            fourthAnswer: shuffledAnswersArray[3]
        };

        questionsCards.push(questionCard);

        answersArray = [];
        questionCard = {};
    }

    return questionsCards;
};

const getNewQuestion = (progressText, questionTitle, answersTexts) => {
    const answers = Array.from(answersTexts.children);
    questionCounter++;

    progressText.innerText = `${questionCounter} / ${MAX_QUESTIONS}`;

    questionTitle.innerText = he.decode(availableCards[0].question);

    answers[0].firstChild.innerText = he.decode(availableCards[0].firstAnswer);
    answers[1].firstChild.innerText = he.decode(availableCards[0].secondAnswer);
    answers[2].firstChild.innerText = he.decode(availableCards[0].thirdAnswer);
    answers[3].firstChild.innerText = he.decode(availableCards[0].fourthAnswer);
};

const quizLogic = async (progressText, questionTitle, answersTexts) => {
    availableCards = await questionsCardsBuilder();

    if (availableCards) {
        getNewQuestion(progressText, questionTitle, answersTexts);
    }
};

export default quizLogic;