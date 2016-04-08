// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var mRandomNumber;              // The Random Number
var mQuote;                     // Random Quote
var mSource;                    // The random quote's author.
var mCitation;                  // The citation
var selectedObject;             // The object containing the new quote and source.
// Array of quote objects
var mQuotesAndSourcesArray = [
  {
    quote : "Don't be concerned others not appreciating you."
            + " Be concerned about your not appreciating others.",
    source : "Confucius",
    citation : "Cliches and one-liners Quotes",
    chosen : false
  },
  {
    quote : "You miss 100 percent of the shots you never take.",
    source : "Wayne Getzky",
    chosen : false
  },
  {
    quote : "You must be the change you wish to see in the world.",
    source : "Gandhi",
    chosen : false
  },
  {
    quote : "It is not the strongest of the species that survives, nor the most "
          + "intelligent, but the one most responsive to change.",
    source : "Leon C. Megginson",
    chosen : false
  },
  {
    quote : "If you quit—quitting will become easier and easier for the rest of your life.",
    source : "Osman Minkar",
    chosen : false
  },
  {
    quote : "Growth means change and change involves risk, stepping from the known to the unknown.",
    source : "Benjamin Franklin",
    citation : "Change Quotes",
    chosen : false
  }
];

// Array of colors to be chosen at random
var mBackgroundColors = [
  "red",
  "green",
  "blue",
  "dark-yellow",
  "grey",
  "purple"
]


var counter = 0;           // Keeps track of which numbers were found or not.

// Generates a random number to be used as the index and returns the object at
// that index.
function getRandomQuote() {

  // Generates the Random number to serve as the index.
  mRandomNumber = Math.floor(Math.random() * mQuotesAndSourcesArray.length);

  // This while loop makes sure that each quote is displayed once before
  // repeating them.
  while (mQuotesAndSourcesArray[mRandomNumber].chosen)  {
      // reset all of the chosen properties to false if all quotes were displayed.
      if (counter == mQuotesAndSourcesArray.length) {
        // Loop to reset them all.
        for (var a = 0; a < mQuotesAndSourcesArray.length; a++) {
            mQuotesAndSourcesArray[a].chosen = false;
            counter = 0;
       }
     }
      mRandomNumber = Math.floor(Math.random() * mQuotesAndSourcesArray.length);
  }

  // Increment the counter for each array item that has true for it's chosen
  // property.
  counter++;
  mQuotesAndSourcesArray[mRandomNumber].chosen = true;

  return mQuotesAndSourcesArray[mRandomNumber];
}

setInterval(printQuote, 30000);   // Has it run automatically every 30 seconds.

// Prints the new random quote
function printQuote() {
  // Choses and sets the background-color randomly when the button is pressed.
  document.body.style.backgroundColor
                    = mBackgroundColors[Math.floor(Math.random() * mBackgroundColors.length)];

  selectedObject = getRandomQuote();
  mQuote = selectedObject.quote;
  mSource = selectedObject.source;
  mCitation = selectedObject.citation;
  console.log(mRandomNumber);

  // if there isn't a citation for a given quote, don't print one.
  if (mCitation != null) {
    document.getElementById("quote-box").innerHTML="<p class=\"quote\">"
                                                + mQuote + "</p>"
                                                + "<p class=\"source\">"
                                                + mSource + "<span class=\"citation\">"
                                                + mCitation + "</span></p>";
  } else {
      document.getElementById("quote-box").innerHTML="<p class=\"quote\">"
                                                + mQuote + "</p>"
                                                + "<p class=\"source\">"
                                                + mSource + "</p>";

  }
}
