class Game {
    constructor(elementId, tiles) {
        this.el = document.getElementById(elementId);
        this.playerStatsEl = document.getElementById('player-stats');
        this.board = new Board(tiles);
        this.board.render(this.el);
        this.playerTurn = 1;
        this.doublesCount = 0;
        this.players = [];
        this.initialize();
        document.getElementById('roll-dice').addEventListener('click', this.nextTurn.bind(this));
    }

    initialize() {
        const playerCount = 4;
        const name = ['Travis', 'Marisa', 'Connor', 'Oliver'];
        const gamePiece = ['Dog', 'Car', 'Boat', 'Shoe'];

        for (let i = 0; i < playerCount; i++) {
            const player = new Player(name[i], gamePiece[i]);
            this.players.push(player);
            this.board.tiles[player.tileIndex].togglePlayer(i + 1);
        }

        this.updateGameStats();
        this.nextTurn(random(playerCount)); // Start Game! Choose random player to start
    }

    nextTurn(playerTurn) {
        this.playerTurn = playerTurn;
        const roll = this.roll();
        const player = this.players[this.playerTurn - 1];

        // remove from current tile
        this.board.tiles[player.tileIndex].togglePlayer(this.playerTurn);
        player.update(roll.total);

        // place on new tile
        this.board.tiles[player.tileIndex].togglePlayer(this.playerTurn);
    }

    doublesIterate() {
        if (this.doublesCount < 3) {
            this.doublesCount += 1;
        } else if (this.doublesCount === 3) {
            window.alert('player goes to jail');
        }
    }

    roll() {
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
            total: dice1 + dice2,
        };
    }

    updateGameStats() {
        let playersEl = '';
        for (let i in this.players) {
            let player = this.players[i];
            playersEl +=
                "<div class='player-stat'>" + player.name + ' - $' + player.money + '</div>';
        }
        this.playerStatsEl.innerHTML = playersEl;
    }
}
