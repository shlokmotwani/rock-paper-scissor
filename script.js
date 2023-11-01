let computerSelection = "";
let playerSelection = ""; 

function getComputerChoice(){
    let choiceNum = Math.floor(Math.random() * 3);
    switch (choiceNum){
        case 0 :
            computerSelection = "ROCK";
            break;
        case 1 :
            computerSelection = "PAPER";
            break;
        case 2 :
            computerSelection = "SCISSOR";
            break;
    }
}

function play(){
    let playerSelection = prompt("Choose between Rock, Paper and Scissor!");
    playerSelection = playerSelection.toUpperCase();

    getComputerChoice();

    if ((playerSelection == "ROCK" && computerSelection == "ROCK") ||
        (playerSelection == "PAPER" && computerSelection == "PAPER") ||
        (playerSelection == "SCISSOR" && computerSelection == "SCISSOR")){

        console.log("It is a Tie!!");
        return 0;
    }
    if (playerSelection == "ROCK" && computerSelection == "PAPER"){
        console.log("PAPER beats ROCK. Computer Wins!!");
        return 2;
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSOR"){
        console.log("ROCK beats SCISSOR. Player Wins!!");
        return 1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        console.log("PAPER beats ROCK. Player Wins!!");
        return 1;
    }
    else if (playerSelection == "PAPER" && computerSelection == "SCISSOR"){
        console.log("SCISSOR beats PAPER. Computer Wins!!");
        return 2;
    }
    else if (playerSelection == "SCISSOR" && computerSelection == "ROCK"){
        console.log("ROCK beats SCISSOR. Computer Wins!!");
        return 2;
    }
    else {
        console.log("Scissor beats PAPER. Player Wins!!");
        return 1;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    let currentRound = 0;

    for(let i=0; i<5; i++){
        currentRound = play();
        if(currentRound == 1){
            playerWins++;
        }
        else if(currentRound == 2){
            computerWins++;
        }
    }
    console.log("Final Score!!");
    console.log(`Player : ${playerWins} | Computer : ${computerWins}`);
}

game();