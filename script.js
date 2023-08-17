const quotes = [
    "Basic elements: harmony, melody, rhythm, dynamics.",
    "Think about the thing behind what you're trying to create.",
    "Keep learning.",
    "Cascade.",
    "7/4 timing is exciting.",
    "Does it feel true to you?",
    "Reverse.",
    "Use an old idea. Frankenstein.",
    "Finish what you started.",
    "You can only make one dot at a time.",
    "Accretion.",
    "Have fun. Riff.",
    "Courage.",
    "Which stage are you in? Seed-collection, experimentation, craft, completion.",
    "No input, no output.",
    "Drink water. Take a break."
    // Add more quotes here
];

const quoteDisplay = document.getElementById('quoteDisplay');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

quoteDisplay.addEventListener('click', () => {
    quoteDisplay.textContent = getRandomQuote();
});

// Display an initial random quote when the page loads
quoteDisplay.textContent = getRandomQuote();