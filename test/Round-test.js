const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe ('Round', function() {
  let card1, card2, card3, cards, deck, round

  beforeEach(function() {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object")
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array")
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method")

    cards = [card1, card2, card3]
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should have a property that is the deck', function() {
    expect(round.deck).to.equal(deck);
  });

  it('should have a turn count property with a default value', function() {
    expect(round.turnCount).to.equal(0);
  });

  it('should have an incorrect guesses property with a default array value', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should return the current card', function() {
    const currentCard = round.returnCurrentCard()
    expect(currentCard).to.deep.equal(card1);
  });

  it('should count the number of turns', function() {
    round.takeTurn("object");
    expect(round.turnCount).to.equal(1);
  });

  it('should give tally the number of correct guesses after a guess is evaluated', function() {
    const feedback = round.takeTurn("object");
    expect(round.correctGuesses).to.equal(1);
    expect(feedback).to.equal('correct!');
  });

  it('should collect incorrect guesses if the guess is evaluated to false', function() {
    const feedback = round.takeTurn("array");
    expect(round.correctGuesses).to.equal(0);
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(feedback).to.equal('incorrect!');
  });

  it('should update the current card for a new turn', function() {
    round.takeTurn("object");
    expect(round.currentCard.id).to.equal(2);
  });

  it('should return the percent of correct guesses', function() {
    round.takeTurn("object");
    round.takeTurn("array");
    let percent = round.calculatePercentCorrect();
    expect(percent).to.equal(100);
    round.takeTurn("object")
    percent = round.calculatePercentCorrect();
    expect(percent).to.equal(67);

  });

  it('returns a statement at the end of each round', function() {
    round.takeTurn("object");
    round.takeTurn("array");
    const percent = round.calculatePercentCorrect();
    const endRound = round.endRound();
    expect(endRound).to.equal(`**Round over!You answered${percent}% of the questions correctly!`);
  });
});
