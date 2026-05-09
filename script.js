let time = 25 * 60;

let timerDisplay = document.getElementById("timer");

let timer;

function updateDisplay(){

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? "0" + seconds : seconds;

    timerDisplay.innerHTML =
    `${minutes}:${seconds}`;
}

function startTimer(){

    timer = setInterval(() => {

        if(time > 0){
            time--;
            updateDisplay();
        }

    },1000);
}

function pauseTimer(){
    clearInterval(timer);
}

function resetTimer(){

    clearInterval(timer);

    time = 25 * 60;

    updateDisplay();
}

updateDisplay();