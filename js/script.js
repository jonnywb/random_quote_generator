/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Quotes array contains objects with 'quote', 'source', 'citation' and 'year' keys.
***/
const quotes = [
  {'quote': 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', 
  'source': 'Martin Fowler', 'citation': 'Refactoring: Improving the Design of Existing Code', 'year': 1999, 'tags': ['programming', 'coding']},
  {'quote': 'Experience is the name everyone gives to their mistakes.',
   'source': 'Oscar Wilde', 'citation': 'Lady Windermere\'s Fan', 'year': 1892, 'tags': ['life', 'general']},
  {'quote': 'Knowledge is power.', 'source': 'Sir Francis Bacon', 'year': 1597, 'tags': ['life', 'general']}, // No Citation
  {'quote': 'Code is like humor. When you *have* to explain it, it’s bad.', 'source': 'Cory House', 
  'citation': 'Twitter', 'year': 2013, 'tags': ['programming', 'coding']},
  {'quote': 'Don\'t comment bad code - rewrite it.', 'source': 'Brian Kernighan',
   'citation': 'The Elements of Programming Style', 'tags': ['programming', 'coding']}, //No Year
   {'quote': 'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.',
   'source': 'Patrick McKenzie', 'citation': 'Twitter', 'year': 2016} //No Tags
];


/***
 * The getRandomQuote function takes an array of objects
 * and returns a random object from the array.
***/
function getRandomQuote(list) {
  let randomNum = Math.floor(Math.random() * list.length)
  return list[randomNum]
};


/** Exceeds - changeBackgroundColor uses 3 random numbers (max 193) to set an rgb background */
function changeBackgroundColor() {
  let bg1 = Math.floor(Math.random() * 193)
  let bg2 = Math.floor(Math.random() * 193)
  let bg3 = Math.floor(Math.random() * 193)
  document.body.style.backgroundColor = `rgb(${bg1}, ${bg2}, ${bg3})`;
}

/***
 * The printQuote function calls getRandomQuote with the quotes array.
 * Next, it creates an html template literal, and inserts the values from the random object.
 * The citation, tags and year will only be added if they exist.
 * Finally the function ends by setting the innerHTML of the quoteBox to the
 * contents of the quoteHTML variable and triggers the changeBackgroundColor function.
***/
function printQuote() {
  let quote = getRandomQuote(quotes);
  let quoteHTML = `
    <p class="quote">${quote['quote']}</p>
    <p class="source">${quote['source']}`
  
  if (quote['citation']) {
    quoteHTML += `
    <span class="citation">${quote['citation']}</span>`;
  }

  if (quote['year']) {
    quoteHTML += `<span class="year">${quote['year']}</span>`;
  }

  if (quote['tags']) {
    tags = quote['tags'];
    quoteHTML += `<br><ul class="tags">`;
    for ( let i = 0; i < tags.length; i++ ) {
      quoteHTML += `<li class="tag">${tags[i]}</li>`;
    }
    quoteHTML += `</ul>`;
  }
  
  quoteHTML += `</p>`;

  changeBackgroundColor()
  document.getElementById('quote-box').innerHTML = quoteHTML;
}


/***
 * printQuote is finally ran when the EventListener detects a click on the 'load-quote' button.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);


/***
 * Striggers printquote using interval of 10000ms
 */
setInterval(printQuote, 10000);