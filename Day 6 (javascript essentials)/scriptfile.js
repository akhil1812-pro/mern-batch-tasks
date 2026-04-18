function showAlert(){
    alert("hello")
}

let name = "Akhil"
let age = "22"
let city = "Mumbai"

console.log(name)
console.log(age)
console.log(city)

let yourname = prompt("Enter your name")
let yourage = prompt("Enter your age")

alert("Hey, " + yourname)
alert("Your Age is " + yourage)

let agenew = 20


if (agenew>=18) {
    console.log("You are Eligible for Vote")
    
} else {
    console.log("You are not Eligible for Vote")
    
}