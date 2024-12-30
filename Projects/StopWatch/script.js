document.getElementById("item1").addEventListener("click",run);
document.getElementById("item3").addEventListener("click",reset);

function run(){
    document.getElementById("item1").disabled=true;
    let interval = setInterval( ()=>{
        let clock3 = document.getElementById("clock3");
        clock3.stepUp(1);

        if(clock3.value>60){
            clock3.value = 0;
            let clock2 = document.getElementById("clock2");
            clock2.stepUp(1);

            if(clock2.value>60){
                clock2.value = 0 ;
                let clock1 = document.getElementById("clock1");
                clock1.stepUp(1);
            }
        }
    } , 1000)


    document.getElementById("item1").disabled==false;
}
function reset(){
    document.getElementsByClassName("clock").value=0;
}