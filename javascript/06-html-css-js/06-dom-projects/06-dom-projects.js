function btnSubscribe() {
  const btnElement = document.querySelector('.js-subscribe-btn');

  if (btnElement.innerText === 'Subscribe') {
    btnElement.innerHTML = 'Subscribed';
    btnElement.classList.add('is-subscribed');
  } else {
    btnElement.innerHTML = 'Subscribe';
    btnElement.classList.remove('is-subscribed');
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  let total = cost;
  if (total < 40 && total > 0) {
    totalError.classList.remove('error');
    total += 10;
    document.querySelector('.js-total-cost')
    .innerHTML = `$${Math.round(total * 100) / 100}`;
  } else if (total < 0) {
    totalError = document.querySelector('.js-total-cost');
    totalError.classList.add('error')
    totalError.innerText = 'Error: cost cannot be less than $0';
  } else {
    totalError.classList.remove('error');
    document.querySelector('.js-total-cost')
    .innerHTML = `$${Math.round(total * 100) / 100}`;
  }

}


function handleCostKeydown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}