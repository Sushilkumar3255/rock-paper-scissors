let playerPoints = 0;
let computerPoints = 0;
const choices = ["Rock", "Paper", "Scissors"];

// Here we taking the choice of computer
const getComputerChoice = () => choices[Math.floor(Math.random()*choices.length)];

// Here we are Playing a round of game between Player and Computer
const playRound = (playerSelection, computerSelection) => {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    switch(playerChoice){
        case 'rock':
            switch(computerChoice){
                case 'paper':
                    return "Computer";
                case 'scissors':
                    return "Player";
                default:
                    return "Tie";
            }
        case 'paper':
            switch(computerChoice){
                case 'scissors':
                    return "Computer";
                case 'rock':
                    return "Player";
                default:
                    return "Tie";
            }
        case 'scissors':
            switch(computerChoice){
                case 'rock':
                    return "Computer";
                case 'paper':
                    return "Player";
                default:
                    return "Tie";
            }
        default:
            return "Invalid Choice";
    }
}

// This will print the result of a round
const printResult = (result, playerSelection, computerSelection) => {
    switch(result){
        case "Player":
            playerPoints++;
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            break;
        case "Computer":
            computerPoints++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            break;
        default:
            console.log("Invalid Choice");
    }
}

// This is the main game function which takes the choices of player and computer and finds the winner
const game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice: ");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        printResult(result, playerSelection, computerSelection);
    }

    if(playerPoints > computerPoints){
        alert("Player is the Winner of this Game")
    }
    else if (playerPoints < computerPoints){
        alert("Computer is the Winner of this Game")
    }
    else {
        alert("It's a Tie!")
    }
}

// Calling of game function
game();
