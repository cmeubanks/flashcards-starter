const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.card[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];

  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    //updates turn turnCount
    //evalutes guesses
    //gives feedback
    // and stores ids of incorrect guesses

    // const turn = new Turn(guess, this.currentCard)
    // this.turnCount++
    // if(this.turnCount)

  }
}

module.exports = Round;
