const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
//Creation of completed Grid
for (let i = 1; i <= 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  for (let i = 1; i <= 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
}

const pen = document.querySelectorAll(".square");
pen.forEach((div) => {
  div.addEventListener("mousedown", function () {
    div.classList.toggle("color");
  });
});
