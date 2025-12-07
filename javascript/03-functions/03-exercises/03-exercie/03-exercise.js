function greet(name) {

  if (!name) {
    console.log('Hi there!');
  } else {
    console.log(`Hello! ${name}`);
  }
}

greet('hello')

/*
function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
}*/

// Best practice version
function convertToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}
console.log(convertToFahrenheit(25));

function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
console.log(convertToCelsius(86));

function convertTemperature(degrees, unit) {
  if (unit === 'F') {
    const temperature = `${convertToCelsius(degrees)}C`;
    console.log(temperature);
  }
  else if (unit === 'C') {
    const temperature = `${convertToFahrenheit(degrees)}F`;
    console.log(temperature);
  } else {
    console.log('Error');
  }
} 

convertTemperature(25, 'C');
convertTemperature(86, 'F');
