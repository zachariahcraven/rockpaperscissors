console.log("Hello World");

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

//function returns (string) the result of the game or prompts user for new choice 
function getUserInput() {
    let input = prompt("Enter Choice");
    input = input.toLowerCase();
    if (input == "rock" || input == "scissors" || input == "paper") {
        return input;
    } else { 
        return "Invalid Input Please try again."
    }
}

//Returns a string (result of the match)
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

console.log(outcome(getUserInput(), getComputerChoice()));
