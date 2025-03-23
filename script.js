console.log("hello")
function getComputerChoice(){
    let choices=["ROCK","PAPER","SCISSOR"]
    return choices[Math.floor(Math.random() * choices.length)]
}
console.log(getComputerChoice())
function getHumanChoice(){
    let choice = prompt("ROCK,PAPER OR SCISSOR!!!")
    return choice
}
console.log(getHumanChoice())
let humanScore = 0
let computerScore = 0
function playRound(humanChoice,computerChoice){
    if(humanChoice.toUpperCase() === "ROCK" && computerChoice === "PAPER") {
        computerScore++
        console.log("You lose! Paper beats Rock"); 
    }
    else if(humanChoice.toUpperCase() === "ROCK" && computerChoice === "SCISSOR") {
        humanScore++
        console.log("You win! Rock beats Scissor");
    }
    else if(humanChoice.toUpperCase() === "PAPER" && computerChoice === "ROCK") {
        humanScore++
        console.log("You win! Paper beats Rock");
    }
    else if(humanChoice.toUpperCase() === "PAPER" && computerChoice === "SCISSOR") {
        computerScore++
        console.log("You lose! Scissor beats paper");
    }
    else if(humanChoice.toUpperCase() === "SCISSOR" && computerChoice === "ROCK") {
        computerScore++
        console.log("You lose! Rock beats Scissor");
    }
    else if(humanChoice.toUpperCase() === "SCISSOR" && computerChoice === "PAPER") {
        humanScore++
        console.log("You win! Scissor beats Paper");
    }
    else{
        console.log("Draw");
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
console.log(humanScore)
console.log(computerScore)
