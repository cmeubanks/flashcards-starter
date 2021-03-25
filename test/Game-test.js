const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Card = require('../src/Card');

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
  //
  // it('should add card data to a new instance of the card', function() {
  //   const game = new Game();
  //   let card
  //   game.startGame()
  //   expect(card).to.be.an.instanceof(Card);
  // })

})
