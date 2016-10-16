var Game = function (elementId) {
    var gameEl = document.getElementById(elementId)
    var board = new Board();
    board.render(gameEl);
    this.initialize();
}

function random (max, min) {
    min = min || 0;
    return Math.ceil(Math.random() * max + min);
}

Game.prototype = {
    initialize: function () {
        var playerCount = 2,
            name = ['Travis', 'Marisa'],
            gamePiece = ['Dog', 'Boat'];

        this.players = [];
        for (var i = 0; i < playerCount; i++) {
            this.players.push(new Player(name[i], gamePiece[i]));
        }

        // Choose random player to start
        this.players[random(playerCount)-1].turn();
    },

    roll: function () {
        var dice1 = random(6),
            dice2 = random(6);

        return {
            dice1: dice1, 
            dice2: dice2, 
            total: dice1+dice2
        };
    },

}
