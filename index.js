const homeScore = document.getElementById("home-score");
const guestScore = document.getElementById("guest-score");


let homeCurrentScore = 0;
let guestCurrentScore = 0;

function homeAddOne(){
    homeCurrentScore += 1;
    homeScore.textContent = homeCurrentScore;
}

function homeAddTwo(){
    homeCurrentScore += 2;
    homeScore.textContent = homeCurrentScore;
}

function homeAddThree(){
    homeCurrentScore += 3;
    homeScore.textContent = homeCurrentScore;
}


function guestAddOne(){
    guestCurrentScore += 1;
    guestScore.textContent = guestCurrentScore;
}

function guestAddTwo(){
    guestCurrentScore += 2;
    guestScore.textContent = guestCurrentScore;
}

function guestAddThree(){
    guestCurrentScore += 3;
    guestScore.textContent = guestCurrentScore;
}

function reset(){
    homeCurrentScore = 0;
    guestCurrentScore = 0;
    guestScore.textContent = 0;
    homeScore.textContent = 0;
}
