document.getElementById("item1").addEventListener("click",run);
document.getElementById("item2").addEventListener("click",stop1);
document.getElementById("item3").addEventListener("click",reset);
let interval;

function run(){
    document.getElementById("item1").disabled=true;
    if(document.getElementById("item1").disabled==true){
    interval = setInterval( ()=>{
        let clock3 = document.getElementById("clock3");
        clock3.stepUp(1);
            if(clock3.value>=60){
                clock3.value = 0;
                let clock2 = document.getElementById("clock2");
             clock2.stepUp(1);

                if(clock2.value>=60){
                    clock2.value = 0 ;
                    let clock1 = document.getElementById("clock1");
                    clock1.stepUp(1);
                }
            }
        } , 1000);
    }
}
function stop1(){  
    clearInterval(interval);
    document.getElementById("item1").disabled=false;

}
function reset(){
    clearInterval(interval);    
    let clock= document.getElementsByClassName("clock");
    for(let i=0;i<clock.length;i++){
        clock[i].value="00";
    }
    document.getElementById("item1").disabled=false;   
}