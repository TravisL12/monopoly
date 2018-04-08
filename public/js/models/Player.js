class Player {
  constructor(name, gamePiece) {
    this.name = name;
    this.tileIndex = 0; // place on the board by index
    this.gamePiece = gamePiece;
    this.money = 1000;
    this.isCurrentPlayer = false;
  }

  update(roll = 0) {
    const nextIndex = this.tileIndex + roll;

    // Pass Go! logic
    this.tileIndex = nextIndex > 39 ? nextIndex - 40 : nextIndex;
  }
}
