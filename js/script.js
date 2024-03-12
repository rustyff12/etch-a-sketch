const gridContainer = document.querySelector(".grid-container");
const resetButton = document.querySelector(".reset");
const colorSelect = document.querySelector("#color-select");

const div = document.createElement("div");
let currentGridSze = 50;
let backgroundClr = `var(--clr-black)`;
let mouseDown = false;

// Grid size
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
colorSelect.addEventListener("change", (e) => {
    const value = e.target.value;
    backgroundClr = value;
    console.log(value);
});

// Listen for mouse event
gridContainer.addEventListener("mousedown", () => {
    mouseDown = true;
    document.addEventListener("mousemove", mouseMoveHandler);
});

gridContainer.addEventListener("mouseup", () => {
    mouseDown = false;
    document.removeEventListener("mousemove", mouseMoveHandler);
});
const mouseMoveHandler = (e) => {
    if (mouseDown) {
        const hoverDiv = e.target;
        if (hoverDiv.classList.contains("grid-item")) {
            hoverDiv.style.backgroundColor = backgroundClr;
        }
    }
};
// Reset button
resetButton.addEventListener("click", () => {
    // backgroundClr = "var(--clr-black)";
    dynamicGrid(currentGridSze);
});

// Party color function
