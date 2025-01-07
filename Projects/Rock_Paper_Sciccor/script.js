var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var result = document.getElementById("result");
var yourScore = document.getElementById("score1");
var compScore = document.getElementById("score2");

button1.addEventListener("click",rock);
button2.addEventListener("click",paper);
button3.addEventListener("click",scissor);

function rock(){
    let hand = 1;
    const comp = Math.floor(Math.random() *3) + 1;
    if(comp==1 && hand==1){
        result.innerHTML = "It's a Tie";
    }
    else if(comp==2 && hand==1){
        result.innerHTML = "Computer Won";
        let ans = Number(compScore.innerHTML);
        ans++;
        compScore.innerHTML = ans;
    }
    else if(comp==3 && hand==1){
        result.innerHTML = "You Won & that Shitty computer lost yayyyyyyyyyy";
        let ans = Number(yourScore.innerHTML);
        ans++;
        yourScore.innerHTML = ans;
    }
}

function scissor(){
    let hand =2;
    const comp = Math.floor(Math.random() *3) + 1;
    if(comp==1 && hand==2){
        result.innerHTML = "You Won & that Shitty computer lost yayyyyyyyyyy";
        let ans = Number(yourScore.innerHTML);
        ans++;
        yourScore.innerHTML = ans;
    }
    else if(comp==2 && hand==2){
        result.innerHTML = "It's a Tie";
    }
    else if(comp==3 && hand==2){
        result.innerHTML = "Computer Won";
        let ans = Number(compScore.innerHTML);
        ans++;
        compScore.innerHTML = ans;
    }
}

function paper(){
    let hand =3;
    const comp = Math.floor(Math.random() *3) + 1;
    if(comp==1 && hand==3){
       
        result.innerHTML = "Computer Won";
        let ans = Number(compScore.innerHTML);
        ans++;
        compScore.innerHTML = ans;
    }
    else if(comp==2 && hand==3){
        result.innerHTML = "You Won & that Shitty computer lost yayyyyyyyyyy";
        let ans = Number(yourScore.innerHTML);
        ans++;
        yourScore.innerHTML = ans;
    }
    else if(comp==3 && hand==3){
        result.innerHTML = "It's a Tie";
    }
}