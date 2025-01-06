let load = document.getElementById("bar");

var forward = document.getElementById("forward");
var back = document.getElementById("backward");
var wid = 0;

forward.addEventListener("click" , forw);
back.addEventListener("click",backw);

function backw(){
    if(wid<=100){
        forward.disabled = false;
    }
    if(wid>=0){
        wid-=25;
        load.style.width= `${wid}%`;
    }
    if(wid<=0){
        back.disabled=true;
    }
}

function forw(){
    if(wid<100){
        wid+=25;
        load.style.width = `${wid}%`;
        back.disabled = false;
    }
    if(wid>=100){
        forward.disabled = true;
    }
    
}

