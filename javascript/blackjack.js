var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;


var hidden;
var deck;

var canHit = true; // allows me to draw cards while yourSum <= 21


window.onload = function(){
  buildDeck();
  shuffleDeck();
}


function buildDeck(){
  let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  let types = ["C", "D", "H", "S"];
  deck = [];

  //this will loop through each type/suit of card
  for (let i = 0; i < types.length; i += 1) {
    // then each suit will loop through each value as it is nested
    for(let j = 0; j < values.length; j += 1) {
      deck.push(values[j] + "-" + types[i]);
      // this should push cards like "A-C" -> "K-C","A-D" -> "K-D" and so on....
    }
  }
  // console.log(deck);
}

function shuffleDeck(){
  for(let i = 0; i < deck.length; i += 1){
    let j = Math.floor(Math.random() * deck.length); // mathrandom takes num from 0-1, then mulitpy by 52, i will get a number from 0-51.9999, mathfloor will help me get it as an integer.
    let temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp;
  }
  console.log(deck);
}
