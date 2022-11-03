var dealerSum = 0;
var yourSum = 0;

var dealerAceCount = 0;
var yourAceCount = 0;

var playerTotal = 100 // player money

var hidden; // flipped card for dealer
var deck;

var canHit = true; // allows me to draw cards while yourSum <= 21




window.onload = function(){
  buildDeck();
  shuffleDeck();
  startGame();
}



//
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
  for(let i = 0; i < 2; i += 1) {  // I put < 2 because the player starts with two cards
    let cardImg = document.createElement("img");
    let card = deck.pop()
    cardImg.src = "./cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);
  }
  console.log(yourSum);

  document.getElementById("hit").addEventListener("click", hit);
  document.getElementById("stay").addEventListener("click", stay);

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

  if (reduceAce(yourSum, yourAceCount) > 21){ // so if i have: A, J, 8 -> 11 + 10 + 8, I want the player to have 1 instead of 11 for the Ace value
    canHit = false;
  }
}
// once the player stays, this needs to total up the number of cards to get the value
// reduce ace needs to be called to take inrto consideration as it could be 11 or 1
function stay(){
  dealerSum = reduceAce(dealerSum, dealerAceCount);
  yourSum = reduceAce(yourSum, yourAceCount);

  canHit = false;
  document.getElementById("hidden").src = "./cards/" + hidden + ".png";

  let message = "";
  let loserlink = "/cards/10-C.png"
  if (yourSum > 21){
    message = "You lose! HAHA"
  }
  else if (dealerSum > 21) {
    message = "YOU WIN!!!";
  }
  // both player and the dealer have the sum oo <= 21
  else if (yourSum == dealerSum){
    message = "Tie!";
  }
  else if (yourSum > dealerSum){
    message = "YOU WIN!!!";
  }
  else if (yourSum < dealerSum){
    message = "You LOSE! HAHA"
  }
  document.getElementById("dealer-sum").innerText = dealerSum;
  document.getElementById("your-sum").innerText = yourSum;
  document.getElementById("results").innerText = message;
}

function getValue(card){
  let data = card.split("-"); // example, random card: "4-C" should be like -> ["4", "C"]
  let value = data[0]; //getting the number now, since the letter has been split in the array.

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

// reduce the total sum if player has any aces so its going to change the 11 into a 1 as many times as possible until player hits 21 or until run out of aces
function reduceAce(playerSum, playerAceCount) {
  while (playerSum > 21 && playerAceCount > 0){
    playerSum -= 10;
    playerAceCount -= 1;
  }
  return playerSum;
}
