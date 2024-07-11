console.log("Hello World, This is a 5 round Rock Paper Scissors Game");

// funtion returns one of three strings at random
function getComputerChoice() {
    let val = Math.floor(Math.random() * 3)
    switch (val) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

//Function returns a string (result of the round)
function outcome(userAnwser, computerAnwser) {
    console.log(userAnwser, "vs", computerAnwser);
    if (userAnwser == computerAnwser) {
        return "tie"
    }
    switch (userAnwser) {
        case "paper":
            if (computerAnwser == "scissors") {
                return "you lose"
            }else {
                return "you won"
            }
        case "rock":
            if (computerAnwser == "paper") {
                return "you lose"
            }else {
                return "you won"
            }
        case "scissors":
            if (computerAnwser == "rock") {
                return "you lose"
            }else {
                return "you won"       
            }
    }
}

function declareWinner(yourScore, computersScore) {
    if (yourScore > computersScore) {
        alert("You Have Won the Game");
    } else if (computersScore > yourScore) {
        alert("You Have losed the Game");
    } else {
        alert("tie")
    }
    userScore = 0;
    computerScore = 0;
}
/*
Main ----------------------------
*/
var userScore = 0;
var computerScore = 0;

const div = document.querySelector("#container")
const choices = document.createElement("p");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        let computerChoice = getComputerChoice();
        let result = outcome(button.id, computerChoice); //this.id represents string rock/paper/scissors
        div.textContent = "You: " + userScore + " vs " + "Computer: " + computerScore;
        if (result == "you won") {
            userScore++;
        } else if (result == "you lose") {
            computerScore++;
        }
        div.textContent = "You: " + userScore + " vs " + "Computer: " + computerScore;
        choices.textContent = button.id + " vs " + computerChoice;
        div.appendChild(choices);
        if (userScore + computerScore == 5) {
            declareWinner(userScore, computerScore);
        }
    })
})