//logic of the game

//the states a tile can be in to simplify changing the css of the tiles
const TILE_STATES = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
  }
var minePositions

export function createGrid(gridSize, mineCount) {
    minePositions = getMinePositions(gridSize, mineCount)
    var grid = []
    //creating the grid in its x and y axis
    for (let y = 0; y < gridSize; y++) {
        var row = []
        for (let x = 0; x < gridSize; x++) {
            //creates a div for each tile and defaults it to a hidden state
            const element = document.createElement("div") 
            element.dataset.state = TILE_STATES.HIDDEN

            var tile = {
                element,
                x,
                y,
                //getter and setter to make detecting and changing the state of the tile simpler
                get status() {
                    return this.element.dataset.state
                },
                set status(value) {
                    this.element.dataset.state = value
                }
            }
            row.push(tile)
        }
        grid.push(row)
    }
    return grid
}

export function revealTile(board, tile) {
    //checks if the tile can be revealed or not
    if (tile.status != TILE_STATES.HIDDEN) return

    tile.status = TILE_STATES.NUMBER

    // checkAdjacent(board, tile)
}

export function markTile(tile) {
    //checks if the tile can be marked or not
    if (tile.status != TILE_STATES.HIDDEN && tile.status != TILE_STATES.MARKED) return

    //toggles marked and unmarked state
    if (tile.status == TILE_STATES.MARKED) tile.status = TILE_STATES.HIDDEN
    else tile.status = TILE_STATES.MARKED
}

//why does this make the site load indefinately?
function getMinePositions(gridSize, mineCount) {
    var positions = []
    while (positions.length < mineCount) {
        //generates random x and y coords for the mine
        var position = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        }

        if (!(position in positions)) {
            positions.push(position)
        }
    }
    return positions
}

export function checkMine(tile) {
    //checks if the tile is not revealed or flagged
    if (tile.status == TILE_STATES.HIDDEN) {
        //checks grid coordinates to see if it is a mine
        for (let i = 0; i < minePositions.length; i++) {
            if (tile.x == minePositions[i].x && tile.y == minePositions[i].y) {
                tile.status = TILE_STATES.MINE
            }
        }
    }
}

function checkAdjacent(board, tile) {
    let row_limit = board.length
    if(row_limit > 0){
        let column_limit = board[0].length
        for(let x = Math.max(0, tile.x-1); x <= Math.min(tile.x+1, row_limit); x++){
            for(let y = Math.max(0, tile.y-1); y <= Math.min(tile.y+1, column_limit); y++){
                if(x != tile.x || y != tile.y){
                    if (board[x][y].status == TILE_STATES.HIDDEN){
                        console.log (board[x][y])
                        revealTile(board, board[x][y])
                    }
                }
            }
        }
    }
}