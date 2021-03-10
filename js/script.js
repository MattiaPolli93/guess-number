'use strict';
// Variables
let secretNumber = Math.trunc(Math.random()*25) + 1;
let score = 25;
let highScore = 0;

// Functions
const displayedMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

// Adding "click" event
document.querySelector(".check").addEventListener("click",
function() {
    const guess = Number(document.querySelector(".guess").value);
    
    // When there is no input
    if (!guess) {
        displayedMessage("⛔️ No number selected!");
        // When player wins
    } else if (guess === secretNumber) {
        displayedMessage("Well done, you got the Correct Number! 🎉");
        document.querySelector(".number").textContent = secretNumber;        
        // "Correct Number" properties that are displayed when player wins
        document.querySelector("body").style.backgroundColor = "#60b347";        
        document.querySelector(".message").style.width = "30rem";
        
        // High-Score feature
        if (score > highScore) {
            highScore = score;
            document.querySelector(".high-score").textContent = highScore;
        }
        
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayedMessage(guess > secretNumber ? "Oops, too high!" : "Nope, too low!");
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayedMessage("Nooo you lost the game!");
            document.querySelector(".score").textContent = 0;
        }   
    }
}
);

// Replay button feature
document.querySelector(".again").addEventListener("click",
    function() {
    score = 25;
    secretNumber = Math.trunc(Math.random()*25) + 1;
    
    // Reset features
    displayedMessage("Start guessing again...");
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";

    // Style features on reset
    document.querySelector("body").style.backgroundColor = "#33323f";
    document.querySelector(".number").style.width = "15rem";
    }
);