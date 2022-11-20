//logic of the game

//the states a tile can be in to simplify changing the css of the tiles
const TILE_STATES = {
    HIDDEN: "hidden",
    MINE: "mine",
    NUMBER: "number",
    MARKED: "marked",
  }

export function createGrid(gridSize, mineCount) {
    var grid = []
    //creating the grid in its x and y axis
    for (let x = 0; x < gridSize; x++) {
        var row = []
        for (let y = 0; y < gridSize; y++) {
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

export function revealTile(tile) {
    if (tile.status != TILE_STATES.HIDDEN) return

    tile.status = TILE_STATES.NUMBER
}