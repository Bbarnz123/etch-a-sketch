const container = document.querySelector("#container");
const input = document.querySelector("input");

let gridSize;

if (input <= 100) {
    gridSize = input.value;
    gridSize *= gridSize;
}

function createGrid () {

    let divs = [];

    for (i = 0; i < gridSize; i++) {
        divs[i] = document.createElement("div");
        divs[i].style.border = "2px solid black";
        container.appendChild(divs[i]);
    }
}


