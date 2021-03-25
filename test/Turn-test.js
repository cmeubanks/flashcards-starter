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
    const card = new Card();
    const turn = new Turn('object', card);
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('object');
  });

  it('should store the current card in play', function() {
    const card = new Card();
    const turn = new Turn('object', card);
    expect(turn.card).to.be.an('object');
    expect(turn.card).to.equal(card);
  });

  it('should return the user guess', function() {
    const card = new Card();
    const turn = new Turn('object', card);
    const guess = turn.returnGuess();
    expect(guess).to.be.a('string');
    expect(guess).to.equal('object');
  });

  it('should return the current card in play', function() {
    const card = new Card();
    const turn = new Turn('object', card);
    const card1 = turn.returnCard();
    expect(card1).to.be.an('object');
    expect(card1).to.equal(card);
  });

  it('should determine if the guess matches the card correct answer', function() {
    const card = new Card();
    const turn = new Turn('object', card);
    const evaluation = turn.evaluateGuess();
    expect(evaluation).to.be.an('boolean');
  });

  it('should return a string response if the guess was incorrect', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'array');
    const turn = new Turn('object', card);
    const evaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();
    expect(evaluation).to.equal(false);
    expect(feedback).to.equal('incorrect!');
  });

  it('should return a string response if the guess was correct', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('object', card);
    const evaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();
    expect(evaluation).to.equal(true);
    expect(feedback).to.equal('correct!');
  });
})
