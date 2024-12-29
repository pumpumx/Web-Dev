let boxes= document.querySelectorAll(".item");
let turn = 0;
let arr1 = [[1,2,3],[1,4,7],[0,4,7],[0,4,8],[2,4,6],[2,5,8]];
function main(id){
    if(turn==0 && document.getElementById(id).disabled!=true){
        document.getElementById("Player").innerHTML="Player 2 Turn";
        document.getElementById(id).style.backgroundColor="red";
        document.getElementById(id).disabled=true;
        turn=1;
    }
    else if(turn==1 && document.getElementById(id).disabled!=true){
        document.getElementById("Player").innerHTML="Player 1 Turn";
        document.getElementById(id).style.backgroundColor="green";
        document.getElementById(id).disabled=true;
        turn=0; 
    }
}

let winner = ()=>{
    for(pattern of arr1){
        let pos1 = boxes[pattern[0]];
        let pos2 = boxes[pattern[1]];
        let pos3 = boxes[pattern[2]];
    }
    // if(pos1!="" && pos2!="" && pos3!=""){
    //     if(pos1)
    // }
}
