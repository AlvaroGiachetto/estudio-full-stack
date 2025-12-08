const product = {
  name: 'socks',
  price: 1090
}; // Object
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks'
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);

const product2 = {
  name: 'shirt',
  'delivery-time': '1 day',
  rating: {
    stars: 4.5,
    count: 87
  },
  fun: function function1() { // Method
    return 'function inside object'; 
  } 
};


console.log(product2);
console.log(product2.name);
console.log(product2['name']);

console.log(product2.rating.count);
console.log(product2.fun());

console.log(typeof console.log);


JSON.stringify(product2); // Convert to JSON
const jsonString = JSON.parse(JSON.stringify(jsonString)); // Convert JSON to object


console.log('hello'.length);
console.log('hello'.toUpperCase());

const object1 = {
  message: 'hello'
};
const object2 = object1; // Reference

object1.message = 'Good job!'
console.log(object1);
console.log(object2);

const object3 = {
  message: 'Good job!'
};

console.log(object3 === object1); // Comparing references
console.log(object2 === object1);



const object4 = {
  message: 'Good job!',
  price: 799
};

//const message = object4.message;  Shortcut
const { message, price } = object4; // destructing

console.log(message);
console.log(price);

const object5 = {
  //message: message  Shorthand property
  /*message,
  method: function function1() {
    console.log('method');
  } */
  method() {
    console.log('method'); // Shorthand Method
  }
};

console.log(object5);
object5.method();


