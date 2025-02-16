const container = document.querySelector("#container");

for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement("div");
    div.classList.toggle("cell");
    div.setAttribute("id", `div${i + 1}`);
    container.appendChild(div);
}

const cell = document.querySelectorAll(".cell");

cell.forEach((c) => {
    c.addEventListener("mouseover", (e) => {
        c.setAttribute("style", "background-color: black;");
    });
});

// TODO - implement button 
// https://www.theodinproject.com/lessons/foundations-etch-a-sketch#assignment
// STEP 4
//
// const button = document.querySelector("button");
// button.addEventListener("click", (e) => {
//     let input;
//     do {
//         input = +prompt("Input the new size (max size 100)");
//     } while (input < 0 || input > 100);
// });