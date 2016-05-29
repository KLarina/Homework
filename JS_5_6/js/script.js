var time = 0;
var running = 0;
function startPause() {
    if(running == 0) {
        running = 1;
        timerInc();
        document.getElementById("startPause").innerHTML = "Stop";
    } else {
        running = 0;
        document.getElementById("startPause").innerHTML = "Start";
    }
}
function reset() {
    running = 0;
    time = 0;
    document.getElementById("startPause").innerHTML = "Start";
    document.getElementById("output").innerHTML = "00:00:00:00";
}
function timerInc() {
    if(running == 1) {
        setTimeout(function() {
            var hour = Math.floor(time/10/60/60);
            var min = Math.floor(time/10/60);
            var sec = Math.floor(time/10 % 60);
            var mSec = time % 10;
            if(min < 10) {
                min = "0" + min;
            }
            if(sec < 10) {
                sec = "0" + sec;
            }
            document.getElementById("output").innerHTML = "0" + hour + ":" + min + ":" + sec + ":" + mSec + "0";
            time++;
            timerInc();
        }, 100)
    }
}