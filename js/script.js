// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

var mRandomNumber;              // The Random Number
var mQuote;                     // Random Quote
var mSource;                    // The random quote's author.
var mCitation;                  // The citation
var mYear;                      // The year the quote was stated.
var selectedObject;             // The object containing the new quote and source.
// Array of quote objects
var quotes = [
  {
    quote : "Don't be concerned others not appreciating you."
            + " Be concerned about your not appreciating others.",
    source : "Confucius",
    citation : "Cliches and one-liners Quotes",
    year : 1398, // The dates were not listed
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
    year : 1998, // The dates were not listed
    chosen : false
  },
  {
    quote : "Growth means change and change involves risk, stepping from the known to the unknown.",
    source : "George Shinn",
    citation : "Change Quotes",
    year : 1987,  // The dates were not listed 
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
  mRandomNumber = Math.floor(Math.random() * quotes.length);

  // This while loop makes sure that each quote is displayed once before
  // repeating them.
  while (quotes[mRandomNumber].chosen)  {
      // reset all of the chosen properties to false if all quotes were displayed.
      if (counter == quotes.length) {
        // Loop to reset them all.
        for (var a = 0; a < quotes.length; a++) {
            quotes[a].chosen = false;
            counter = 0;
       }
     }
      mRandomNumber = Math.floor(Math.random() * quotes.length);
  }

  // Increment the counter for each array item that has true for it's chosen
  // property.
  counter++;
  quotes[mRandomNumber].chosen = true;

  return quotes[mRandomNumber];
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
  mYear = selectedObject.year;
  console.log(mRandomNumber);

  // if there isn't a citation or a year for a given quote, don't print one.
  if (mCitation != null && mYear != null) {
    document.getElementById("quote-box").innerHTML="<p class=\"quote\">"
                                                + mQuote + "</p>"
                                                + "<p class=\"source\">"
                                                + mSource + "<span class=\"citation\">"
                                                + mCitation + "</span>" +
                                                "<span class=\"year\">"
                                                 + mYear + "</span></p>";
  } else if (mCitation != null){
    document.getElementById("quote-box").innerHTML="<p class=\"quote\">"
                                                + mQuote + "</p>"
                                                + "<p class=\"source\">"
                                                + mSource + "<span class=\"citation\">"
                                                + mCitation + "</span></p>";

  } else if (mYear != null) {
    document.getElementById("quote-box").innerHTML="<p class=\"quote\">"
                                                + mQuote + "</p>"
                                                + "<p class=\"source\">"
                                                + mSource + "<span class=\"year\">"
                                                + mYear + "</span></p>";

  }  else {
    document.getElementById("quote-box").innerHTML="<p class=\"quote\">"
                                              + mQuote + "</p>"
                                              + "<p class=\"source\">"
                                              + mSource + "</p>";
  }
}
