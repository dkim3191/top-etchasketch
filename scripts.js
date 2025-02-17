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

function addCellEventListeners() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.setAttribute("style", "background-color: black;");
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