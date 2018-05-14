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

    buyTile(owner) {
        this.owner = owner;
    }

    titleCard() {
        return `
            <div class='title-card'>
                <div class='inner-card'>
                    <div class='name'>${this.name}</div>
                </div>
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
                <div class='inner-card'>
                    <div class='name ${this.color}'>
                        <p class='title-deed'>TITLE DEED</p>
                        <p>${this.name}</p>
                    </div>
                    <div class='property'>
                        <p class='rent'>Rent $${this.rent[0]}</p>
                        <ul class='house-rent'>
                            <li>With 1 House <span>$${this.rent[1]}</span></li>
                            <li>With 2 Houses <span>${this.rent[2]}</span></li>
                            <li>With 3 Houses <span>${this.rent[3]}</span></li>
                            <li>With 4 Houses <span>${this.rent[4]}</span></li>
                        </ul>
                        <p class='hotel-rent'>With HOTEL $${this.rent[5]}</p>
                        <p class='mortgage-value'>Mortgage Value $${this.cost / 2}</p>
                        <p class='house-cost'>Houses cost $${this.houseCost}. each</p>
                        <p class='hotel-cost'>Hotels $${this.houseCost}. plus 4 houses</p>
                    </div>
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
                <div class='inner-card'>
                    <div class='railroad'>
                        <div class='train-img'><img src='/images/Train.gif'/></div>
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

export { Tile, Corner, Property, Community, Tax, Utility, Railroad, Chance };
