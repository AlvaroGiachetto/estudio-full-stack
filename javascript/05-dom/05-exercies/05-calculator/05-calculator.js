let calculation = localStorage.getItem('calculation') || '';

const display = document.querySelector('.js-display');

function displayCalculation() {
  display.innerHTML = calculation;
}

function updateCalculation(value) {
  calculation += value;
  localStorage.setItem('calculation', calculation);
  displayCalculation();
}

function evaluateCalculation() {
  try {
    const result = new Function('return ' + calculation)();
    calculation = result.toString();
    displayCalculation();
    localStorage.setItem('calculation', calculation);
  } catch (e) {
    display.innerHTML = 'Error';
  }
}

function clearCalculation() {
  calculation = '';
  localStorage.setItem('calculation', calculation);
  displayCalculation();
}

displayCalculation();
