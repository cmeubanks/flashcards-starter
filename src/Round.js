const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.card[0];

  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn() {
    
  }
}

module.exports = Round;
