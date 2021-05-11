var all_letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 var random_element = all_letters[Math.floor(Math.random() * all_letters.length)];
 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var inputarray = [];
 
 function guessesLeftn() {
     document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
 
 }

 function Guesses() {
    document.querySelector("#sofar").innerHTML = "Your Guesses so far: " + inputarray.join(',');
}

 document.onkeyup = function(event) {
     guessesLeft=guessesLeft-1;
 
     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
 
     inputarray.push(userGuess);
     guessesLeftn();
     Guesses();
 
     if (userGuess === random_element){
         wins++;
         document.querySelector("#wins").innerHTML = "Wins: " + wins;
         restart();
     } 
     else if (guessesLeft === 0) {
         losses++;
         document.querySelector("#loses").innerHTML = "Loses: " + losses;
         restart();
     }
   };

   var restart = function() {
    inputarray=[];
    guessesLeft = 9;
    var random_element = all_letters[Math.floor(Math.random() * all_letters.length)];
}