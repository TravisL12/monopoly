var Board = function () {
    this.tiles = tileData.map(function (tile) {
        return new Tile(tile);
    });
}
