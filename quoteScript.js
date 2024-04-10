const inspirationalQuotes = [
    "The only way to learn a new programming language is by writing programs in it. - Dennis Ritchie",
    "The best way to predict the future is to invent it. - Alan Kay",
    "Simplicity is the soul of efficiency. - Austin Freeman",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it. - Patrick McKenzie",
    "The most important skill for a programmer is the ability to effectively Google the error message you’re getting. - Unknown",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The art of programming is the skill of controlling complexity. - Marijn Haverbeke",
    "It's not at all important to get it right the first time. It's vitally important to get it right the last time. - Andrew Hunt and David Thomas",
    "You might not think that programmers are artists, but programming is an extremely creative profession. It's logic-based creativity. - John Romero",
    "In programming, the hard part isn't solving problems, but deciding what problems to solve. - Paul Graham"
];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function quoteAlert() {
    console.log("Button Clicked!");
    let randomGen = getRandomInt(inspirationalQuotes.length); 
    alert(inspirationalQuotes[randomGen]); 
}