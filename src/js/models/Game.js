import Board from "./Board";
import Player from "./Player";
import { random } from '../utilities';

class Game {
    constructor(elementId, tiles) {
        this.el = document.getElementById(elementId);
        this.playerStatsEl = document.getElementById('player-stats');
        this.gameTileEl = document.getElementById('game-tile');
        this.board = new Board(tiles);
        this.board.render(this.el);
        this.playerTurn = 1;
        this.doublesCount = 0;

        this.endTurnBtn = document.querySelector('#end-turn button');
        this.rollDiceBtn = document.querySelector('#roll-dice button');
        this.dice1El = document.getElementById('dice1').getElementsByClassName('number')[0];
        this.dice2El = document.getElementById('dice2').getElementsByClassName('number')[0];
        this.diceDoublesEl = document.querySelector('.dice-container .doubles');

        this.endTurnBtn.addEventListener('click', this.endTurn.bind(this));
        this.rollDiceBtn.addEventListener('click', this.nextTurn.bind(this));

        this.initialize();
    }

    initialize() {
        const playerCount = 4;
        const name = ['Travis', 'Marisa', 'Connor', 'Harper'];
        const gamePiece = ['Dog', 'Car', 'Boat', 'Shoe'];

        this.players = name.reduce((players, name, i) => {
            const player = new Player(name, gamePiece[i]);
            players.push(player);
            this.board.tiles[player.tileIndex].togglePlayer(i + 1); // put player at Go! (start)
            return players;
        }, []);

        this.playerTurn = random(playerCount);
        this.currentPlayer.isCurrentPlayer = true;
        this.updatePlayerStats();
        this.endTurnBtn.classList.add('hide');
    }

    get currentPlayer() {
        return this.players[this.playerTurn - 1];
    }

    getNextPlayer() {
        if (this.playerTurn === this.players.length) {
            this.playerTurn = 1;
        } else {
            this.playerTurn += 1;
        }
    }

    endTurn() {
        this.endTurnBtn.classList.toggle('hide');
        this.rollDiceBtn.classList.toggle('hide');
        this.doublesCount = 0;
        this.currentPlayer.isCurrentPlayer = false;
        this.board.resetZoom();

        if (!this.lastRoll.isDoubles) {
            this.getNextPlayer();
        }

        this.currentPlayer.isCurrentPlayer = true;
        this.updatePlayerStats();
    }

    nextTurn() {
        this.roll();
        const player = this.players[this.playerTurn - 1];

        // remove from current tile
        this.board.tiles[player.tileIndex].togglePlayer(this.playerTurn);
        player.update(this.lastRoll.total);

        // place on new tile
        this.board.tiles[player.tileIndex].togglePlayer(this.playerTurn);
        this.board.determineZoomLocation(player.tileIndex);

        this.updateGameTile(this.board.tiles[player.tileIndex]);
    }

    doublesIterate() {
        if (this.doublesCount < 3) {
            this.doublesCount += 1;
        } else if (this.doublesCount === 3) {
            window.alert('player goes to jail');
        }
    }

    roll() {
        const dice1 = random(6);
        const dice2 = random(6);
        const doubles = dice1 === dice2;

        this.endTurnBtn.classList.remove('hide');
        this.rollDiceBtn.classList.add('hide');
        this.diceDoublesEl.classList.toggle('hide', !doubles);

        if (doubles) {
            this.doublesIterate();
        }

        this.dice1El.classList = 'number roll-' + dice1;
        this.dice2El.classList = 'number roll-' + dice2;

        this.lastRoll = {
            dice1: dice1,
            dice2: dice2,
            isDoubles: doubles,
            total: dice1 + dice2,
        };
    }

    updatePlayerStats() {
        let playersEl = '';
        for (let i in this.players) {
            let player = this.players[i];
            playersEl += `<div class='player-stat ${player.isCurrentPlayer
                ? 'current'
                : ''}'><span class='player-${+i +
                1}'></span>${player.name} - $${player.money}</div>`;
        }
        this.playerStatsEl.innerHTML = playersEl;
    }

    updateGameTile(currentTile) {
        this.gameTileEl.innerHTML = currentTile.titleCard();
    }
}

export default Game;
