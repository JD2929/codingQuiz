var scores = JSON.parse(localStorage.getItem("scores")) || []
var clear =document.getElementById("clear")

function displayScores(){
    var ul = document.getElementById("scoreList")

    for (let i = 0; i<scores.length; i++){
        const li = document.createElement("li")
        li.textContent = `Initials: ${scores[i].initials} Scores: ${scores[i].score}`
        ul.append(li)
    }
}
displayScores ()

clear.addEventListener("click", ()=>{
    localStorage.clear()
    window.location.reload()
})