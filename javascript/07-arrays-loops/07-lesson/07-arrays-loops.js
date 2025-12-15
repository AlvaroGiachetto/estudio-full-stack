const myArray = [10, 20, 30];

// First Value
myArray[0]

myArray[0] = 11;

console.log(myArray);

[1, 'hello', true, { name: 'socks' }, [1, 2]]

Array.isArray([1, 2])
myArray.length


// Add at the end
myArray.push(100);

//  Remove index - value
myArray.splice(0, 1);

let i = 1;

while (i <= 5) {
  console.log(i);
  i++; 
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let randomNumber = 0;
while (randomNumber < 0.5) {
  randomNumber = Math.random();
}

console.log(randomNumber);

const todoList = [
  'make dinner',
  'wash dishes',
  'watch youtube'
];


for (let i = 0; i < todoList.length; i++) {
  const value = todoList[index];
  console.log(value); 
}

const nums = [1, 2, 3];
const total = 0;

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num;
}

const numsDoubled = [];
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  numsDoubled.push(num * 2); // add in the list
}
