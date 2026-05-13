//Combine Function + Array

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  //sum = 0 + array[0] => 0+1 (1 is the value we put in parameter) = 1 (this is sum)
  //sum = 1 + array[1] => 1+2 (2 is the value we put in parameter) = 3 (this is sum)
  //sum = 3 + array[2] => 3+3 (3 is the value we put in parameter) = 6 (this is sum)
  //sum = 6 + array[3] => 6+4 (4 is the value we put in parameter) = 10 (this is sum)
  //sum = 10 + array[4] => 10+5 (5 is the value we put in parameter) = 15 (this is sum)

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
