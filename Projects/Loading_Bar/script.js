    var bar = document.getElementById("barid");
    var over = document.getElementById("overid");
    var digit = document.getElementById("num1");

    window.onload = ()=>{
        let interval = setInterval(()=>{
            var length = parseInt(digit.innerHTML);
            if(length>=100){
                clearInterval(interval);
            }
            else{
            length +=1;
            over.style.width = `${length}%`;
            digit.innerHTML = length;
            }
        },20);  
    };
