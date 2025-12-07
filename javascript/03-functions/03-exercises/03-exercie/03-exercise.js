function greet(name) {

  if (!name) {
    return 'Hi there!';
  } else {
    return `Hello! ${name}`;
  }
}

greet('hello')

function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log(convertToFahrenheit(25));
console.log(convertToCelsius(86));

function convertTemperature(degrees, unit) {
  if (unit === 'F') {
    return `${convertToCelsius(degrees)}C`;
  }
  else if (unit === 'C') {
    return `${convertToFahrenheit(degrees)}F`;
  } 
} 

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));

function convertLength(length, from, to) {
// I like to put invalid checks at the top since it's a bit
// easier to see. Also, if something is invalid, we can skip
// the rest of the function.
if (from !== 'km' && from !== 'miles' && from !== 'ft') {
    return `Invalid unit: ${from}`;
} else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
    return `Invalid unit: ${to}`;
}

if (from === 'km' && to === 'miles') {
    return `${length / 1.6} ${to}`;

} else if (from === 'km' && to === 'ft') {
    return `${length * 3281} ${to}`;
  
} else if (from === 'miles' && to === 'km') {
    return `${length * 1.6} ${to}`;

} else if (from === 'miles' && to === 'ft') {
    return `${length * 5280} ${to}`;

} else if (from === 'ft' && to === 'km') {
    return `${length / 3281} ${to}`;

} else if (from === 'ft' && to === 'miles') {
    return `${length / 5280} ${to}`;

// You can also do if (from === 'km' && to === 'km) { ... }
// if (from === to) is a trick you can use to save some code.
} else if (from === to) {
    return `${length} ${to}`;
}
}

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));

console.log(convertLength(5, 'lbs', 'lbs'));

