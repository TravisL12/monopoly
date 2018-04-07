const Game = function (elementId, tiles) {
    this.el = document.getElementById(elementId)
    this.board = new Board(tiles);
    this.board.render(this.el);
    this.initialize();
    this.doublesCount = 0;
}

function random (max, min) {
    min = min || 0;
    return Math.ceil(Math.random() * max + min);
}

Game.prototype = {
    initialize: function () {
        let playerCount = 4,
            name = ['Travis', 'Marisa', 'Connor', 'Oliver'],
            gamePiece = ['red', 'blue', 'green', 'pink'];

        this.players = [];
        for (let i = 0; i < playerCount; i++) {
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
            window.alert('player goes to jail');
        }
    },

    roll: function () {
        let dice1 = random(6),
            dice2 = random(6),
            dice1El = document.getElementById('dice1').getElementsByClassName('number')[0],
            dice2El = document.getElementById('dice2').getElementsByClassName('number')[0];

        let doubles = dice1 === dice2;

        if (doubles) {
            this.doublesIterate();
        }

        dice1El.classList = 'number roll-' + dice1;
        dice2El.classList = 'number roll-' + dice2;

        return {
            dice1: dice1, 
            dice2: dice2, 
            doubles: doubles,
            total: dice1+dice2
        };
    },

    updatePlayers: function () {
        let playerStatsEl = document.getElementById('player-stats');
        let playersEl = '';
        for (let i in this.players) {
            let player = this.players[i];
            playersEl += "<div class='player-stat'>" + player.name + " - $" + player.money + "</div>";
        }
        playerStatsEl.innerHTML = playersEl;
    }

}
