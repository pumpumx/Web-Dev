
function total(){
    let bill = Number(document.getElementById("bill").value);
    let tip = Number(document.getElementById("tip").valueAsNumber);

    document.getElementById("Calc").innerHTML ="$" + (bill + tip);
}