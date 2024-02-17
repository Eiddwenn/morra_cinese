var buttonStart = document.getElementById("inizia")
// console.log("buttonStart")
var choice = document.getElementById("scelta")
var player1 = document.getElementById("you")
var player2 = document.getElementById("cpu")
var paper = document.getElementById("foglia")
var scissor = document.getElementById("forbice")
var rock = document.getElementById("sasso")
var carta = document.getElementById("activeFoglia")
var forbici = document.getElementById("activeForbice")
var sasso = document.getElementById("activeSasso")
var cpuPaper = document.getElementById("cpuFoglia")
var cpuScissor = document.getElementById("cpuForbice")
var cpuRock = document.getElementById("cpuSasso")
var result = document.getElementById("risultato")
var defaultPointsPlayer1 = document.getElementById("punteggioYou")
var defaultPointsPlayer2 = document.getElementById("punteggioCpu")

buttonStart.addEventListener("click", playGame)

function playGame() {
    choice.style.display = "block"
    buttonStart.style.opacity = "0"
    carta.style.display = "none"
    forbici.style.display = "none"
    sasso.style.display = "none"
    cpuPaper.style.display = "none"
    cpuScissor.style.display = "none"
    cpuRock.style.display = "none"
    result.style.display = "none"
    result.classList.remove("persa", "vinta", "patta")
}

paper.addEventListener("click", function() {
    choice.style.display = "none"
    carta.style.display = "block"
    buttonStart.style.opacity = "1"
    cpuGame("paper")
})

scissor.addEventListener("click", function() {
    choice.style.display = "none"
    forbici.style.display = "block"
    buttonStart.style.opacity = "1"
    cpuGame("scissor")
})

rock.addEventListener("click", function() {
    choice.style.display = "none"
    sasso.style.display = "block"
    buttonStart.style.opacity = "1"
    cpuGame("rock")
})

function cpuGame(myValue) {
    // console.log(myValue)
    var pointsPlayer1 = Number(defaultPointsPlayer1.innerHTML)
    var pointsPlayer2 = Number(defaultPointsPlayer2.innerHTML)
    var randomNumber = Math.floor(Math.random()*3) + 1
    var cpuChoice
    if (randomNumber == 1){
        cpuPaper.style.display = "block"
        cpuChoice = "paper"
    }
    else if (randomNumber == 2) {
        cpuScissor.style.display = "block"
        cpuChoice = "scissor"
    }
    else {cpuRock.style.display = "block"
        cpuChoice = "rock"
    }
    if (myValue == "paper") {
        if (cpuChoice == "paper"){
            result.style.display = "block"
            result.innerHTML = "Pareggio!"
            result.classList.add("patta")
        } else if (cpuChoice == "scissor") {
            result.style.display = "block"
            result.innerHTML = "Hai perso! :("
            defaultPointsPlayer2.innerHTML = pointsPlayer2 + 1
            result.classList.add("persa")
        } else if (cpuChoice == "rock") {
            result.style.display = "block"
            result.innerHTML = "Hai vinto! :)"
            defaultPointsPlayer1.innerHTML = pointsPlayer1 + 1
            result.classList.add("vinta")
        }       
    }
    if (myValue == "scissor") {
        if (cpuChoice == "scissor"){
            result.style.display = "block"
            result.innerHTML = "Pareggio!"
            result.classList.add("patta")
        } else if (cpuChoice == "rock") {
            result.style.display = "block"
            result.innerHTML = "Hai perso! :("
            defaultPointsPlayer2.innerHTML = pointsPlayer2 + 1
            result.classList.add("persa")
        } else if (cpuChoice == "paper") {
            result.style.display = "block"
            result.innerHTML = "Hai vinto! :)"
            defaultPointsPlayer1.innerHTML = pointsPlayer1 + 1
            result.classList.add("vinta")
        }       
    }
    if (myValue == "rock") {
        if (cpuChoice == "rock"){
            result.style.display = "block"
            result.innerHTML = "Pareggio!"
            result.classList.add("patta")
        } else if (cpuChoice == "paper") {
            result.style.display = "block"
            result.innerHTML = "Hai perso! :("
            defaultPointsPlayer2.innerHTML = pointsPlayer2 + 1
            result.classList.add("persa")
        } else if (cpuChoice == "scissor") {
            result.style.display = "block"
            result.innerHTML = "Hai vinto! :)"
            defaultPointsPlayer1.innerHTML = pointsPlayer1 + 1
            result.classList.add("vinta")
        }       
    }
}


