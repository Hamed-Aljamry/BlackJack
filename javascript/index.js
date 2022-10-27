var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function getDeck()
{
  let deck = new Array()

  for (let x = 0; x < suits.length; x += 1)
  {
    for (let y = 0; y < values.length; y += 1)
    {
      let card = { Value: values[y], Suit: suits[x] };
      deck.push(card);
    }
  }
  return deck;
}

console.log(getDeck())
