const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 5;
console.log(highScores)

finalScore.innerText = mostRecentScore;

//Setam butonul sa fie activ doar atunci cand in campul username exista o valoare,
//daca nu este nici o valuare atunci butonul este dezactivat si nu poate sa fie click - uit
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;

})
saveHighScore = e => {
    console.log(`clicked the save button!`)
    e.preventDefault();

    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    //console.log(highScores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html");
}