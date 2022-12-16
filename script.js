const container = document.querySelector(".container");

//Creation of completed Grid
for (let i = 1; i <= 10; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  container.appendChild(row);
  for (let i = 1; i <= 10; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
    for (let i = 1; i <= 2; i++) {
      const insideRow = document.createElement("div");
      insideRow.classList.add("insideRow");
      square.appendChild(insideRow);
      for (let i = 1; i <= 2; i++) {
        const insideSquare = document.createElement("div");
        insideSquare.classList.add("insideSquare");
        insideRow.appendChild(insideSquare);
      }
    }
  }
}

const pen = document.querySelector(".insideSquare");
