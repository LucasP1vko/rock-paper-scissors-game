
        let userCorner = document.getElementById("btn_play1");
        let cpuCorner = document.getElementById("btn_play2");

// game initializing function after restart game
        function runGame() {
            document.getElementById("winner").innerText = 'Welcome back!';
            setTimeout(function() {
                document.getElementById("winner").innerText = 'Press one of the buttons to start.';
                }, 3000);
            let scoreUser = parseInt(document.getElementById("user_score").innerText);
            document.getElementById("user_score").innerText = 0;
            let scoreCpu = parseInt(document.getElementById("cpu_score").innerText);
            document.getElementById("cpu_score").innerText = 0;  
            
            document.querySelector(".display_none").className = 'option_buttons';
            document.getElementById("restart_game").className = 'display_none';


}

        function displayUserChoice(userChoice) {
    
// displaying user choice image
        
        if (userChoice === 'rock') {
            userCorner.className = 'btn_rock';
            setTimeout(function() {
                userCorner.className = 'btn_user';
                }, 3000);
        } else if (userChoice === 'paper') {
            userCorner.className = 'btn_paper'
            setTimeout(function() {
                userCorner.className = 'btn_user';
                }, 3000);
        } else if (userChoice === 'scissors') {
            userCorner.className = 'btn_scissors'
            setTimeout(function() {
                userCorner.className = 'btn_user';
                }, 3000);
        }

// generate computer choice

// declare array of choices

        const playChoices = ['rock', 'paper', 'scissors'];
    
// create random number to choose computerChoice from the array of choices

        const randomNumber = Math.random() * playChoices.length;
        const roundedNumber = Math.floor(randomNumber);
        const computerChoice = playChoices[roundedNumber];
        const winner = checkWhoWin(userChoice, computerChoice);




        console.log(userChoice);
        console.log(computerChoice);
        console.log(winner);


// displaying cpu choice image

        if (computerChoice === 'rock') {
            cpuCorner.className = 'btn_rock'
            setTimeout(function() {
                cpuCorner.className = 'btn_cpu';
                }, 3000);
        } else if (computerChoice === 'paper') {
            cpuCorner.className = 'btn_paper'
            setTimeout(function() {
                cpuCorner.className = 'btn_cpu';
                }, 3000);
        } else if (computerChoice === 'scissors') {
            cpuCorner.className = 'btn_scissors'
            setTimeout(function() {
                cpuCorner.className = 'btn_cpu';
                }, 3000);
        };

// increase score after round 

        if (winner === 'win') {
            document.getElementById("winner").innerHTML = 'The winner is: <b>Player</b>. Congratulations!';
            let scoreUser = parseInt(document.getElementById("user_score").innerText);
            document.getElementById("user_score").innerText = ++scoreUser;
        } else if (winner === 'lost') {
            document.getElementById("winner").innerHTML = 'The winner is: <b>Computer</b>. Try again!';
            let scoreCpu = parseInt(document.getElementById("cpu_score").innerText);
            document.getElementById("cpu_score").innerText = ++scoreCpu;    
        }
        else if (winner === 'draw') {
            document.getElementById("winner").innerHTML = 'The winner is: <b>Nobody</b>. Draw!';
            let scoreUser = parseInt(document.getElementById("user_score").innerText);
            document.getElementById("user_score").innerText = scoreUser;
            let scoreCpu = parseInt(document.getElementById("cpu_score").innerText);
            document.getElementById("cpu_score").innerText = scoreCpu;

        };


// compare score and announce winner plus enable restart game button and disable game controls
            let scoreP1 = parseInt(document.getElementById("user_score").innerText);
            let scoreComp = parseInt(document.getElementById("cpu_score").innerText);

        if (scoreP1 > 1) {

            document.querySelector(".option_buttons").className = 'display_none';
            document.getElementById("restart_game").className = 'restart_game';

            document.getElementById("winner").innerText = 'GAME WON. WELL DONE!';

        } else if (scoreComp > 1) {

            document.querySelector(".option_buttons").className = 'display_none';
            document.getElementById("restart_game").className = 'restart_game';

            document.getElementById("winner").innerText = 'GAME LOST. BETTER LUCK NEXT TIME!';
        }


// creating delay between rounds

            document.querySelector(".option_buttons").style.pointerEvents = 'none';
            setTimeout(function() {
            document.querySelector(".option_buttons").style.pointerEvents = 'unset';
            }, 3000);

}

        function displayCpuChoice() {

}

// comparing choices and returning if player won or lost

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