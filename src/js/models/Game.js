import Board from "./Board";
import Player from "./Player";
import { $, random } from '../utilities';

class Game {
    constructor(elementId, tiles) {
        this.el = document.getElementById(elementId);
        this.playerStatsEl = document.getElementById('player-stats');
        this.gameTileEl = document.getElementById('game-tile');
        this.board = new Board(tiles);
        this.board.render(this.el);
        this.playerTurn = 1;
        this.doublesCount = 0;

        this.endTurnBtn = $('#end-turn button');
        this.rollDiceBtn = $('#roll-dice button');
        this.dice1El = document.getElementById('dice1').firstChild;
        this.dice2El = document.getElementById('dice2').firstChild;
        this.diceDoublesEl = $('.dice-container .doubles');

        this.endTurnBtn.addEventListener('click', this.endTurn.bind(this));
        this.rollDiceBtn.addEventListener('click', this.takeTurn.bind(this));

        this.initialize();
    }

    initialize() {
        const playerCount = 4;
        const names = ['Travis', 'Marisa', 'Connor', 'Harper'];
        const gamePieces = ['Dog', 'Car', 'Boat', 'Shoe'];

        this.players = names.reduce((players, name, i) => {
            const player = new Player(name, gamePieces[i]);
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
        this.currentPlayer.isCurrentPlayer = false;

        if (this.playerTurn === this.players.length) {
            this.playerTurn = 1;
        } else {
            this.playerTurn += 1;
        }

        this.currentPlayer.isCurrentPlayer = true;
    }

    movePlayerToTile() {
        // remove from current tile
        this.board.tiles[this.currentPlayer.tileIndex].togglePlayer(this.playerTurn);
        this.currentPlayer.update(this.lastRoll.total);

        // place on new tile
        this.board.tiles[this.currentPlayer.tileIndex].togglePlayer(this.playerTurn);
        this.board.determineZoomLocation(this.currentPlayer.tileIndex);

        // Draw player on tile
        this.gameTileEl.innerHTML = this.board.tiles[this.currentPlayer.tileIndex].titleCard();
    }

    endTurn() {
        this.endTurnBtn.classList.toggle('hide');
        this.rollDiceBtn.classList.toggle('hide');
        this.doublesCount = 0;
        this.board.resetZoom();

        if (!this.lastRoll.isDoubles) {
            this.getNextPlayer();
        }

        this.updatePlayerStats();
    }

    takeTurn() {
        this.roll();

        if (this.currentPlayer.isInJail) {
            console.alert(`You're still in jail!`);
        } else {
            this.movePlayerToTile();
        }
    }

    doublesIterate() {
        if (this.doublesCount < 3) {
            this.doublesCount += 1;
        } else if (this.doublesCount === 3) {
            window.alert('player goes to jail');
            this.currentPlayer.tileIndex = 10;
            this.currentPlayer.isInJail = true;
            this.movePlayerToTile();
            this.lastRoll.isDoubles = false;
            this.endTurn();
        }
    }

    roll() {
        const dice1 = random(6);
        const dice2 = random(6);
        const isDoubles = dice1 === dice2;

        this.endTurnBtn.classList.remove('hide');
        this.rollDiceBtn.classList.add('hide');
        this.diceDoublesEl.classList.toggle('hide', !isDoubles);

        if (isDoubles) {
            this.doublesIterate();
        }

        this.dice1El.classList = 'number roll-' + dice1;
        this.dice2El.classList = 'number roll-' + dice2;

        this.lastRoll = {
            dice1: dice1,
            dice2: dice2,
            isDoubles: isDoubles,
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
}

export default Game;
