var Tile = function (params) {
    this.name = params.name;
    this.type = params.type;
}

var Corner = function (params) {
    Tile.call(this, params);
}

var Property = function (params) {
    Tile.call(this, params);
    this.cost  = params.cost;
    this.color = params.color;
}

var Community = function (params) {
    Tile.call(this, params);
}

var Tax = function (params) {
    Tile.call(this, params);
    this.tax = params.tax;
}

var Utility = function (params) {
    Tile.call(this, params);
}

var Chance = function (params) {
    Tile.call(this, params);
}
