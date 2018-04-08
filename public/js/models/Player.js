class Player {
  constructor(name, gamePiece) {
    this.name = name;
    this.tileIndex = 0; // place on the board by index
    this.gamePiece = gamePiece;
    this.money = 1000;
  }

  update(roll = 0) {
    if (this.tileIndex + roll > 39) {
      console.log('Pass Go!!!!!');
    } else {
      this.tileIndex += roll;
    }
  }
}
