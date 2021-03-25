const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.card[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;

  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard)
    let feedback
    this.turnCount+=1

    if (turn.evaluateGuess()) {
      this.correctGuesses+=1
      feedback = turn.giveFeedback();
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      feedback = turn.giveFeedback();
    }

    this.currentCard = this.deck.card[this.turnCount];
    return feedback;
  }
}

module.exports = Round;
