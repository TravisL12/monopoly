class Player {
  constructor(name, gamePiece) {
    this.name = name;
    this.spaceIndex = 0; // place on the board by index
    this.gamePiece = gamePiece;
    this.money = 1000;
  }

  update(roll) {
    this.spaceIndex += roll.total;
  }
}
