


function displayUserChoice(userChoice) {

        let userCorner = document.getElementById("btn_play1");
        let cpuCorner = document.getElementById("btn_play2");

    
// displaying user choice image
        
        if (userChoice === 'rock') {
            userCorner.className = 'btn_rock';
            setTimeout(function() {
                userCorner.className = 'btn_user';
                }, 2000);
        } else if (userChoice === 'paper') {
            userCorner.className = 'btn_paper';
            setTimeout(function() {
                userCorner.className = 'btn_user';
                }, 2000);
        } else if (userChoice === 'scissors') {
            userCorner.className = 'btn_scissors';
            setTimeout(function() {
                userCorner.className = 'btn_user';
                }, 2000);
        }

// generate computer choice

// declare array of possible choices for computer

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
            cpuCorner.className = 'btn_rock';
            setTimeout(function() {
                cpuCorner.className = 'btn_cpu';
                }, 2000);
        } else if (computerChoice === 'paper') {
            cpuCorner.className = 'btn_paper';
            setTimeout(function() {
                cpuCorner.className = 'btn_cpu';
                }, 2000);
        } else if (computerChoice === 'scissors') {
            cpuCorner.className = 'btn_scissors';
            setTimeout(function() {
                cpuCorner.className = 'btn_cpu';
                }, 2000);
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

// increase score after each round and announce result of current round

        if (winner === 'win') {
            document.getElementById("winner").innerHTML = '<div>The winner is: <b>Player</b>. Congratulations!</div>';
            let scoreUser = parseInt(document.getElementById("user_score").innerText);
            document.getElementById("user_score").innerText = ++scoreUser;
        } else if (winner === 'lost') {
            document.getElementById("winner").innerHTML = '<div>The winner is: <b>Computer</b>. Try again!</div>';
            let scoreCpu = parseInt(document.getElementById("cpu_score").innerText);
            document.getElementById("cpu_score").innerText = ++scoreCpu;    
        }
        else if (winner === 'draw') {
            document.getElementById("winner").innerHTML = '<div>The winner is: <b>Nobody</b>. Draw!</div>';
            let scoreUser = parseInt(document.getElementById("user_score").innerText);
            document.getElementById("user_score").innerText = scoreUser;
            let scoreCpu = parseInt(document.getElementById("cpu_score").innerText);
            document.getElementById("cpu_score").innerText = scoreCpu;

        }


// compare score and announce winner plus enable restart game button and disable game controls
            let scoreP1 = parseInt(document.getElementById("user_score").innerText);
            let scoreComp = parseInt(document.getElementById("cpu_score").innerText);

        if (scoreP1 > 1) {

            setTimeout(function() {
            document.querySelector(".option_buttons").className = 'display_none';
            document.getElementById("restart_game").className = 'restart_game';
            }, 2001);

            document.getElementById("winner").innerText = 'GAME WON. WELL DONE!';

        } else if (scoreComp > 1) {

            setTimeout(function() {
            document.querySelector(".option_buttons").className = 'display_none';
            }, 2001);

            setTimeout(function() {
            document.getElementById("restart_game").className = 'restart_game';
            }, 2001);


            document.getElementById("winner").innerText = 'GAME LOST. BETTER LUCK NEXT TIME!';
        }

// creating delay between rounds

            document.querySelector(".option_buttons").style.pointerEvents = 'none';
            setTimeout(function() {
            document.querySelector(".option_buttons").style.pointerEvents = 'unset';
            }, 2000);


}

// new game initializing function after restart game
        function runGame() {
            document.getElementById("winner").innerText = 'Welcome back!';
            setTimeout(function() {
                document.getElementById("winner").innerHTML = '<div>Press rock, paper or scissors to start.</div><div>Get 2 points to win the game.</div>';
                }, 1500);
            let scoreUser = parseInt(document.getElementById("user_score").innerText);
            document.getElementById("user_score").innerText = 0;
            let scoreCpu = parseInt(document.getElementById("cpu_score").innerText);
            document.getElementById("cpu_score").innerText = 0;  
            
            document.querySelector(".display_none").className = 'option_buttons';

            document.getElementById("restart_game").className = 'display_none';

               

        }        




