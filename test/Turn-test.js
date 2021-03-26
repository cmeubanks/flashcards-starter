const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  let card, turn;

  beforeEach(function() {
    card = new Card(1, 'Which country produces the most coffee in the world?', ['Brazil', 'Columbia', 'Argentina'], 'Brazil');
    turn = new Turn('Brazil', card);
  });


  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('Brazil');
  });

  it('should store the current card in play', function() {
    expect(turn.card).to.be.an('object');
    expect(turn.card).to.equal(card);
  });

  it('should return the user guess', function() {
    const guess = turn.returnGuess();
    expect(guess).to.be.a('string');
    expect(guess).to.equal('Brazil');
  });

  it('should return the current card in play', function() {
    const card1 = turn.returnCard();
    expect(card1).to.be.an('object');
    expect(card1).to.equal(card);
  });

  it('should determine if the guess matches the card correct answer', function() {
    const evaluation = turn.evaluateGuess();
    expect(evaluation).to.be.an('boolean');
  });

  it('should return a string response if the guess was incorrect', function() {
    const turn = new Turn('Argentina', card);
    const evaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();
    expect(evaluation).to.equal(false);
    expect(feedback).to.equal('incorrect!');
  });

  it('should return a string response if the guess was correct', function() {
    const evaluation = turn.evaluateGuess();
    const feedback = turn.giveFeedback();
    expect(evaluation).to.equal(true);
    expect(feedback).to.equal('correct!');
  });
})
