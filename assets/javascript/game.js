alert("Can you guess the name of the restaurant?")
alert("How come my other alerts and funcions dont work")

// List of words for game. (arrays and vars)
var wordOptions = ["mcdonalds", "burgerking", "tacobell", "deltaco", "pizzahut", "arbys", "leessandwiches", "papajohns", "starbucks", "subway", "wienerschnitzel", "inandout", "carlsjr", "wendys", "jackinthebox", "dominos"];
var choosenWord = "";
var lettersInside = [];
var blankNum = 0;
var blanket = [];
var wrongGuesses = [];

// Counter for Game/ Stats
var guessesLeft = 5;
var winCounts = 0;
var loseCounts = 0;

// Functions for the Game!
function game () {
    choosenWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInside = choosenWord.split("");
    blankNum = lettersInside.length;
    console.log();

    // reset
    guessesLeft = 5;
    wrongGuesses = [];
    blanket = [];
    
    for(var i = 0; i < blankNum; i ++){
        blanket.push("_");
    }

    document.getElementById("lose").innerHTML = loseCounts;    
    
    game();
    
    }

    document.onkeyup = function(event) {
        var guessesLeft = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(guessesLeft);
        finishedRound;
        console.log(guessesLeft); 

    document.getElementById("words").innerHTML = blanket.join(" ");
    document.getElementBtId("guess").innerHTML = guessesLeft;
    document.getElementById("wins").innerHTML = winCounts;
    document.getElementById("lose").innerHTML = loseCounts;

    // for debugging purpose!
    console.log(choosenWord);
    console.log(lettersInside);
    console.log(blankNum);
    console.log(blanket);

}

function checkLetters(letter) {
    var islettersInside = false;
    for(var i = 0; i < blankNum; i ++){
       if(choosenWord[i] == letter) {
           islettersInside = true;
       } 
    }       


    if(islettersInside) {
    for(var i = 0; i < blankNum; i++) {
        if(choosenWord[i] == letter) {
            blanket[i] = letter;

        }

    }      

}

    else {
        wrongLetters.push(leter);
        guessesLeft --
    }

console.log(blanket);



function finishedRound() {
    console.log("Win Counts:"  + winCounts +  "| Loss Counts:" + loseCounts +  "| Guesses Left" + guessesLeft);

   document.getElementById("guess").innerHTML = guessesLeft;
   document.getElementById("words").innerHTML = blanket.toString.join("_ _");
   document.getElementById("wrong").innerHTML = wrongGuesses.join(" ");
    
    if(lettersInside.toString() == blanket.toString()) {
    winCounts++;
    alert("Winner!");
    
    document.getElementById("win").innerHTML = winCounts;
    
    game();
}

    else if (guessesLeft == 0) {
        loseCounts++;
        alert("You lost!");


    document.getElementById("lose").innerHTML = loseCounts;    
    
    game();
    
    }
}
    document.onkeyup = function(event) {
        var letterguGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(lettersGuessed);
        finishedRound;
        console.log(lettersGuessed); 

}


}
