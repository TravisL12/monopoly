class Tile {
    constructor(params) {
        this.name = params.name;
        this.type = params.type;
        this.owner = params.owner || null;
        this.rent = params.rent;
        this.houseCost = params.houseCost;
        if (params.cost) {
            this.cost = params.cost;
        }
    }

    togglePlayer(playerNumber) {
        const playersEl = this.el.querySelector(`.players .player-${playerNumber}`);
        playersEl.classList.toggle(`active`);
    }

    titleCard() {
        return `
            <div class='title-card'>
                <div class='name'>${this.name}</div>
            </div>
        `;
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
    titleCard() {
        return `
            <div class='title-card'>
                <div class='name ${this.color}'>${this.name}</div>
                <div class='property'>
                    <p class='rent'>Rent $${this.rent[0]}</p>
                    <ul class='house-rent'>
                        <li>With 1 House $${this.rent[1]}</li>
                        <li>With 2 Houses $${this.rent[2]}</li>
                        <li>With 3 Houses $${this.rent[3]}</li>
                        <li>With 4 Houses $${this.rent[4]}</li>
                    </ul>
                    <p class='hotel-rent'>With HOTEL $${this.rent[5]}</p>
                    <p class='mortgage-value'>Mortgage Value $${this.cost / 2}</p>
                    <p class='house-cost'>Houses cost $${this.houseCost}</p>
                    <p class='hotel-cost'>Hotels $${this.houseCost}</p>
                </div>
            </div>
        `;
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
class Railroad extends Tile {
    constructor(params) {
        super(params);
        this.type = 'railroad';
    }
    titleCard() {
        return `
            <div class='title-card'>
                <div class='railroad'>
                    <div class='train-img'><img src='/public/images/Train.gif'/></div>
                    <div class='name'>${this.name}</div>
                    <div class='rent'>
                        <ul class='house-rent'>
                            <li>Rent $${this.cost}</li>
                            <li>If 1 R.R's are owned $${this.cost * 2}</li>
                            <li>If 2 "" "" "" $${this.cost * 2 * 2}</li>
                            <li>If 3 "" "" "" $${this.cost * 2 * 2 * 2}</li>
                        </ul>
                    </div>
                    <p class='mortgage-value'>Mortgage Value $${this.cost / 2}</p>
                </div>
            </div>
        `;
    }
}
class Chance extends Tile {
    constructor(params) {
        super(params);
        this.type = 'chance';
    }
}
