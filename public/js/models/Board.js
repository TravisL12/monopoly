var Board = function () {
    this.tiles = tileData;
}

Board.prototype = {
    render: function (element) {
        var tileContainerElement = document.createElement('div');
        tileContainerElement.className = 'game-board-container';

        this.tiles.corners.forEach(function (tile) {
            tileContainerElement.appendChild(tile.render());
        });

        for (var i in this.tiles.sides) {
            var side = this.tiles.sides[i];
            var sideElement = document.createElement('div');
            sideElement.className = 'side';
            sideElement.id = 'side-' + i;
            for (var j in side) {
                sideElement.appendChild(side[j].render());
            };
           tileContainerElement.appendChild(sideElement);
        };

        element.appendChild(tileContainerElement);
    }
}
