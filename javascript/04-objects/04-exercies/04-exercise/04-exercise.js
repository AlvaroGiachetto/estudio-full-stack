const product = {
  name: 'basketball',
  price: 2095
};
console.log(product);

product.price += 500;
console.log(product);

product['delivery-time'] = '3 days';
console.log(product);

function comparePrice(product1, product2) {
  if (product1.price < product2.price) {
    return product1;
  } else {
    return product2;
  }
}

const product1 = {
  name: 'basketball',
  price: 2095
};

const product2 = {
  name: 'socks',
  price: 1090
};

console.log(comparePrice(product1, product2));

function isSameProduct(product1, product2) {
  return (product1 === product2);
}
console.log(isSameProduct(product1, product2));

console.log('Good Morning!'.toLowerCase());

console.log('test'.repeat(2));




