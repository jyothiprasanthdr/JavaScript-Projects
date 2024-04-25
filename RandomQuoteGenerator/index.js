const p = document.getElementById("quote");

const generalQuotes = [
  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The best revenge is massive success. - Frank Sinatra",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "You miss 100% of the shots you don't take. - Wayne Gretzky",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't cry because it's over, smile because it happened. - Dr. Seuss",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke",
  "It's not the size of the dog in the fight, it's the size of the fight in the dog. - Mark Twain",
  "The only constant in life is change. - Heraclitus",
  "Dream as if you'll live forever, live as if you'll die today. - James Dean",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "You must be the change you wish to see in the world. - Mahatma Gandhi",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
];

const usedBucket = new Set();

function generateQuote() {
  if (usedBucket.size >= generalQuotes.length) {
    usedBucket.clear();
  }

  while (true) {
    const randInd = Math.floor(Math.random() * generalQuotes.length);

    if (usedBucket.has(randInd)) {
      continue;
    }

    const quote = generalQuotes[randInd];

    p.innerHTML = quote;
    usedBucket.add(randInd);
    break;
  }
}
