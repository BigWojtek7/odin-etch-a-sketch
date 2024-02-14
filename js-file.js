const container = document.querySelector(".container");

let divSquares = 16;

for (let i = 0; i < divSquares ** 2; i++){
  const divChild = document.createElement('div');
  container.appendChild(divChild);
  divChild.classList.add("child");
  }

console.log(divSquares ** 2);