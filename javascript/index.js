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



// function shuffle()
// {
//     // for 1000 turns
//     // switch the values of two random cards
//     for (var i = 0; i < 1000; i++)
//     {
//         var location1 = Math.floor((Math.random() * deck.length));
//         var location2 = Math.floor((Math.random() * deck.length));
//         var tmp = deck[location1];

//         deck[location1] = deck[location2];
//         deck[location2] = tmp;
//     }
// }
// next I need to shuffle the card deck to randomise each play


// function shuffle()
// {

//   // we will shuffle for 500 turns
//   //we need to switch the values of two random cards

// }

var location = Math.floor(Math.random() * deck.length);

console.log(location)
