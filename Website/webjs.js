//display/UI

import { 
    createGrid, revealTile
} from "./minesweeper.js";

var gridSize = 5
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
    })
})

//setting the board to be the correct size for the grid
boardElement.style.setProperty("--size", gridSize)