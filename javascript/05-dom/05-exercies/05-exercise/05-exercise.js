console.log(document.querySelector('button'));
document.querySelector('.js-change-btn').innerHTML = '9b done!'

function playerChose(move) {
  if (move === 'heads' || move === 'tails') {
    document.querySelector('.js-display')
      .innerHTML = `You chose: ${move}`;
  }
}

function displayName() {
  const inputElement = document.querySelector('.js-name-input')
  let name = inputElement.value
  document.querySelector('.js-display-name')
    .innerHTML = `Your name is: ${name}`;
}

function handleNameKeydown(event) {
  if (event.key === 'Enter') {
    displayName();
  }
}

function displayText() {
  const inputElement = document.querySelector('.js-text-input')
  let text = inputElement.value
  document.querySelector('.js-text-output')
    .innerHTML = text;
}