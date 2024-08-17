

function startGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  // console.log("Random number:", randomNumber);

  const userInput = document.getElementById('user').value;
  const userGuess = parseInt(userInput);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert("Invalid input. Please enter a number between 0 and 10.");
    return;
  }

  const resultElement = document.getElementById('result'); // Assuming an element with id 'result'

  if (userGuess < randomNumber) {
   resultElement.innerHTML = `Too low! Try again. <br> Computer Guess: ${randomNumber}`;
  } else if (userGuess > randomNumber) {
    resultElement.innerHTML = `Too High! Try again. <br> Computer Guess: ${randomNumber}`;
  } else {
    resultElement.innerHTML = `Congratulations! <br> You Guessed the correct number. <br> Computer Guess: ${randomNumber}`;
  }
}



function reloadPage() {
  window.location.reload();
}



// Step 1: Generate a random number between 1 and 10
// let randomNumber = Math.floor(Math.random() * 10) + 1;

// Step 2: Initialize a variable to store the user's guess
// let userGuess = 0;

// Step 3: Use a loop to keep asking the user for a guess until they get it right
// while (userGuess !== randomNumber) {
  // Step 4: Prompt the user to enter a guess
  // userGuess = parseInt(prompt('Guess a number between 1 and 10:'), 10);

  // Step 5: Check the user's guess and provide feedback
  // if (userGuess < randomNumber) {
  //   alert('Too low! Try again.');
  // } else if (userGuess > randomNumber) {
  //   alert('Too high! Try again.');
  // } else {
  //   alert('Congratulations! You guessed the correct number.');
  // }
// }