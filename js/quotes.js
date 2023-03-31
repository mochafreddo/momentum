// Array of quotes
const quotes = [
  {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: 'Thomas Edison',
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    author: 'Robert Frost',
  },
  {
    quote: 'The best way to predict the future is to invent it.',
    author: 'Alan Kay',
  },
  {
    quote: 'Life is 10% what happens to us and 90% how we react to it.',
    author: 'Charles R. Swindoll',
  },
  {
    quote: 'If you want to lift yourself up, lift up someone else.',
    author: 'Booker T. Washington',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote: 'The only true wisdom is in knowing you know nothing.',
    author: 'Socrates',
  },
  {
    quote: 'We must be the change we wish to see in the world.',
    author: 'Mahatma Gandhi',
  },
];

// DOM elements
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// Select a random quote
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Set the quote and author in the DOM
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
