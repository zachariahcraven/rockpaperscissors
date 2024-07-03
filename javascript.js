console.log("Hello World");

// funtion returns one of three strings at random
function getComputerChoice() {
    let val = Math.floor(Math.random() * 3)
    switch (val) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

console.log(getComputerChoice());