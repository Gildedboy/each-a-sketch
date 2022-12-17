const container = document.querySelector(".container");
const canvas = document.querySelector(".canvas");

//function for creating a grid
function newGrid(size) {
  for (let i = 1; i <= size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    canvas.appendChild(row);
    for (let i = 1; i <= size; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
  }
}

//function for removing the grid

function removeGrid() {
  const row = document.querySelectorAll(".row");
  row.forEach((div) => {
    div.remove();
  });
}

//function for changing the size of the grid and creating a new one, it also validates if the value is not a number or it bigger than 100 or less than 1

function changeSize() {
  let size = prompt(
    "Please enter a valid number between 1 and 100; This will create a new grid"
  );
  let sizeNumber = parseInt(size);
  if (size == null) {
    return;
  }
  while (sizeNumber > 100 || sizeNumber < 1 || isNaN(sizeNumber)) {
    alert("WRONG");
    size = prompt(
      "Please enter a valid number between 1 and 100; This number will create a new grid"
    );
    sizeNumber = parseInt(size);
  }

  removeGrid();
  newGrid(sizeNumber);
}

//function for drawing
function draw() {
  const pen = document.querySelectorAll(".square");
  pen.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.add("color");
    });
  });
}

//function for erasing
function eraser() {
  const pen = document.querySelectorAll(".square");
  pen.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.classList.remove("color");
    });
  });
}

//function for reset
function reset() {
  const pen = document.querySelectorAll(".square");
  pen.forEach((div) => {
    div.classList.remove("color");
  });
  removeGrid();
  newGrid(16);
}

//default grid
newGrid(16);
