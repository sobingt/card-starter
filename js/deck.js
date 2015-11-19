
//Deck - template function - just moulds
var deck = function(){
  this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  var cards = [];
  //52 loops = 4 *13
  for(var i = 0; i< this.suits.length;i++)
  {
    for(var j = 0; j< this.names.length;j++){
      var cardObject = new card(j+1, this.names[j], this.suits[i]);
      cards.push(cardObject);
    }
      
  }
  //deck of 52 card objects
  return cards;
};

var shuffle = function(deck){
  for(var j, x, i = deck.length; i; j = parseInt(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
  
  return deck;
};