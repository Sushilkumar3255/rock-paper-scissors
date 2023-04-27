let compPoints = 0;
let playerPoints = 0;
let playerSelection = "";
let computerSelection = "";
let body = document.querySelector(".results-container");
let resultsContainer = document.createElement('div');
resultsContainer.className = "results";
body.append(resultsContainer);
let results = document.querySelector('.results');
let scoreContainer = document.querySelector('.scorecard');
let playerScore = document.createElement('div');
playerScore.className = "item";
scoreContainer.appendChild(playerScore);
let compScore = document.createElement('div');
compScore.className = "item";
scoreContainer.appendChild(compScore);
const options = ["rock", "paper", "scissors"];

// Function to get choice of Computer
const getComputerChoice = () => options[Math.floor(Math.random()*options.length)];

//Function that return who wins the round
const playRound = (playerSelection,computerSelection) => {  
    switch(playerSelection) {
        case 'rock':
            switch(computerSelection) {
                case 'paper':
                    return "Computer";
                case 'scissors':
                    return "Player";
                default:
                    return "Tie";
            }
        case 'paper':
            switch(computerSelection) {
                case 'scissors':
                    return "Computer";
                case 'rock':
                    return "Player";
                default:
                    return "Tie";
            }
        case 'scissors':
            switch(computerSelection) {
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

//Function that prints the result of a round
const printResult = (result,playerSelection,computerSelection) => {     
    switch(result) {
        case "Player":
            playerPoints += 1;
            let winMsg = document.createElement('div');
            winMsg.style.color = 'green';
            winMsg.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
            results.appendChild(winMsg);         
            break;
        case "Computer":
            compPoints += 1;
            let loseMsg = document.createElement('div');
            loseMsg.style.color = 'red';
            loseMsg.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
            results.appendChild(loseMsg); 
            break;
        case "Tie":
            let tieMsg = document.createElement('div');
            tieMsg.style.color = 'blue';
            tieMsg.textContent = `Game Tied`;
            results.appendChild(tieMsg); 
            break;
        default:
            console.log("Invalid Choice");
    }
}

// Function to check who wins the game
function checkResult(){
    playerScore.textContent = `${playerPoints}`
    compScore.textContent = `${compPoints}`
    if (compPoints == 5  || playerPoints == 5){
        if(compPoints > playerPoints){
            alert("You Lose! Better Luck Next Time");
        }
        else if (playerPoints > compPoints){
            alert("Congrats! You Won!");
        }
        else {
            alert("Game Tied");
        }
        compPoints = 0;
        playerPoints = 0;
        results.innerHTML = '';
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    let res = playRound(playerSelection, computerSelection);
    printResult(res, playerSelection, computerSelection);
    checkResult();
});

paper.addEventListener('click',() => {
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    let res = playRound(playerSelection, computerSelection);
    printResult(res,playerSelection,computerSelection);
    checkResult();
});

scissors.addEventListener('click',() => {
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    let res = playRound(playerSelection, computerSelection);
    printResult(res,playerSelection,computerSelection);
    checkResult();
});
checkResult();
