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




//  - next I need to shuffle the card deck to randomise each play

// 1 - Create function called "shuffle"


function shuffle()
{
    // 2 - I want to grab a random number for the deck
    // 3 - Take two random cards and switch their values(number)
    // 4- Shuffle 500 times
    let deck = new Array
    for (var z = 0; z < 500; z += 1)
    {
      var card1 = Math.floor((Math.random() * deck.length));
      var card2 = Math.floor((Math.random() * deck.length));
      var onecard = deck[card1]

      deck[card1] = deck[card2]
      deck[card2] = onecard;
      deck.push(card1);
      deck.push(card2);
      }
      return deck;
    }
    console.log(shuffle());

// function testrandmoize()
// {
//   for (var i = 0; i < 1000; i += 1)
//   {
//     Math.floor((Math.random() * deck.length));
//   }

// }

// console.log(testrandmoize())
