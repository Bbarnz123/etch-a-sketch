const container = document.querySelector("#container");
const input = document.querySelector("input");
const button = document.querySelector("button");

let gridSize;
let divs;

button.addEventListener("click", () => {

    removeGrid ();

    if (input.value <= 100) {
        gridSize = input.value;
        createGrid ();
        divs = document.querySelectorAll(".divs");

        divs.forEach((item) => {
            item.addEventListener("mouseenter", changeColour)
        });
    };

    });


function createGrid () {
    for (let i = 0; i < gridSize; i++) {
        const containerDiv = document.createElement("div");
        containerDiv.style.display = "flex";

        for (let j = 0; j < gridSize; j++) {
            const div = document.createElement("div");
            div.style.boxSizing = "border-box";
            div.style.width = 800 / input.value + "px";
            div.style.height = 800 / input.value + "px";
            div.style.border = "1px solid black";
            div.className = "divs";
            containerDiv.appendChild(div);
        }

        container.appendChild(containerDiv);
    }
}

function removeGrid () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};



function changeColour (event) {
    event.target.style.backgroundColor = "#A9A9A9";
}





