var Board = function () {
    this.tiles = tileData;
}

Board.prototype = {
    render: function (element) {
        var tileContainerElement = document.createElement('div');
        tileContainerElement.className = 'tile-container';

        this.tiles.forEach(function (tile) {
            tileContainerElement.appendChild(tile.render());
        });

        element.appendChild(tileContainerElement);
    }
}
