const container = document.querySelector("#container");
const button = document.querySelector("button");
const r = document.querySelector(":root");

function createGrid(size) {
    for (let i = 0; i < (size * size); i++) {
        const div = document.createElement("div");
        div.classList.add("cell");
        div.setAttribute("id", `div${i + 1}`);
        container.appendChild(div);
    }
    addCellEventListeners();
}

function removeGrid() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.remove());
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function addCellEventListeners() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            const red = getRandom(0, 256);
            const green = getRandom(0, 256);
            const blue = getRandom(0, 256);
            let currentOpacity = parseFloat(cell.style.opacity) || 0;
            currentOpacity = Math.min(currentOpacity + 0.1, 1); // Increment opacity by 0.1, max 1
            cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            cell.style.opacity = currentOpacity;
        });
    });
}

button.addEventListener("click", (e) => {
    let input;
    do {
        input = +prompt("Input the new size (max size 100)");
    } while (input < 0 || input > 100);
    r.style.setProperty("--num", input);
    removeGrid();
    createGrid(input);
});

createGrid(16);