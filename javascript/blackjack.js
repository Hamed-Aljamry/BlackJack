var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;


var hidden;
var deck;

var canHit = true; // allows me to draw cards while yourSum <= 21


window.onload = function(){
  buildDeck();
}


function buildDeck(){
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let types = ["C", "D", "H", "S"];
  deck = [];

  for (let i = 0; i < types.length; i += 1)//this will loop through each type/suit of card
  {
    for(let j = 0; j < values.length; j += 1)// then each suit will loop through each value as it is nested
      deck.push(values[j] + "-" + types[i]);// this should push cards like "A-C" -> "K-C","A-D" -> "K-D" and so on....
  }
}
