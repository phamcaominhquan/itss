const words = [
    "light", "group", "did", "found", "miss", "these", "any",
    "something", "read", "good", "will", "young", "such",
    "book", "use", "take", "song", "much", "got", "man",
    "should", "each", "four"
];

const wordDisplay = document.getElementById("word-display");
const wordInput = document.getElementById("word-input");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const restartBtn = document.getElementById("restart-btn");

const resultBox = document.getElementById("result-box");
const resultWPM = document.getElementById("result-wpm");
const resultKeystrokes = document.getElementById("result-keystrokes");
const resultAccuracy = document.getElementById("result-accuracy");
const resultCorrect = document.getElementById("result-correct");
const resultWrong = document.getElementById("result-wrong");
const playAgainBtn = document.getElementById("play-again");

let time = 60;
let timer;
let wordsTyped = 0;
let wrongWords = 0;
let keystrokes = 0;
let started = false;

function getRandomWords() {
    let randomWords = [];
    for (let i = 0; i < 50; i++) {
        randomWords.push(words[Math.floor(Math.random() * words.length)]);
    }

    wordDisplay.innerHTML = randomWords
        .map((word, index) => `<span class="word${index === 0 ? ' active' : ''}">${word}</span>`)
        .join(" ");
}

function startTimer() {
    timer = setInterval(() => {
        time--;
        timerElement.textContent = time;
        if (time === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function endGame() {
    wordInput.disabled = true;
    resultBox.style.display = "block";

    let totalWords = wordsTyped + wrongWords;
    let accuracy = totalWords > 0 ? Math.round((wordsTyped / totalWords) * 100) : 0;
    let wpm = wordsTyped;

    resultWPM.textContent = `${wpm} WPM`;
    resultKeystrokes.textContent = `Keystrokes: ${keystrokes}`;
    resultAccuracy.textContent = `Accuracy: ${accuracy}%`;
    resultCorrect.textContent = `Correct words: ${wordsTyped}`;
    resultWrong.textContent = `Wrong words: ${wrongWords}`;
}

wordInput.addEventListener("input", () => {
    if (!started) {
        started = true;
        startTimer();
    }

    keystrokes++;

    let activeWord = document.querySelector("#word-display .active");
    if (!activeWord) return;

    let typedWord = wordInput.value.trim();

    if (activeWord.textContent.startsWith(typedWord)) {
        activeWord.classList.add("correct");
        activeWord.classList.remove("incorrect");
    } else {
        activeWord.classList.add("incorrect");
        activeWord.classList.remove("correct");
    }

    if (wordInput.value.endsWith(" ")) {
        if (typedWord === activeWord.textContent) {
            activeWord.classList.add("correct");
            wordsTyped++;
        } else {
            activeWord.classList.add("incorrect");
            wrongWords++;
        }

        activeWord.classList.remove("active");
        let next = activeWord.nextElementSibling;
        if (next) {
            next.classList.add("active");
        } else {
            endGame();
        }

        wordInput.value = "";
    }

    wpmElement.textContent = `WPM: ${wordsTyped}`;
});

restartBtn.addEventListener("click", () => {
    resetGame();
});

playAgainBtn.addEventListener("click", () => {
    resetGame();
});

function resetGame() {
    clearInterval(timer);
    time = 60;
    wordsTyped = 0;
    wrongWords = 0;
    keystrokes = 0;
    started = false;
    wordInput.disabled = false;
    wordInput.value = "";
    timerElement.textContent = time;
    wpmElement.textContent = "WPM: 0";
    resultBox.style.display = "none";
    getRandomWords();
}

getRandomWords();