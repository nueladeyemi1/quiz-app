const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');


const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

// console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = punch => {
    // console.log('Save Button was clicked');
    punch.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    highScores.sort((min_value, max_value) => max_value.score - min_value.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    // console.log(highScores);
    window.location.assign('/');
};
