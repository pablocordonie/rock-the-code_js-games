export const createAnswer = (className, id) => {
    const quizAnswer = document.createElement('div');
    quizAnswer.className = className;
    quizAnswer.id = id;
    return quizAnswer;
};

export const createHudState = (className, id, text) => {
    const quizHudState = document.createElement('p');
    quizHudState.className = className;
    quizHudState.id = id;
    quizHudState.innerText = text;
    return quizHudState;
};

export const createEndgameForm = (scoreText) => {
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
};

export const createEndgameRanking = () => {
    const mainContent = document.querySelector('#app > main');
    mainContent.innerHTML = `
        <div class="rtc-quiz-endgame-ranking">
            <h2 class="rtc-quiz-endgame-ranking_title">Ranking</h2>
            <div class="rtc-quiz-endgame-ranking_scores"></div>
            <h3 class="rtc-quiz-endgame-ranking_message">Thanks for Playing! 😃️</h3>
        </div>
    `;
    return mainContent;
};

export const createQuestion = (className, id, text) => {
    const quizQuestion = document.createElement('h3');
    quizQuestion.className = className;
    quizQuestion.id = id;
    quizQuestion.innerText = text;
    return quizQuestion;
};

export const createScoresContainer = (highScore) => {
    const scoresContainer = document.querySelector('.rtc-quiz-endgame-ranking_scores');
    scoresContainer.innerHTML += `
        <div class="rtc-quiz-endgame-ranking_scores-score">
            <h3 class="rtc-quiz-endgame-ranking_scores-score-username">${highScore.name}</h3>
            <h3 class="rtc-quiz-endgame-ranking_scores-score-points">${highScore.score}</h3>
        </div>
    `;
    return scoresContainer;
};