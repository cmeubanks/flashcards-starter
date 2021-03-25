const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  startGame() {
    let cards = [];
    prototypeQuestions.forEach(element => {
      const card = new Card(element.id, element.question, element.answers, element.correctAnswer);
      cards.push(card);
    });

    let deck = new Deck(cards);
    this.currentRound = new Round(deck);

    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
