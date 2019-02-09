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

function game(){
    let rounds = 5;
    var playerSelection = prompt("Rock Paper or Scissors");
    var status;
    var computerSelection = computerPlay();
    for (i = 0; i < rounds; i++){
        status = playRound(playerSelection, computerSelection);
        if (status == 1){
            console.log("You won");
        }else if (status == 0){ 
            console.log("You tied");
        }else if (status == -1){
            console.log("You lost");
        }
    }
}
