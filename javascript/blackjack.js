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
  startGame();
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
    let temp = deck[i] // swapping the two postions/ indices
    deck[i] = deck[j]
    deck[j] = temp;
  }
  console.log(deck);
}

function startGame(){
  hidden = deck.pop();// taking the last card on the deck
  dealerSum += getValue(hidden); // get the number from the deck.pop()
  dealerAceCount += checkAce(hidden);// check if the number is Ace from deck.pop()
  // console.log(hidden);
  // console.log(dealerSum);
  while(dealerSum < 17) {
    let cardImg = document.createElement("img"); // created img tag like <img>
    let card = deck.pop()// get card from deck
    cardImg.src = "./cards/" + card + ".png"; // set the source for img tag like hmtl, <img src="/cards/whatever card name is.png">
    dealerSum += getValue(card); //increment dealer sum
    dealerAceCount += checkAce(card);
    document.getElementById("dealer-cards").append(cardImg);// take the img tag we have just created and "append" to the div id chosen, basically its going to keep adding imgs/cards/values until the value is above 17
  }
  console.log(dealerSum);
  // now do the same thing but without the contition, this is for the player now
  for(let i = 0; i < 2; i += 1) {
    let cardImg = document.createElement("img");
    let card = deck.pop()
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);
  }
  console.log(yourSum);

  document.getElementById("hit").addEventListener("click", hit);

}

function hit(){
  if(!canHit){
    return;
  }
  let cardImg = document.createElement("img");
  let card = deck.pop()
  cardImg.src = "./cards/" + card + ".png";
  yourSum += getValue(card);
  yourAceCount += checkAce(card);
  document.getElementById("your-cards").append(cardImg);
}

function getValue(card){
  let data = card.split("-"); // example, random card: "4-C" should be like -> ["4", "C"]
  let value = data[0]; //getting the number now, since the letter has been split in teh array.

  if (isNaN(value)) { // if its not a number value then..
    if (value == "A") { //if its A we return 11
      return 11;
    }
    return 10;// if its anything other than A which in this case is J,Q,K then we return 10
  }
  return parseInt(value); //otherwise we just return whatever number the value is, we use parseInt to change from string to integer
}


function checkAce(card) {
  if(card[0] == "A") {
    return 1;
  }
  return 0;
}
