const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const currentCard = new Card();
    const turn = new Turn('object', currentCard);
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('object');
  });

  it('should store the current card in play', function() {
    const currentCard = new Card();
    const turn = new Turn('object', currentCard);
    expect(turn.currentCard).to.be.an('object');
    expect(turn.currentCard).to.equal(currentCard);
  });

  it('should return the user guess', function() {
    const currentCard = new Card();
    const turn = new Turn('object', currentCard);
    const guess = turn.returnGuess();
    expect(guess).to.be.a('string');
    expect(guess).to.equal('object');
  });

  it('should return the current card in play', function() {
    const currentCard = new Card();
    const turn = new Turn('object', currentCard);
    const card = turn.returnCard();
    expect(card).to.be.an('object');
    expect(card).to.equal(currentCard);
  });

  it('should determine if the guess matches the card correct answer', function() {
    const currentCard = new Card();
    const turn = new Turn('object', currentCard);
    const evaluation = turn.evaluateGuess();
    expect(evaluation).to.be.an('boolean');
  });

  it('should return a string response if the guess was incorrect', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');
    const turn = new Turn('object', currentCard);
    const evaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();
    expect(evaluation).to.equal(false);
    expect(feedback).to.equal('incorrect!');
  });

  it('should return a string response if the guess was correct', function() {
    const currentCard = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', currentCard);
    const evaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();
    expect(evaluation).to.equal(true);
    expect(feedback).to.equal('correct!');
  });
})
