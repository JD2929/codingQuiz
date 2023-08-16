//Retrieving the elements from the HTML

var questionContainer = document.querySelector('.questionContainer')
var answerArea = document.querySelector('.allbuttons')
var startContainer = document.querySelector('.startContainer')
var startbtn = document.querySelector("#startbtn")
var timeEl = document.querySelector(".time")
var questionTitle = document.querySelector("#questionTitle")
var nameContainer = document.querySelector(".nameContainer")

var quizLengthSeconds = 4;
var current = 0;
var secondsLeft = quizLengthSeconds;
var timerInterval = null;

function updateQuiz() {
    if (current === questions.length) {
        completeQuiz()
    }

    answerArea.innerHTML = ""
    questionTitle.textContent = questions[current].question;

    for (let i = 0; i < questions[current].answers.length; i++) {
        var btn = document.createElement("button")
        btn.setAttribute("class", "answerbtn")
        btn.textContent = questions[current].answers[i]
        answerArea.append(btn)
    }
   
}

function setTime() {
    secondsLeft = quizLengthSeconds
    timeEl.textContent = secondsLeft + "seconds left"

    timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + "seconds left"
  
      if(secondsLeft === 0) {
        completeQuiz()
      }
  
    }, 1000);
  }


function checkAnswer(answer) {
    if (answer === questions[current].correct) {
        current++
        updateQuiz()

    } else {
        current++
        updateQuiz()
    }
}
//TODO: add timeElasped ending
function completeQuiz() {
    questionContainer.style.display = "none";
    clearInterval(timerInterval);
    nameContainer.style.display = "block";
}


startbtn.addEventListener("click", () => {
    startContainer.classList.add("hide");
    questionContainer.classList.replace("hide", "show");
    updateQuiz();
    setTime();
    
})

answerArea.addEventListener("click", () => {
    var btnclick = this.event.target.textContent;
    checkAnswer(btnclick);
  

})

