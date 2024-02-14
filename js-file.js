const container = document.querySelector(".container");



let squaresSize = prompt("Please enter grid size", "1-100");
if (squaresSize < 1 || squaresSize > 100){
  document.querySelector(".text").textContent = "Input incorrect. Setting default 16 grid";
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
    square.style.backgroundColor = "red"
  });
});

