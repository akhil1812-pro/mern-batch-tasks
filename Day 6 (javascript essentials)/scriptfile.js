function showAlert() {
  alert("hello THIS IS TESTING ON BUTTON");
}

let name = "Akhil";
let age = "22";
let city = "Mumbai";

console.log(name);
console.log(age);
console.log(city);

let yourname = prompt("Enter your name");
let yourage = prompt("Enter your age");

alert("Hey, " + yourname);
alert("Your Age is " + yourage);

if (yourage >= 18) {
  alert("You are Eligible for Vote");
} else {
  alert("You are not Eligible for Vote");
}


for(let i = 1; i<=10; i++){
  alert("printing numbers to study for loop - " + i)
}