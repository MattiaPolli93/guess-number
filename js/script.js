'use strict';

// Adding "click" event
document.querySelector(".check").addEventListener("click",
    function() {
    const guess = Number(document.querySelector(".guess").value);
    console.log (guess);    
}
);

