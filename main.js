function MyHamburger(){
    let hamburger = document.getElementById("hamburger-nav");
    hamburger.classList.toggle("hei-100");
}

let element = document.getElementById("count");
counts = 0;

function myReset() {
    counts = 0;
    element.innerHTML = counts;
}

function myClick(){
    counts += 1;
    element.innerHTML = "" + counts;
}