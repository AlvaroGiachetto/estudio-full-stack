let words = ['hello', 'world', 'search', 'good', 'search'];
let index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    // Once we find 'search', immediately exit
    // the loop since we want the index of the
    // first appearance of 'search'.
    break;
  }
}

console.log(index);

words = ['not', 'found'];
index = -1;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    index = i;
    break;
  }
}

console.log(index);


function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      // Instead of creating an accumulator
      // variable and updating it in the loop,
      // we can just return i directly, when
      // we find it since this is a function.
      return i;
    }
  }

  // If the function has not returned by now,
  // logically that means the word must not
  // exist in the array, so we'll return -1.
  return -1;
}

function removeEgg(foods) {
  // To prevent modifying the original array, we
  // can create a copy of the array using .slice()
  const foodsCopy = foods.slice();
  const reversedFoods = foodsCopy.reverse();

  // Advanced technique:
  // Since foods.slice() results in an array, we
  // can also use .reverse() directly like this:
  // foods.slice().reverse();
  
  // This technique is called "method chaining"
  // because we use one method after another
  // (like a chain of methods).
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < reversedFoods.length; i++) {
    if (reversedFoods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(reversedFoods[i]);
  }

  return result.reverse();
}

const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
console.log(removeEgg(foods));
console.log(foods);