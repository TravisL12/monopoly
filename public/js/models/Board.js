class Board {
    constructor(tileData) {
        this.tileData = tileData;
        this.tiles = this.buildSpaces();
    }

    buildSpaces() {
        let spaces = [];
        for (let i = 0; i < 4; i++) {
            spaces.push(this.tileData.corners[i]);
            spaces = spaces.concat(this.tileData.sides[i]);
        }
        return spaces;
    }

    render(element) {
        var tileContainerElement = document.createElement('div');
        tileContainerElement.className = 'game-board-container';

        this.tileData.corners.forEach(function(tile) {
            tileContainerElement.appendChild(tile.render());
        });

        for (var i in this.tileData.sides) {
            var side = this.tileData.sides[i];
            var sideElement = document.createElement('div');
            sideElement.className = 'side';
            sideElement.id = 'side-' + i;
            for (var j in side) {
                sideElement.appendChild(side[j].render());
            }
            tileContainerElement.appendChild(sideElement);
        }

        element.appendChild(tileContainerElement);
    }
}
