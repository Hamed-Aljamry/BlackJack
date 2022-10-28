var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

function getDeck()
{
  let deck = new Array()
  for(let x = 0; x < suits.length; x += 1)
  {
    for(let y = 0; y < values.length; y += 1)
    {
      var specify = parseInt(values[y]);
      if (values[y] == "J" || values[y] == "Q" || values[y] == "K")
        specify = 10;
      if (values[y] == "A")
        specify = 11;
      var card = { Value: values[y], Suit: suits[x], Weight: specify };
      deck.push(card);
    }
  }
  // return specify;
  return deck;
}
console.log(getDeck())







// console.log(parseInt(values[0]));


// console.log(suits.length)
// console.log(values.length)

// var weight = parseInt(values[x]);
// var x = 0
// x++
// console.log(parseInt(values[x]))

// var test = ["hi", "32", "92"]

// console.log(parseInt(test[1]))


// console.log(parseInt(test[0]))
