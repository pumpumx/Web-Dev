let start = document.getElementById("start");
let stopbutton = document.getElementById("stop");
let resetbutton = document.getElementById("reset");
let interval;
start.addEventListener("click" , startclock);
stopbutton.addEventListener("click" , stopit);
resetbutton.addEventListener("click", reset);

function startclock(){
    start.disabled=true;
    let second = document.getElementById("second");
    let minute = document.getElementById("minute");

    interval = setInterval(() => {
        let secValue = parseInt(second.value);
        let minValue = parseInt(minute.value);
        if(secValue===0){
            if(minValue>0){
            secValue=59;
            minValue = minValue -1;
            }
            else{
                clearInterval(interval);
                alert("Timer's up");
            }
        }
        else{
            secValue = secValue -1;
        }

        if(secValue<10){
            secValue = formatString(secValue); 
        }
        second.value = secValue;
        minute.value = minValue;
    }, 1000)
}

function stopit(){
    start.disabled = false;
    clearInterval(interval);
}

function reset(){
    clearInterval(interval);
    document.getElementById("minute").value = "25"; 
    document.getElementById("second").value = "00"; 
}

function formatString(value){
    return String(value).padStart(2,"0");
}