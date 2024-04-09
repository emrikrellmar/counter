let inc = document.getElementById("inc")
let counter = document.getElementById("counter")
let dec = document.getElementById("dec")
let names = document.getElementById("names")

inc.onclick = incClick;
dec.onclick = decClick;

names.onmouseover = hover;
names.onmouseout = hoverLeave;

function incClick() {
    let number = 0;
    number = Number(counter.innerHTML);
    counter.innerHTML = number + 10;
}

function decClick() {
    let number = 0;
    number = Number(counter.innerHTML);
    counter.innerHTML = number - 10;
}

function hover(e) {
    let name = e.target;
    name.style.backgroundColor = 'grey';
}


function hoverLeave(e) {
    let name = e.target;
    name.style.backgroundColor = '';
}