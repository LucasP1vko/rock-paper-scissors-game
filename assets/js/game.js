let scoreUser = document.getElementById("user_score");
let scoreCpu = document.getElementById("cpu_score");
let userCorner = document.getElementById("btn_play1");
let cpuCorner = document.getElementById("btn_play2");

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


                    // creating delay between rounds
                    document.getElementById("btn_choice").disabled = true;
                    setTimeout(function() {
                        document.getElementById("btn_choice").disabled = false;
                         }, 5000);


        // displaying user choice image
        
        if (userChoice === 'rock') {
            userCorner.className = 'btn_rock'
        } else if (userChoice === 'paper') {
            userCorner.className = 'btn_paper'
        } else if (userChoice === 'scissors') {
            userCorner.className = 'btn_scissors'
        }

        // displaying cpu choice image

        if (computerChoice === 'rock') {
            cpuCorner.className = 'btn_rock'
        } else if (computerChoice === 'paper') {
            cpuCorner.className = 'btn_paper'
        } else if (computerChoice === 'scissors') {
            cpuCorner.className = 'btn_scissors'
        }

        changeScore()

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

function changeScore() {

}


function compareScore() {

}

function endGame() {

}