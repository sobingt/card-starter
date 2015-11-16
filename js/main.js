//Card object - template function
var card = function(value, name, suit){
  this.value = value;
  this.name = name;
  this.suit = suit;
};

//Deck object - template function
var deck = function(){
  this.names = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
  this.suits = ['Hearts','Diamonds','Spades','Clubs'];
  var cards = [];
  
  for(var i = 0; i< this.suits.length;i++)
  {
    for(var j = 0; j< this.names.length;j++){
      cards.push(new card(j+1, this.names[j], this.suits[i]));
      console.log(cards);
    }
      
  }

  return cards;
};

//Creating a deck object
var myDeck = new deck();

window.onload = function(){

  //Loop for all 52 cards in the deck
  for(var i = 0; i< myDeck.length; i++)
  {
    div = document.createElement('div');
    div.className = 'card';
    var ascii_char;
    if(myDeck[i].suit =='Diamonds'){
      ascii_char = '&diams;';
    }
    else
    {
      ascii_char = '&'+myDeck[i].suit.toLowerCase()+';';
    }
    div.innerHTML ='<span class="number">'+ myDeck[i].name +'</span><span class="suit">' + ascii_char +'</span>';
    document.body.appendChild(div);
  }
};


