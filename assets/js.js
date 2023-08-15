//Retrieving the elements from the HTML

var questionContainer = document.querySelector('.questionContainer')
var answerArea = document.querySelector('.allbuttons')
var startContainer = document.querySelector('.startContainer')
var startbtn = document.querySelector("#startbtn")
var questionTitle = document.querySelector("#questionTitle")

var current = 0


function startQuiz(){
    if (current===questions.length){
        endQuiz()
    }
    
    answerArea.innerHTML = ""
questionTitle.textContent= questions[current].question;
 
for(let i = 0; i< questions[current].answers.length; i++){
    var btn = document.createElement("button")
    btn.setAttribute("class","answerbtn")
    btn.textContent = questions[current].answers[i]
    answerArea.append(btn)
}
}

function checkAnswer(answer){
if (answer===questions[current].correct){
    current ++
    startQuiz()

}else {
    current ++
    startQuiz()
}
} 

function endQuiz(){
    questionContainer.style.display="none"
}
  startbtn.addEventListener("click", ()=>{
  startContainer.classList.add("hide");
  questionContainer.classList.replace("hide","show");
  startQuiz();
  })

  answerArea.addEventListener("click",()=>{
    var btnclick = this.event.target.textContent
    checkAnswer(btnclick)
    
  })

