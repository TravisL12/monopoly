function Tile(params) {
    this.name = params.name;
    this.type = params.type;
};

Tile.prototype.render = function () {
    var tileEl = document.createElement('div');
    tileEl.className = 'tile ' + this.type;
    tileEl.innerText = this.name;
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

Property.prototype.render = function () {
    var tileEl = document.createElement('div');
    tileEl.className = 'tile ' + this.type;
    var newContent = document.createTextNode(this.name); 

    var nameEl = document.createElement('div');
    nameEl.className = 'property-color ' + this.color.toLowerCase();
    tileEl.appendChild(nameEl);

    tileEl.appendChild(newContent);

    return tileEl;
}

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
