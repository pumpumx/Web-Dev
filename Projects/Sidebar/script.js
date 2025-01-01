document.getElementById("sidel").addEventListener("click" , animate);
document.getElementById("cross").addEventListener("click" , back);
let sidebar = document.getElementById("sidebar-hidden");
function animate(){
    sidebar.style.transform = "translateX(0)"; 
}

function back(){
    sidebar.style.transform = "translateX(-100%)";
}
