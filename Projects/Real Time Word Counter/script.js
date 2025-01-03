var total = document.getElementById("counter");
var remain = document.getElementById("Remaining");
var text = document.getElementById("textar");
remain.innerHTML = 50;
text.maxLength = 50;
x=50;

total.innerHTML = 0 ;
text.addEventListener("input",count);

function count(){
    let current = text.value.length;
    total.innerHTML = current;
    remain.innerHTML = x - current;
}