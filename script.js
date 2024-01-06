let currMoleTile;
let currPlantTile;
let score = 0;
var gameOver = false;
window.onload = function () {
  // This code will run after the entire page has loaded
  startGame();
  let reply = document.getElementById("reply");
  reply.addEventListener("click", function () {
    location.reload();
  });
};
function startGame() {
  for (let i = 0; i < 9; i++) {
    //i goes from 0 to 8, stops at 9
    //<div id="0-8"></div>
    let tile = document.getElementById(i);

    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
  }

  setInterval(setMole, 1000);
  setInterval(setPlant, 2000);
  //setInterval(setPlant, 2000);
}
function randomNumber() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
function setMole() {
  if (gameOver) {
    return;
  }
  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }
  let mole = document.createElement("img");
  mole.src = "./images/mole.png";

  let num = randomNumber();
  if (currPlantTile && currPlantTile.id == num) {
    return;
  }
  currMoleTile = document.getElementById(`${num}`);
  currMoleTile.appendChild(mole);
}
function setPlant() {
  if (gameOver) {
    return;
  }
  if (currPlantTile) {
    currPlantTile.innerHTML = "";
  }
  let plant = document.createElement("img");

  plant.src = "./images/jeu.png";

  let num = randomNumber();
  if (currMoleTile && currMoleTile.id == num) {
    return;
  }
  currPlantTile = document.getElementById(`${num}`);
  currPlantTile.appendChild(plant);
}

function selectTile() {
  if (gameOver) {
    return;
  }
  if (this == currMoleTile) {
    score += 1;
    document.getElementById("score").innerText = score.toString(); //update score html
  } else if (this == currPlantTile) {
    document.getElementById("sentance").innerText =
      "GAME OVER: " + `Your score is ${score}`; //update score html

    gameOver = true;
  }
}
