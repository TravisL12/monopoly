var titleCase = function (name) {
    return name.slice(0,1).toUpperCase() + name.slice(1,name.length);
}

var Board = function () {
    this.tiles = tileData.map(function (tile) {
        var type = titleCase(tile.type);
        return new window[type](tile);
    });
}

Board.prototype = {
    render: function (element) {
        var ulElement = document.createElement('ul');
        ulElement.className = 'tile-container';

        this.tiles.forEach(function (tile) {
            var listEl = document.createElement('li');
            listEl.className = 'tile ' + tile.type;
            listEl.innerText = tile.name;
            ulElement.appendChild(listEl);
        });

        element.appendChild(ulElement);
    }
}
