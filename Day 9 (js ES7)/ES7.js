//Arrow function
const multiply = (a,b) => a*b;
console.log(multiply(5,5));

//Template Literals
let name = "max";
let age = 25;

console.log(`Hello ${name} you are ${age} years old`);

//Deconstructing

let user = {
    name1: "john",
    city: "goa"
};

let {name1,city}=user;

console.log(name1);