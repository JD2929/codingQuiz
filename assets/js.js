//Retrieving the elements from the HTML

var questionContainer = document.querySelector('.questionContainer')
var answerArea = document.querySelector('.allbuttons')
var startContainer = document.querySelector('.startContainer')
var startbtn = document.querySelector("#startbtn")
var timeEl = document.querySelector(".time")
var questionTitle = document.querySelector("#questionTitle")
var nameContainer = document.querySelector(".nameContainer")
var scoreCounter = document.querySelector(".scoreCounter");
var nameInput = document.querySelector("#nameInput");
var submitBtn = document.querySelector("#submitBtn");
var checker = document.getElementById("checker");

//setting global variables
var quizLengthSeconds = 10;
var current = 0;
var secondsLeft = quizLengthSeconds;
var timerInterval;
var score = 0;
var tallyBoard = [];

//Function that starts the quiz
function updateQuiz() {
    if (current === questions.length) {

        completeQuiz()
    }

    answerArea.innerHTML = ""
    questionTitle.textContent = questions[current].questions;
    scoreCounter.classList.replace("hide", "show");

    for (let i = 0; i < questions[current].answers.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("class", "answerbtn");
        btn.textContent = questions[current].answers[i];
        answerArea.append(btn);
    }

}
//Function that keeps the timer decreasing
function setTime() {
    secondsLeft = quizLengthSeconds;
    timeEl.textContent = secondsLeft + "seconds left";
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "  seconds left!";

        if (secondsLeft === 0) {
            
            completeQuiz();

        }
    }, 1000);
}

//Function that checks if the button picked is the correct answer or not
function checkAnswer(answer) {
    if (answer === questions[current].correct) {
        checker.textContent = "Correct!"
        setTimeout(() => {
            checker.textContent = ""
            score++;
            scoreCounter.innerHTML = score
            current++;
            updateQuiz();
        }, 1000)

    } else {
        checker.textContent = "Incorrect!";

        setTimeout(() => {
            checker.textContent = ""
            current++;
            secondsLeft = secondsLeft - 2;
            updateQuiz();
        }, 1000)
    }
}
//Function that runs to clear the screen when the quiz is over
function completeQuiz() {
    questionContainer.style.display = "none";
    clearInterval(timerInterval);
    timeEl.style.display = "none";
    nameContainer.style.display = "block";
}

//Event listeners follow with their specific label 
//Start button
startbtn.addEventListener("click", () => {
    startContainer.classList.add("hide");
    questionContainer.classList.replace("hide", "show");
    updateQuiz();
    setTime();

})
//Answer Buttons
answerArea.addEventListener("click", () => {
    var btnclick = this.event.target.textContent;
    checkAnswer(btnclick);


})
//Submit Initials Button
submitBtn.addEventListener("click", () => {
    var userInput = nameInput.value;

    if (userInput !== "") {
        tallyBoard = JSON.parse(localStorage.getItem("scores")) || []
        var userObj = {
            initials: userInput,
            score: score
        }
        tallyBoard.push(userObj)
        localStorage.setItem("scores", JSON.stringify(tallyBoard))
    }
    window.location.assign("scorePage.html")
})