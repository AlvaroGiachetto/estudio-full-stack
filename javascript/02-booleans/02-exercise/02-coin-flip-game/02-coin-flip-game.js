const randomNumber = Math.random();
let result = '';
const guess = 'tails';

if (randomNumber < 0.5) {
  result = 'heads';
} else {
  result = 'tails';
}
final = (guess === result ? 'You Win! ' : 'You Lose :(');
console.log(`Your decision: ${guess}, The coin: ${result}, ${final}`);


