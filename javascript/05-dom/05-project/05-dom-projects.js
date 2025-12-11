function btnSubscribe() {
  const btnElement = document.querySelector('.js-subscribe-btn');

  if (btnElement.innerText === 'Subscribe') {
    btnElement.innerHTML = 'Subscribed';
  } else {
    btnElement.innerHTML = 'Subscribe';
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  let total = cost;
  if (total < 40) {
    total += 10;
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${Math.round(total * 100) / 100}`;
}


function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}