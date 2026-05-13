//Default function or Normal function

function yoo() {
  console.log("how are you?");
}

yoo();

//Functions with parameter

function addition(a, b) {
  console.log(a + b);
}

addition(5, 5);

//Functions with return value
//you ask your friend "give sum of 2+3"
//your friend calculates and return the answer = 5

function returnfunc(a, b) {
  return a + b;
}

console.log(returnfunc(5, 40));

//Arrow function

let test = (a, b) => {
  return a - b;
};

console.log(test(15, 5));

//Arrow function #2

let op = (a, b) => {
  console.log(a + b);
};

op(10, 2);

//Arrow function more shorter way

let test2 = (a, b) => a * b;
console.log(test2(5, 10));
