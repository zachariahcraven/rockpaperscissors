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

function winner(yourScore, computersScore) {
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

const btn1 = document.querySelector("#rock");
btn1.addEventListener("click", function(e) {
    let result = outcome("rock", getComputerChoice());
    if (result == "you won") {
        userScore++;
    } else if (result == "you lose") {
        computerScore++;
    }
    if (userScore + computerScore == 5) {
        winner(userScore, computerScore);
    }
    console.log(userScore, "vs", computerScore);
});

const btn2 = document.querySelector("#paper");
btn2.addEventListener("click", function(e) {
    let result = outcome("paper", getComputerChoice());
    if (result == "you won") {
        userScore++;
    } else if (result == "you lose") {
        computerScore++;
    }
    if (userScore + computerScore == 5) {
        winner(userScore, computerScore);
    }
    console.log(userScore, "vs", computerScore);
});

const btn3 = document.querySelector("#scissors");
btn3.addEventListener("click", function(e) {
    let result = outcome("scissors", getComputerChoice());
    if (result == "you won") {
        userScore++;
    } else if (result == "you lose") {
        computerScore++;
    }
    if (userScore + computerScore == 5) {
        winner(userScore, computerScore);
    }
    console.log(userScore, "vs", computerScore);
});

