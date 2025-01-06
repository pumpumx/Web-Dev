let load = document.getElementById("bar");
var forward = document.getElementById("forward");
var back = document.getElementById("backward");
var wid = 0;
var boxes = document.querySelectorAll(".item");
var i=1;
forward.addEventListener("click" , ()=>{
    forw();
    frontTrack();
});
back.addEventListener("click", ()=>{
    backw();
    backTrack();
}); 
function frontTrack(){
    boxes[i].style.backgroundColor = "Green";
    boxes[i].innerHTML = "✔";
     boxes[i].style.transition = "1s ease-in"
    i++;
}
function backTrack(){
    i--;  
    boxes[i].style.backgroundColor = "rgb(194, 193, 193)";
    boxes[i].style.transition = "1s ease-in"
    boxes[i].innerHTML = "X";
    
}
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

