const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Deck', function() {
  let deck, cards, card1, card2, card3;

  beforeEach(function() {
    deck = new Deck(cards);
    card1 = new Card(1, 'Which country produces the most coffee in the world?', ['Brazil', 'Columbia', 'Argentina'], 'Brazil')
    card2 = new Card(2, "Which country invented tea?", ["England", "China", "India"], "China")
    card3 = new Card(3, "What European nationa was said to invent hot dogs", ["Ireland", "Austria", "Germany"], "Germany")
    cards = [card1, card2, card3]
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store an array of Card objects', function() {
    expect(cards).to.deep.equal([card1, card2, card3]);
    expect(deck.card).to.deep.equal(cards);
  });

  it('should count the number of cards in the deck', function() {
    const deckCount = deck.countCards();
    expect(deckCount).to.equal(3);
  });
})
