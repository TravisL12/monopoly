class Board {
    constructor(tileData) {
        this.tileData = tileData;
        this.tiles = this.buildTiles();
    }

    buildTiles() {
        let spaces = [];
        for (let i = 0; i < 4; i++) {
            spaces.push(this.tileData.corners[i]);
            spaces = spaces.concat(this.tileData.sides[i]);
        }

        return spaces;
    }

    zoomIn(x, y) {
        this.el.style.transform = 'scale(1.75)';
        this.el.style['transform-origin'] = `${x} ${y}`;
    }

    resetZoom() {
        this.el.style.transform = 'scale(1)';
        this.el.className = 'game-board-container';
    }

    render(element) {
        this.el = document.createElement('div');
        this.resetZoom();

        this.tileData.corners.forEach((tile) => {
            this.el.appendChild(tile.render());
        });

        for (var i in this.tileData.sides) {
            var side = this.tileData.sides[i];
            var sideElement = document.createElement('div');
            sideElement.className = 'side';
            sideElement.id = 'side-' + i;
            for (var j in side) {
                sideElement.appendChild(side[j].render());
            }
            this.el.appendChild(sideElement);
        }

        element.appendChild(this.el);
    }
}

export default Board;
