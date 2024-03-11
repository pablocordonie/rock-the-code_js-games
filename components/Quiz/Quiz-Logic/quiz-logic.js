import shuffleAnswersArray from '../../../utils/shuffleArray';
import { delay } from '../../../utils/handleMemoryCardClick';

const questionCardBuilder = async () => {
    const answersArray = [];
    delay(500);
    const question = await fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple').then((res) => res.json()).then((res) => res.results[0]).catch(error => console.log(error));
    console.log(question);

    const questionCard = {
        question: '',
        firstAnswer: '',
        secondAnswer: '',
        thirdAnswer: '',
        fourthAnswer: ''
    };

    answersArray.push(question.correct_answer);
    for (let i = 0; i <= 2; i++) {
        answersArray.push(question.incorrect_answers[i]);
    }

    const shuffledAnswersArray = shuffleAnswersArray(answersArray);

    questionCard.question = question.question;
    questionCard.firstAnswer = shuffledAnswersArray[0];
    questionCard.secondAnswer = shuffledAnswersArray[1];
    questionCard.thirdAnswer = shuffledAnswersArray[2];
    questionCard.fourthAnswer = shuffledAnswersArray[3];

    console.log(questionCard);
    return questionCard;
}
const quizLogic = () => questionCardBuilder();

export default quizLogic;