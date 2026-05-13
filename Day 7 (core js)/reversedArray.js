//this is only for problem solving practice

function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

let numbers = [1, 2, 3, 4, 5];

let result = [reverseArray(numbers)];

console.log(numbers);

console.log(result);
