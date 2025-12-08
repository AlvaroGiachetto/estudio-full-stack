let score = {
  wins: 0,
  losses: 0
};

function playGame(guess) {
  const randomNumber = Math.random();
  let coin = randomNumber < 0.5 ? 'heads' : 'tails';
  let result = (guess === coin) ? 'You Win!' : 'You Lose :(';

  if (result === 'You Win!') {
    score.wins += 1;
  } else {
    score.losses += 1;
  }

  alert(`Your decision: ${guess}, The coin: ${coin}, ${result}
  Wins: ${score.wins} , Losses: ${score.losses}`);
}
