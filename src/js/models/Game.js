import Board from "./Board";
import Player from "./Player";
import Dice from "./Dice";
import { $, random } from '../utilities';

class Game {
    constructor(elementId, tiles) {
        this.el = document.getElementById(elementId);
        this.playerStatsEl = document.getElementById('player-stats');
        this.gameTileEl = document.getElementById('game-tile');
        this.board = new Board(tiles);
        this.board.render(this.el);
        this.playerTurn = 1;
        this.dice = new Dice();

        this.endTurnBtn = $('#end-turn button');
        this.rollDiceBtn = $('#roll-dice button');

        this.buyBtn = $('#buy-property button');
        this.payRentBtn = $('#pay-rent button');

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
        this.currentPlayer.update(this.dice.lastRoll.total);

        // place on new tile
        this.board.tiles[this.currentPlayer.tileIndex].togglePlayer(this.playerTurn);
        this.board.determineZoomLocation(this.currentPlayer.tileIndex);

        // Draw player on tile
        this.gameTileEl.innerHTML = this.board.tiles[this.currentPlayer.tileIndex].titleCard();
    }

    endTurn() {
        if (!this.dice.lastRoll.isDoubles) {
            this.endTurnBtn.classList.toggle('hide');
            this.rollDiceBtn.classList.toggle('hide');
            this.getNextPlayer();
            this.dice.doublesCount = 0;
            this.board.resetZoom();
        }

        this.updatePlayerStats();
    }

    goToJail() {
      window.alert('player goes to jail');
      this.board.tiles[this.currentPlayer.tileIndex].togglePlayer(this.playerTurn);
      this.currentPlayer.tileIndex = 10;
      this.board.tiles[this.currentPlayer.tileIndex].togglePlayer(this.playerTurn);

      this.currentPlayer.isInJail = true;
      this.dice.doublesCount = 0;
      this.endTurn();
    }

    takeTurn() {
        this.dice.roll();

        if (!this.dice.lastRoll.isDoubles) {
            this.endTurnBtn.classList.remove('hide');
            this.rollDiceBtn.classList.add('hide');
        } else {
            this.currentPlayer.isInJail = false;
        }

        const landedOnJail = this.dice.lastRoll.total + this.currentPlayer.tileIndex === 30;
        const tripleDoubles = this.dice.lastRoll.doublesCount === 3;

        if (landedOnJail || tripleDoubles) {
            this.goToJail();
        }

        if (this.currentPlayer.isInJail) {
            window.alert(`You're still in jail!`);
        } else {
            this.movePlayerToTile();
            this.buyBtn.classList.remove('hide');
            this.payRentBtn.classList.add('hide');
        }
    }

    updatePlayerStats() {
        let playersEl = '';
        for (let i in this.players) {
            let player = this.players[i];
            playersEl += `<div class='player-stat ${player.isCurrentPlayer ? 'current' : ''}'>
                            <span class='player-${parseInt(i) + 1}'></span>
                            ${player.name} - $${player.money}
                        </div>`;
        }
        this.playerStatsEl.innerHTML = playersEl;
    }
}

export default Game;
