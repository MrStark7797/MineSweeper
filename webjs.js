//display/UI

import { 
    createGrid, markTile, revealTile
} from "./minesweeper.js";

var gridSize = 9
var mineCount = 2

//console.log(createGrid(gridSize, mineCount))

var board = createGrid(gridSize, mineCount)
const boardElement = document.querySelector('.board')

//places each tile inside of the board div
board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element)
        //listens for a click to change the state
        tile.element.addEventListener("click", () => {
            revealTile(tile)
        })
        //listens for right click to mark a tile
        tile.element.addEventListener("contextmenu", () => {
            markTile(tile)
        })
    })
})

//setting the board to be the correct size for the grid
boardElement.style.setProperty("--size", gridSize)

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}