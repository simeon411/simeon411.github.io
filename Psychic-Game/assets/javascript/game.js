
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var pastGuesses = [];
var availableLetters = "abcdefghijklmnopqrstuvwxyz";
var currentLetter;


reset();

document.onkeyup = function(event) {

	var userGuess = event.key;

	

	//Check that guess is a valid guess
	if (availableLetters.indexOf(userGuess) > -1){
		//Check that the letter has not been guessed before.  If it has, output message
		if(pastGuesses.indexOf(userGuess) > -1){
			document.querySelector("#sysMsgs").innerHTML = ("You guessed " + userGuess + " already, please try again.");
		}
		// If it has not been guessed before, add current guess to pastGuesses array,
		// and output nothing in "sysMsgs" selector.
		else{
			
			pastGuesses.push(userGuess);
			document.querySelector("#sysMsgs").innerHTML = ("");
			// If the user guess is correct, increment wins counter, and reset game.
			if (userGuess === currentLetter){
				wins++;
				reset();
			}
			// If guess is in correct, remove 1 life.
			else{
				guessesLeft--;
			}
		}
	}
	//If the guess is an invalid character, output message.
	else {
		document.querySelector("#sysMsgs").innerHTML = ("That's an invalid character, please try again.");
	}
	
	//When guesses is zero, increment losses, and reset game.
	if (guessesLeft === 0){
		losses++;
		reset();
	}

    document.querySelector("#showWins").innerHTML = "Wins: " + wins;
    document.querySelector("#showlosses").innerHTML = "Losses: " + losses;
    document.querySelector("#showguessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.querySelector("#showpastGuesses").innerHTML = "Your guesses so far: " + pastGuesses;
}


//Reset the game by selecting a new random character, resetting guees to 10, and zeroing out pastGuesses
function reset(){
	currentLetter = availableLetters[Math.floor(Math.random() * availableLetters.length)];
	guessesLeft = 10;
	pastGuesses = [];


}

//Start the game by writing hmtl to screen.
//Called by onload of body tag in html
function startGame(){
	document.querySelector("#instructions").innerHTML = "Guess what letter I'm thinking of";
	document.querySelector("#showWins").innerHTML = "Wins: " + wins;
    document.querySelector("#showlosses").innerHTML = "Losses: " + losses;
    document.querySelector("#showguessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
    document.querySelector("#showpastGuesses").innerHTML = "Your guesses so far: " + pastGuesses;
}