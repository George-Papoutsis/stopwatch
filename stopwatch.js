const play = document.querySelector('.play');
const restart = document.querySelector('.restart')
let time = document.querySelector('.time');
let timerStarted = 0;
let counter = 0;

play.addEventListener('click', keepTime);
restart.addEventListener('click', restartTime);

function restartTime() {
    if (timerStarted >= 1) {
        clearInterval(clock);
        play.classList.remove('pause');
        play.innerText = 'Play';
    }
    for (i = 0; i < time.childNodes.length; i ++) {
        if (i % 2 != 0) {
            time.childNodes[i].innerText = '00';
        }
    }

    counter = 0;
    timerStarted = 0;
}

function keepTime() {
    timerStarted += 1;
    play.classList.toggle('pause');
    play.innerText = 'Pause';
    if (timerStarted % 2 != 0) {
        clock = setInterval(function() {
            counter += 1;
            changeTimer(counter);
        }, '1000');
    }
    else {
        clearInterval(clock);
        play.innerText = 'Play';
    }
}

function changeTimer(counter) {
    const hours = counter/3600;
    if (hours >= 1) {
        counter = counter - (Math.floor(hours) * 3600);
        if (hours >= 10) {
            time.childNodes[1].innerText = Math.floor(hours);
        }
        else {
            time.childNodes[1].innerText = '0' + Math.floor(hours);
        }
    }

    const minutes = counter/60;

    if (minutes >= 1) {
        counter = counter - (Math.floor(minutes) * 60);
        if (minutes >= 10) {
            time.childNodes[3].innerText = Math.floor(minutes);
        }
        else {
            time.childNodes[3].innerText = '0' + Math.floor(minutes);
        }
        
    }
    if (counter >= 10) {
        time.childNodes[5].innerText = Math.floor(counter);
    }
    else {
        time.childNodes[5].innerText = '0' + Math.floor(counter);
    }
    
}