//retrieving from localStorage and parsing the array back into a string

var scores = JSON.parse(localStorage.getItem("scores")) || []
var clear =document.getElementById("clear")
//Creating the Score Board List
function displayScores(){
    var ul = document.getElementById("scoreList")

    for (let i = 0; i<scores.length; i++){
        const li = document.createElement("li")
        li.textContent = `Initials: ${scores[i].initials} Scores: ${scores[i].score}`
        ul.append(li)
    }
}
displayScores ()

//Clearing the scoreboard function for the clear button

clear.addEventListener("click", ()=>{
    localStorage.clear()
    window.location.reload()
})