import { $, random } from '../utilities';

class Dice {
  constructor() {
    this.dice1El = $('#dice1').firstChild;
    this.dice2El = $('#dice2').firstChild;
    this.diceDoublesEl = $('.dice-container .doubles');
    this.doublesCount = 0;
  }

  roll() {
    const dice1 = random(6);
    const dice2 = random(6);
    const isDoubles = dice1 === dice2;

    this.diceDoublesEl.classList.toggle('hide', !isDoubles);

    if (isDoubles) {
      this.doublesCount += 1;
    }

    this.dice1El.classList = 'number roll-' + dice1;
    this.dice2El.classList = 'number roll-' + dice2;

    this.lastRoll = {
      dice1: dice1,
      dice2: dice2,
      isDoubles: isDoubles,
      doublesCount: this.doublesCount,
      total: dice1 + dice2,
    }
  }

}

export default Dice;
