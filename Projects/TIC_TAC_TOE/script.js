
let player1 , player2;
let turn = 0;
function main(id){
    if(turn==0){
        document.getElementById(id).style.backgroundColor="red";
        turn=1;
    }
    else if(turn==1){
        document.getElementById(id).style.backgroundColor="green";
        turn=0; 
    }
}
function logic(){

}