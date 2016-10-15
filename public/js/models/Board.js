var Board = function () {
    this.tiles = tileData.map(function (tile) {
        return new Tile(tile);
    });
}

Board.prototype = {
    render: function (element) {
        var ulElement = document.createElement('ul');
        ulElement.classList.add('tile-container');
        this.tiles.forEach(function (tile) {
            var listEl = document.createElement('li');
            listEl.classList.add('tile');
            if (tile.type) {
                listEl.classList.add(tile.type);
            }
            listEl.innerText = tile.name;
            ulElement.appendChild(listEl);
        });

        element.appendChild(ulElement);
    }
}
