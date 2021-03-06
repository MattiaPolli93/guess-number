'use strict';
// Variables
let secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

// Adding "click" event
document.querySelector(".check").addEventListener("click",
function() {
    const guess = Number(document.querySelector(".guess").value);
    
    // When there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "No number!";
        
        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector(".message").textContent = "Well done, you got the Correct Number! 🎉";
        document.querySelector(".number").textContent = secretNumber;
        
        // Background-color and "Correct Number" properties that are displayed when player wins
        document.querySelector("body").className = "bg-green";        
        document.querySelector(".message").className = "properties";
        
        // Highscore feature
        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        
        // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Oops, too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "Nooo you lost the game!";
            document.querySelector(".score").textContent = 0;
        }
        
        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "Nope, too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "Nooo you lost the game!";
            document.querySelector(".score").textContent = 0;
        }
    }
}
);

// Replay button feature
document.querySelector(".again").addEventListener("click",
    function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    
    // Reset features
    document.querySelector(".message").textContent = "Start guessing again...";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    // Style features
    // document.querySelector("body").className = "bg-grey";
    // document.querySelector(".number").className = "width";
    }
);