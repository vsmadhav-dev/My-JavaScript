let randomNumber = Math.floor(Math.random() * 50) + 1;
let guess = prompt("Guess a number between 1 and 50: ");
while ( randomNumber != guess) {
 guess = prompt("Guess a number between 1 and 50 your guess was wrong: ");
}
console.log("Congratulations your guess is correct " , guess);