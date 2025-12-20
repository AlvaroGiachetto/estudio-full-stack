const nums = [10, 20, 30];
nums[2] = 40;



function getLastValue(array) {
  const lastIndex = lastIndex[array.length - 1];
  return lastIndex
}
array = [1, 2, 4, 6]
console.log(getLastValue(array));

function arraySwap(array) {
  const lastIndex = array.length - 1;

  // We need to save the values first before
  // swapping. Otherwise, if we swap directly,
  // we would lose one of the values.
  const lastValue = array[lastIndex];
  const firstValue = array[0];

  array[0] = lastValue;
  array[lastIndex] = firstValue;

  return array;
}
console.log(arraySwap([1, 20, 22, 24, 5]));
console.log(arraySwap(['hi', 'hello', 'hey']));

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 0; i--){
  console.log(i);
}

i = 0
while (i <= 8) {
  i += 2;
  console.log(i);
}

function addOne(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + 1);
  }

  return result;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));

function addNum(array, num) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] + num);
  }
  return result;
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));


function addArrays(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }
  return result;
}
console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));


function countPositive(nums) {
  let countPositive = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num > 0) {
      countPositive += 1;
    }
  }
  return countPositive;
}
console.log(countPositive([1, 2, 3]));
console.log(countPositive([-2, -1, 0, 99]));


function minMax(nums) {
  if (nums.length === 0) return { min: null, max: null };

  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    if (nums[i] > max) max = nums[i];
  }

  return { min, max };
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([]));
console.log(minMax([3]));

function countWords(words) {
  const result = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    // result[word] adds/accesses a property using whatever is
    // saved inside the 'word' variable.
    // If word = 'apple', result[word] will do result['apple']
    // If word = 'grape', result[word] will do result['grape']
    if (!result[word]) {
      result[word] = 1;
    } else {
      result[word]++;
    }
  }

  return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));

for (let i = 1; i < 20; i++) {
  const num = i;

  if (num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz');
  } else if (num % 3 === 0) {
    console.log('Fizz');
  } else if (num % 5 === 0) {
    console.log('Buzz');
  }
}


