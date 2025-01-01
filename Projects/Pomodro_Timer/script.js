let start = document.getElementById("start");
let stopit = document.getElementById("stop");
let reset = document.getElementById("reset");
let interval;
start.addEventListener("click" , startclock());
stopit.addEventListener("click" , stopclock());
reset.addEventListener("click", resetclock());

function startclock(){
    let second = document.getElementById("second");
    let minute = document.getElementById("minute");

    interval = setInterval(() => {
        if(Number(second.value)==0){
            minute.value = minute.value-1;
        }
        else{
            second.value--;
        }
    }, 1000)
}

function stop(){
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
}