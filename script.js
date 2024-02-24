// on page load handler
window.addEventListener("load", () => {
  // get the grid div
  const grid = document.querySelector(".grid");

  // create 16x16 grid
  for (let x = 0; x < 16; x++) {
    const row = document.createElement("div");
    grid.append(row);
    row.classList.add("row");

    for (let y = 0; y < 16; y++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.append(square);
    }
  }
});
