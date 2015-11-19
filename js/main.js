
var players =[];
players[0]= new player(prompt("Enter your player1 name?"));
players[1] = new player(prompt("Enter your player2 name?"));

cardCounter =0;
playerCounter =0;
//Creating a deck object
var myDeck = new deck();

window.onload = function(){

  shuffle(myDeck);
  //Loop for all 52 cards in the deck
  for(var i = 0; i< myDeck.length; i++)
  {
    div = document.createElement('div');
    div.className = 'card';
    div.addEventListener('click', function(event){
      if(cardCounter==2)
      {
        var flippedCards = document.getElementsByClassName("show");
        for(var i =flippedCards.length-1; i>-1;i--){
          flippedCards[i].classList.remove("show");
        }
        cardCounter =1;
      }
      else if(cardCounter==1){
        var currentCardValue = this.querySelector(".number").innerHTML;
        var previousCardValue = document.getElementsByClassName("show")[0].innerHTML;
        if(currentCardValue==previousCardValue)
        {
          players[playerCounter].score+=10;
          document.getElementById("players["+playerCounter+"]").querySelector(".score").innerHTML=players[playerCounter].score;
        }
        else
        {
          playerCounter = 1-playerCounter;
          document.getElementById("messages").innerHTML =players[playerCounter].name+", this is your turn "+playerCounter;
          
        }
          
          
        cardCounter++;
      }
      else
        cardCounter++;
        
      this.querySelector(".number").classList.add("show");
      this.querySelector(".suit").classList.add("show");
      
      
        
    });
    
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
  
  scoreDiv = document.createElement('div');
  scoreDiv.className ='scores';
  scoreDiv.innerHTML='<span id="players[0]" class="player">' + players[0].name +'<br/><b class="score">'+players[0].score+'</b></span>'+'<span class="player" id="players[1]">' + players[1].name +'<br/><b class="score">'+players[1].score+'</b></span>';
  document.body.appendChild(scoreDiv);
  
  messageDiv = document.createElement('div');
  messageDiv.setAttribute('id','messages');
  messageDiv.innerHTML= players[0].name +', this is your tune';
  document.body.appendChild(messageDiv);
  
};


