const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of the Game class', function() {
    const game = new Game();
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a property to keep track of current round', function() {
    const game = new Game();
    expect(game.currentRound).to.equal(0);
  });

})
