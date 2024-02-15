const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

createGrid()

btn.addEventListener("click", () => {
  squaresSize = parseInt(prompt("Please enter grid size", "1-100"));
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  createGrid(squaresSize)

});

function createGrid (squaresSize = 16){
  if (squaresSize < 1 || squaresSize > 100){
    alert("Input incorrect. Setting default 16 grid")
    squaresSize = 16;
  }

  for (let i = 0; i < squaresSize ** 2; i++){
    const divChild = document.createElement("div");
    container.appendChild(divChild);
    divChild.classList.add("square");
  }

  let squareWidthHeight = Math.round((600 / squaresSize) * 100) / 100;
  const squares = document.querySelectorAll(".square")
  squares.forEach((square) => {
    square.style.width = squareWidthHeight + "px";
    square.style.height = squareWidthHeight + "px";
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = colorChange();
    });
  });
}

function colorChange() {
  randomHexNumber = Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomHexNumber;
}
