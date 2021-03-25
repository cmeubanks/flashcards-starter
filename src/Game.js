const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card.js');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  startGame() {
    let cards = [];
    prototypeData.forEach(element => {
      const card = new Card(element.id, element.question, element.answers, element.correctAnswer);
      cards.push(card);
    })
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
