// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var mRandomNumber;                    // The Random Number
var mRandomQuote;                     // Random Quote
var mRandomAuthor;                    // The random quote's author.
// Two dimensional array to hold the quote and the person who said it.
var mQuotesAndSourcesArray = [
  ["You can do anything, but not everything.", "David Allen" ],
  ["You miss 100 percent of the shots you never take.", "Wayne Getzky" ],
  ["You must be the change you wish to see in the world.", "Gandhi" ],
  ["It is not the strongest of the species that survives, nor the most "
  + "intelligent, but the one most responsive to change.", "Leon C. Megginson" ],
  ["If you quit—quitting will become easier and easier for the rest of your life.", "Osman Minkar" ]

];


function getRandomQuote() {
  return Math.floor(Math.random() * mQuotesAndSourcesArray.length);
}

function printQuote() {
  mRandomNumber = getRandomQuote();
  console.log(mRandomNumber);
  document.getElementById("quote-box").innerHTML="<p class=\"quote\">"
                                                + mQuotesAndSourcesArray[mRandomNumber][0] + "</p>"
                                                + "<p class=\"source\">"
                                                + mQuotesAndSourcesArray[mRandomNumber][1] + "</p>"
}
