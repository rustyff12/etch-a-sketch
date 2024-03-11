const gridContainer = document.querySelector(".grid-container");

const gridButtons = document.querySelectorAll(".grid-button");
const grid4 = document.querySelector("#grid-4");
const grid8 = document.querySelector("#grid-8");
const grid16 = document.querySelector("#grid-16");
const grid64 = document.querySelector("#grid-64");

const div = document.createElement("div");

// grid size
gridButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log("clicked");
    });
});
