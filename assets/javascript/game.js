//game begins//

//number of wins is set to 0//
var wins = 0;

//array of words you can pick from//

var carList = [
  "dominic",
  "racing",
  "toretto",
  "loyalty",
  "cars",
];

//word is picked from carList and split into characters//

var wordindex = 0;

var word = carList[wordindex];

var wordarray = word.split("");

var state = new Array(wordarray.length).fill('_');

// letters guessed is index of 0 //

var guessedLetters = [];

//game begins with variable at 0//

updateGame();

//function logs which key user chooses//

document.onkeyup = function(userkey) {
  console.log(userkey.key);

  if (guessedLetters.indexOf(userkey.key) !== -1) {
    console.log(guessedLetters);
    return;
  }

  guessedLetters.push(userkey.key);

  if (wordarray.indexOf(userkey.key) !== -1) {

    wordarray.forEach(function(item, i) {
      if (item == userkey.key) state[i] = userkey.key
    });
  }

  if (guessedLetters.length == 15) {
    resetGame();
    return;
  }

  if (state.indexOf('_') == -1) {
    wins++;
    resetGame();
  }

  updateGame();

}

//function to reset the game variables to 0//

function resetGame() {
  wordindex++;
  word = carList[wordindex];
  wordarray = word.split("");
  state = new Array(wordarray.length).fill('_');
  guessedLetters = [];
  console.log(wordindex);
}

//function to update the html//

function updateGame() {

  var winsDiv = document.getElementById("wincount");
  winsDiv.innerHTML = wins;

  var guessesRemaining = 15 - guessedLetters.length;

  var guessDiv = document.getElementById("guesscount");
  guessDiv.innerHTML = guessesRemaining;

  var lettersDiv = document.getElementById("userletters");
  lettersDiv.innerHTML = guessedLetters;

  var stateDiv = document.getElementById("guess");
  stateDiv.innerHTML = state.join(' ');

}
