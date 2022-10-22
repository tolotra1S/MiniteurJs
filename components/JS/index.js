
const timer = document.querySelector('.timer');

const min = window.prompt("Minute");
const sec = window.prompt("Seconde");

const minutes = min * 60000;
const seconds = sec * 1000;
const setTime = minutes + seconds;

const starTime = Date.now();
const futureTime = starTime + setTime;

const timerLoop = setInterval(countDownTimer);
countDownTimer();

function countDownTimer(){
    const currentTime = Date.now();
    const remainingTime = futureTime - currentTime;
    
     const mins = Math.floor((remainingTime / (1000 * 60 )) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
     const secs = Math.floor((remainingTime / (1000)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});

    timer.innerHTML =
    `
    <div>${mins}</div>
    <div class="colon">:</div>
    <div>${secs}</div>
    ` ;

    if(remainingTime<=6000){
        timer.style.color = "red";
    }
    if(remainingTime<0){
        clearInterval(timerLoop);
        timer.innerHTML =
    `
    <div>00</div>
    <div class="colon">:</div>
    <div>00</div>
    ` ;
    timer.style.color = "lightgray";
    }


}