var Game = function (elementId) {
    var gameEl = document.getElementById(elementId)
    var board = new Board();
    board.render(gameEl);
    this.initialize();
    this.doublesCount = 0;
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

        this.updatePlayers();
        // Choose random player to start
        this.players[random(playerCount)-1].turn();
    },

    doublesIterate: function () {
        if (this.doublesCount < 3) {
            this.doublesCount += 1;
        } else if (this.doublesCount === 3) {
            console.log('player goes to jail');
        }
    },

    roll: function () {
        var dice1 = random(6),
            dice2 = random(6);

        var doubles = dice1 === dice2;

        if (doubles) {
            this.doublesIterate();
        }

        return {
            dice1: dice1, 
            dice2: dice2, 
            doubles: doubles,
            total: dice1+dice2
        };
    },

    updatePlayers: function () {
        var playerStatsEl = document.getElementById('player-stats');
        var playersEl = '';
        for (var i in this.players) {
            var player = this.players[i];
            playersEl += "<li>" + player.name + " - $" + player.money + "</li>";
        }
        playerStatsEl.innerHTML = playersEl;
    }

}
