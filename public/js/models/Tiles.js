class Tile {
    constructor(params) {
        this.name = params.name;
        this.type = params.type;
        this.occupied = [];
        if (params.cost) {
            this.cost = params.cost;
        }
    }

    addPlayer(playerNumber) {
        const playersEl = this.el.querySelector(`.players .player-${playerNumber}`);
        playersEl.classList.toggle(`active`);
    }

    render() {
        this.el = document.createElement('div');
        this.el.className = 'tile ' + this.type;

        const playersEl = document.createElement('div');
        playersEl.innerHTML = `
        <div class='player-1'></div><div class='player-2'></div><div class='player-3'></div><div class='player-4'></div>
        `;
        playersEl.className = 'players';
        this.el.appendChild(playersEl);

        if (this.color) {
            const colorEl = document.createElement('div');
            colorEl.className = 'property-color ' + this.color.toLowerCase();
            this.el.appendChild(colorEl);
        }

        if (this.name) {
            const tileName = document.createElement('p');
            tileName.className = 'name';
            tileName.innerText = this.name.toUpperCase();
            this.el.appendChild(tileName);
        }

        if (this.cost) {
            const tileCost = document.createElement('p');
            tileCost.className = 'cost';
            tileCost.innerText = '$' + this.cost;
            this.el.appendChild(tileCost);
        }

        if (this.id) {
            this.el.id = this.id;
        }

        return this.el;
    }
}

class Corner extends Tile {
    constructor(params) {
        super(params);
        this.type = 'corner';
        this.id = params.id;
    }
}
class Property extends Tile {
    constructor(params) {
        super(params);
        this.type = 'property';
        this.cost = params.cost;
        this.color = params.color;
    }
}
class Community extends Tile {
    constructor(params) {
        super(params);
        this.type = 'community';
    }
}
class Tax extends Tile {
    constructor(params) {
        super(params);
        this.type = 'tax';
        this.tax = params.tax;
    }
}
class Utility extends Tile {
    constructor(params) {
        super(params);
        this.type = 'utility';
    }
}
class Chance extends Tile {
    constructor(params) {
        super(params);
        this.type = 'chance';
    }
}
