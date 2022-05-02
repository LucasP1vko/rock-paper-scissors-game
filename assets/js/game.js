let scoreUser = document.getElementById("user_score");
let scoreCpu = document.getElementById("cpu_score")

function runGame() {

}

function displayUserChoice(userChoice) {
        // declare array 
        const playChoices = ['rock', 'paper', 'scissors'];
    
        // create random number to choose computerChoice
        const randomNumber = Math.random() * playChoices.length;
        const roundedNumber = Math.floor(randomNumber);
        const computerChoice = playChoices[roundedNumber];
        const winner = checkWhoWin(userChoice, computerChoice);
        let resultUser = '';
        let resultComputer = '';
        console.log(userChoice);
        console.log(computerChoice);
        console.log(winner);
}

function displayCpuChoice() {

}

function checkWhoWin(user, computer) {

    {
        if (user === 'rock') {
            if (computer === 'paper') return 'lost';
            if (computer === 'scissors') return 'win';
            if (computer === 'rock') return 'draw';
        }
        if (user == 'scissors') {
            if (computer === 'paper') return 'win';
            if (computer === 'rock') return 'lost';
            if (computer === 'scissors') return 'draw';
        }
        if (user == 'paper') {
            if (computer === 'rock') return 'win';
            if (computer === 'scissors') return 'lost';
            if (computer === 'paper') return 'draw';
        }
    }

}

function incrementUserScore() {

}

function incrementCpuScore() {

}

function compareScore() {

}

function endGame() {

}