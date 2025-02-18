const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of the Game class', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should have a property to keep track of current round', function() {
    expect(game.currentRound).to.equal(undefined);
  });

  it('should start a new Game', function() {
    game.startGame();
    expect(game.currentRound.deck.card.length).to.equal(30);
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
