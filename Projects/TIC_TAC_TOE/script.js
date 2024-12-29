let turn = 0; 
let winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

function main(id) {
    let box = document.getElementById(id);

    if (box.innerHTML === "") {
        if (turn === 0) {
            document.getElementById("Player").innerHTML = "Player 2 Turn";
            box.style.backgroundColor = "red";
            box.innerHTML = "O";
            turn = 1;
        } else {
            document.getElementById("Player").innerHTML = "Player 1 Turn";
            box.style.backgroundColor = "green";
            box.innerHTML = "X";
            turn = 0;
        }
        if (checkWinner()) {
            alert(`Player ${turn === 1 ? "1" : "2"} Wins!`);
            resetGame();
        } else if (checkDraw()) {
            alert("It's a Draw!");
            resetGame();
        }
    }
}


function checkWinner() {
    for (let pattern of winningPatterns) {
        let pos1 = document.getElementById(pattern[0].toString()).innerHTML;
        let pos2 = document.getElementById(pattern[1].toString()).innerHTML;
        let pos3 = document.getElementById(pattern[2].toString()).innerHTML;

        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            return true; 
        }
    }
    return false;  
}


function checkDraw() {
    for (let i = 0; i < 9; i++) {
        if (document.getElementById(i.toString()).innerHTML === "") {
            return false; 
        }
    }
    return true; 
}


function resetGame() {
    for (let i = 0; i < 9; i++) {
        let box = document.getElementById(i.toString());
        box.innerHTML = "";
        box.style.backgroundColor = "";
    }
    document.getElementById("Player").innerHTML = "Player 1 Turn";
    turn = 0;
}
