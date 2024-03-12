const gridContainer = document.querySelector(".grid-container");
let sketchDivs = document.querySelectorAll(".grid-item");
const gridButtonSize = document.querySelectorAll(".grid-button-size");
const resetButton = document.querySelector(".reset");
const gridButtonColor = document.querySelectorAll(".grid-button-color");
/* const grid4 = document.querySelector("#grid-4");
const grid8 = document.querySelector("#grid-8");
const grid16 = document.querySelector("#grid-16");
const grid32 = document.querySelector("#grid-32");
const grid64 = document.querySelector("#grid-64"); */

const div = document.createElement("div");
let currentGridSze = 0;
let backgroundClr = "var(--clr-black)";
// Grid size
/* gridButtonSize.forEach((button) => {
    button.addEventListener("click", (e) => {
        const size = e.target.id;
        if (size === "grid-4") {
            dynamicGrid(4);
            currentGridSze = 4;
        } else if (size === "grid-8") {
            dynamicGrid(8);
            currentGridSze = 8;
        } else if (size === "grid-16") {
            dynamicGrid(16);
            currentGridSze = 16;
        } else if (size === "grid-32") {
            dynamicGrid(32);
            currentGridSze = 32;
        } else if (size === "grid-64") {
            dynamicGrid(64);
            currentGridSze = 64;
        }
    });
}); */
const gridSize = document.querySelector("#grid-size");
gridSize.addEventListener("change", (e) => {
    const gridSizeText = document.querySelector("#grid-size-text");
    currentGridSze = e.target.value;
    gridSizeText.innerText = `Current size: ${e.target.value} x ${e.target.value}`;
    console.log(currentGridSze);
});

const confirmSize = document.querySelector("#confirm");
confirmSize.addEventListener("click", () => {
    dynamicGrid(currentGridSze);
});

// Dynamic sized grid
function dynamicGrid(num) {
    let current = gridContainer.querySelectorAll("div");
    // remove divs if size increases or decreases
    current.forEach((div) => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    // gridContainer.style.gap = `1px`;
    let squared = num * num;
    for (let i = 0; i < squared; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-item");
        gridContainer.appendChild(div);
    }
}

// Change color
gridButtonColor.forEach((button) => {
    button.addEventListener("click", (e) => {
        const value = e.target.id;
        if (value === "black") {
            backgroundClr = "var(--clr-black)";
        } else if (value === "red") {
            backgroundClr = "var(--clr-red)";
        } else if (value === "blue") {
            backgroundClr = "var(--clr-blue)";
        } else if (value === "green") {
            backgroundClr = "var(--clr-green)";
        } /*  else if (value === "party") {
            partyColorFunction();
        } */
    });
});

// Listen for mouse event
gridContainer.addEventListener("mouseover", (e) => {
    const hoverDiv = e.target;
    if (hoverDiv.classList.contains("grid-item")) {
        hoverDiv.style.backgroundColor = backgroundClr;
    }
});

// Reset button
resetButton.addEventListener("click", () => {
    backgroundClr = "var(--clr-black)";
    dynamicGrid(currentGridSze);
});

// Party color function
