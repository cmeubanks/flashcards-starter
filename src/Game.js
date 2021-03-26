const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');
const Deck = require('../src/Deck.js');
const Round = require('../src/Round.js');

class Game {
  constructor() {
    this.currentRound;
  }

  startGame() {
    let cards = [];
    prototypeQuestions.forEach(element => {
      let card = new Card(element.id, element.question, element.answers, element.correctAnswer);
      cards.push(card);
    });

    let deck = new Deck(cards);
    let round = new Round(deck);

    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
