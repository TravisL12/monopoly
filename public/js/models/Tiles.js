var Tile = function (params) {
    this.name  = params.name;
    this.cost  = params.cost;
    this.color = params.color;
    this.tax   = params.tax;
    this.type  = params.type;

    if (this.cost) {
        this.type = this.color ? 'property' : 'utility';
    } else if (this.tax) {
        this.type = 'tax';
    }
}
