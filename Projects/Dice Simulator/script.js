let reload = document.getElementById("Submit").addEventListener("click", action);

let map = {
    1: "dice_1",
    2: "dice_2",
    3: "dice_3",
    4: "dice_4",
    5: "dice_5",
    6: "dice_6"
};

function action() {
   document.getElementById("Submit").disabled=true;
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`dice_${i}`).style.zIndex = i;
    }
    let num = Math.floor(Math.random() * 6) + 1;
    let selected = map[num];
    document.getElementById(selected).style.zIndex = 10;
    let diceElement = document.getElementById(selected);
    diceElement.classList.add("roll-animation");
    diceElement.addEventListener('animationend', () => {
        diceElement.classList.remove('roll-animation'); 
    });
    console.log(`Rolled number: ${num}`);
    document.getElementById("Submit").disabled=false;
};
