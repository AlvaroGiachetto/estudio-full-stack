function function1 () {
  console.log('hello');
  console.log(2 + 2);
  
}

function1();
function1();


// Parameters
function calculateTax(cost, taxPercent = 0.1) {
  console.log(cost * texPercent);
}

calculateTax(2000, 0.25);
calculateTax(5000); // tax 0.1 Default