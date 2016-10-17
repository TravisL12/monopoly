function Tile(params) {
    this.name = params.name;
    this.type = params.type;
    if (params.cost) {
        this.cost = params.cost;
    }
};

Tile.prototype.render = function () {
    var tileEl = document.createElement('div');
    tileEl.className = 'tile ' + this.type;

    if (this.color) {
        var colorEl = document.createElement('div');
        colorEl.className = 'property-color ' + this.color.toLowerCase();
        tileEl.appendChild(colorEl);
    }

    if (this.name) {
        var tileName = document.createElement('p');
        tileName.className = 'name';
        tileName.innerText = this.name.toUpperCase();
        tileEl.appendChild(tileName);
    }

    if (this.cost) {
        var tileCost = document.createElement('p');
        tileCost.className = 'cost';
        tileCost.innerText = '$' + this.cost;
        tileEl.appendChild(tileCost);
    }

    if (this.id) {
        tileEl.id = this.id;
    }

    return tileEl;
}

Corner.prototype = new Tile(this);
function Corner (params) {
    Tile.call(this, params);
    this.type = 'corner';
    this.id = params.id;
};

Property.prototype = new Tile(this);
function Property (params) {
    Tile.call(this, params);
    this.type  = 'property';
    this.cost  = params.cost;
    this.color = params.color;
};

Community.prototype = new Tile(this);
function Community (params) {
    Tile.call(this, params);
    this.type = 'community';
};

Tax.prototype = new Tile(this);
function Tax (params) {
    Tile.call(this, params);
    this.type = 'tax';
    this.tax = params.tax;
};

Utility.prototype = new Tile(this);
function Utility (params) {
    Tile.call(this, params);
    this.type = 'utility';
};

Chance.prototype = new Tile(this);
function Chance (params) {
    Tile.call(this, params);
    this.type = 'chance';
};
