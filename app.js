/* const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
 */

const p1button = document.querySelector("#p1button");
const p2button = document.querySelector("#p2button");
const reset = document.querySelector("#reset");

const winningScore = document.querySelector("#winningscore");
const p1Score = document.querySelector("#p1score");
const p2Score = document.querySelector("#p2score");

let score1 = 0;
let score2 = 0;
let winningScoreValue = 3;

p1button.addEventListener('click', function () {
    score1 += 1;
    p1Score.textContent = score1;
    if (isGameOver(score1)) {
        endGame(p1Score, p2Score);
    }
});

p2button.addEventListener('click', function () {
    score2 += 1;
    p2Score.textContent = score2;
    if (isGameOver(score2)) {
        endGame(p2Score, p1Score);
    }
});

reset.addEventListener('click', resetDisplay)

winningScore.addEventListener("change", function () {
    winningScoreValue = parseInt(this.value);
    resetDisplay();

})

function isGameOver(score) {
    return (score == winningScoreValue)
}
function endGame(winningDisplay, losingDisplay) {
    winningDisplay.style.color = "green";
    losingDisplay.style.color = "red";
    p1button.disabled = true;
    p2button.disabled = true;
}
function resetDisplay() {
    score1 = 0;
    score2 = 0;

    p1Score.textContent = score1;
    p2Score.textContent = score2;
    p1Score.style.color = "black";
    p2Score.style.color = "black";

    p1button.disabled = false;
    p2button.disabled = false;
}