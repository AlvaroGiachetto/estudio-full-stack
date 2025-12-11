let cartQuantity = 0
const display = document.querySelector('.js-display')

function showCartQuantity() {
  display.innerHTML = `Cart quantity: ${cartQuantity}`;
}

function resetCartQuantity() {
  cartQuantity = 0;
  display.innerHTML = `Cart was reset.`
}

function updateCartQuantity(change) {
  if (cartQuantity + change > 10) {
    display.innerHTML = 'The cart is full.';
    return;
  }

  if (cartQuantity + change < 0) {
    display.innerHTML = 'Not enough items in the cart.';
    return;
  }

  cartQuantity += change;
  showCartQuantity();
}