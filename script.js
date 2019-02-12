function computerPlay() {
    count = Math.floor((Math.random() * 3) + 1);
    if (count == 1){
        return "Rock";
        console.log("Rock");
    }else if (count == 2){
        return "Paper";
        console.log("Paper");
    }else if (count == 3){
        return "Scissors";
        console.log("Scissors");
    }
}

function playRound(playerSelection, computerSelection){
    //Checks if player tied
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return 0;
    }
    //Checks if player won
    if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        return 1;
    }else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        return 1;
    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        return 1;
    }
    //Checks if player lost
     if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper"){
        return -1;
    }else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors"){
        return -1;
    }else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock"){
        return -1;
    }
}
//plays a single round of rock paper scissors
function game(playerSelect){
    var status;
    var computerSelection = computerPlay();
    status = playRound(playerSelection, computerSelection);
    if (status == 1){
        console.log("You won");
        return "Win";
    }else if (status == 0){ 
        console.log("You tied");
        return "Tie";
    }else if (status == -1){
        console.log("You lost");
        return "Lost";
    }
}
//creates a new element
const statement = document.createElement('div');

function displayResult(playerSelect) {
    var gameStats = game(playerSelect);
    //Assigns text to element based on final status of game
    if (gameStats == "Win"){
        statement.textContent = "YOU WON!";
        statement.style.color = 'white';
        statement.style.marginTop = '50px';
        statement.style.fontSize = '50px';
        statement.style.textAlign = 'center';
        document.getElementById("display-statement").appendChild(statement);
    }else if (gameStats == "Tie"){
        statement.textContent = "YOU TIED";
        statement.style.color = 'white';
        statement.style.marginTop = '50px';
        statement.style.fontSize = '50px';
        statement.style.textAlign = 'center';
        document.getElementById("display-statement").appendChild(statement);
    }else if (gameStats == "Lost"){
        statement.textContent = "YOU LOST :(";
        statement.style.color = 'white';
        statement.style.marginTop = '50px';
        statement.style.fontSize = '50px';
        statement.style.textAlign = 'center';
        document.getElementById("display-statement").appendChild(statement);
    }
}



var playerSelection = "";
//reads rock button
var rock = document.getElementById("rock");
rock.addEventListener('click', () => {
    playerSelection = "Rock";
    statement.textContent = "";
    displayResult(playerSelection);
})
//reads paper button
var paper = document.getElementById("paper");
paper.addEventListener('click', () => {
    playerSelection = "Paper";
    statement.textContent = "";
    displayResult(playerSelection);
})
//reads scissors button
var scissors = document.getElementById("scissors");
scissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    statement.textContent = "";
    displayResult(playerSelection);
})

