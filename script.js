let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.round(Math.random() * 9);
}

function getAbsoluteDistance(num1, num2) {
    return Math.abs(num1 - num2);
}

function compareGuesses(currentHumanGuess, computerGuess, target) {
    targetNumber = generateTarget();

    const userDifference = getAbsoluteDistance(target, currentHumanGuess);
    const computerDifference = getAbsoluteDistance(target, computerGuess);

    if (currentHumanGuess > 9 || currentHumanGuess < 0) {
        alert("Your number is out of range!");
    } 

    if (userDifference < computerDifference || currentHumanGuess === target) {
        return true;
    }

    else if (computerDifference < userDifference || computerGuess === target) {
        return false;
    } 
}

function updateScore(matchWinner) {
 
    if (matchWinner === "human") {
        humanScore += 1;
    }

    else if (matchWinner === "computer") {  
        computerScore += 1;
    }
}

function advanceRound() 
{ 
    currentRoundNumber++
}
