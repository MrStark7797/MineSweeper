//display/UI

import { 
    createGrid, markTile, revealTile, checkMine
} from "./minesweeper.js";

//constants to be used by dropdown to set difficulty
const EASY = {gridSize: 5, mineCount: 5}
const MED = {gridSize: 9, mineCount: 10}
const HARD = {gridSize: 15, mineCount: 40}



var gridSize = 9
var mineCount = 10

// var board = createGrid(gridSize, mineCount)
// const boardElement = document.querySelector('.board')

// //places each tile inside of the board div
// board.forEach(row => {
//     row.forEach(tile => {
//         boardElement.append(tile.element)
//         //listens for a click to change the state
//         tile.element.addEventListener("click", () => {
//             checkMine(tile)
//             revealTile(board, tile)
//         })
//         //listens for right click to mark a tile
//         tile.element.addEventListener("contextmenu", () => {
//             markTile(tile)
//         })
//     })
// })

// //setting the board to be the correct size for the grid
// boardElement.style.setProperty("--size", gridSize)

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
// run when reloading
function reload(){
  var board = createGrid(gridSize, mineCount)
  const boardElement = document.querySelector('.board')

  //places each tile inside of the board div
  board.forEach(row => {
      row.forEach(tile => {
          boardElement.append(tile.element)
          //listens for a click to change the state
          tile.element.addEventListener("click", () => {
              checkMine(tile)
              revealTile(board, tile)
          })
          //listens for right click to mark a tile
          tile.element.addEventListener("contextmenu", () => {
              markTile(tile)
          })
      })
  })

  //setting the board to be the correct size for the grid
  boardElement.style.setProperty("--size", gridSize)
}

document.getElementById("reload").onclick = reload