const gridContainer = document.querySelector(".grid-container");

const gridButtons = document.querySelectorAll(".grid-button");
const grid4 = document.querySelector("#grid-4");
const grid8 = document.querySelector("#grid-8");
const grid16 = document.querySelector("#grid-16");
const grid32 = document.querySelector("#grid-32");
const grid64 = document.querySelector("#grid-64");

const div = document.createElement("div");

// grid size
gridButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const size = e.target.id;
        if (size === "grid-4") {
            dynamicGrid(4);
        } else if (size === "grid-8") {
            dynamicGrid(8);
        } else if (size === "grid-16") {
            dynamicGrid(16);
        } else if (size === "grid-32") {
            dynamicGrid(32);
        } else if (size === "grid-64") {
            dynamicGrid(64);
        }
    });
});

function dynamicGrid(num) {
    let current = gridContainer.querySelectorAll("div");
    current.forEach((div) => div.remove());
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    // gridContainer.style.gap = `5px`;
    let squared = num * num;
    for (let i = 0; i < squared; i++) {
        let div = document.createElement("div");
        div.classList.add("grid-item");
        gridContainer.appendChild(div);
    }
}

dynamicGrid(4);
