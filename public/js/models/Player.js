var Player = function (name, gamePiece) {
    this.name = name;
    this.gamePiece = gamePiece;
    this.money = 1000;
}

Player.prototype = {
    turn: function () {
        var roll = Game.prototype.roll();
        console.log(roll);
    },
}
