
let player1 , player2;
let turn = 0;
function main(id){
    if(turn==0){
        document.getElementById("Player").innerHTML="Player 2 Turn";
        document.getElementById(id).style.backgroundColor="red";
        turn=1;
    }
    else if(turn==1){
        document.getElementById("Player").innerHTML="Player 1 Turn";
        document.getElementById(id).style.backgroundColor="green";
        turn=0; 
    }
}
function logic(){
 
}