var celsius = document.getElementById("celsius");
var fahren = document.getElementById("fahren");
var kelvin = document.getElementById("kelvin");

// var box = document.querySelectorAll("button");
var cel = parseInt(celsius.value);
var fah = parseInt(fahren.value);
var kel = parseInt(kelvin.value);

celsius.addEventListener("change" , main1);
fahren.addEventListener("change" ,main2);
kelvin.addEventListener("change",main3);

function main1(){
    cel = parseInt(celsius.value);
    fah = ((cel*9/5) + 32).toFixed(2);
    fahren.value = fah;
    kel = (cel + 273.15).toFixed(2);
    kelvin.value = kel;
}

function main2(){
    fah = parseInt(fahren.value);
    cel = ((fah - 32)*5/9).toFixed(2);
    celsius.value = cel;
    kel = ((fah-32)*5/9 + 273.15).toFixed(2);
    kelvin.value = kel;
}

function main3(){
    kel = parseInt(kelvin.value);
    fah = ((kel - 273.15)*1.8 + 32).toFixed(2);
    fahren.value = fah;
    cel = (kel -273.15).toFixed(2);
    celsius.value = cel;
}