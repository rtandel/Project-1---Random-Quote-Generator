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
    citation : "Cliches and one-liners Quotes"
  },
  {
    quote : "You miss 100 percent of the shots you never take.",
    source : "Wayne Getzky"
  },
  {
    quote : "You must be the change you wish to see in the world.",
    source : "Gandhi"
  },
  {
    quote : "It is not the strongest of the species that survives, nor the most "
          + "intelligent, but the one most responsive to change.",
    source : "Leon C. Megginson"
  },
  {
    quote : "If you quit—quitting will become easier and easier for the rest of your life.",
    source : "Osman Minkar"
  },
  {
    quote : "Growth means change and change involves risk, stepping from the known to the unknown.",
    source : "Benjamin Franklin",
    citation : "Change Quotes"
  }
];

var mBackgroundColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "grey",
  "purple"
]



function getRandomQuote() {
  mRandomNumber = Math.floor(Math.random() * mQuotesAndSourcesArray.length);
  return mQuotesAndSourcesArray[mRandomNumber];
}

function printQuote() {

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
