//objects key value access through, for loop

let arrob1 = [
  { age: 55, name: "eren", city: "france" },
  { age: 64, name: "armin", city: "italy" },
];

for (let i = 0; i < arrob1.length; i++) {
  console.log(arrob1[i].name);
}

//array methods

//map method

let arr1 = [1, 2, 3];

let result = arr1.map((n) => n * 2);
console.log(result);

//filter method

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let even = arr2.filter((n) => n % 2 == 0);

console.log(even);

//string methods

let arr3 = "gatooooooooooooo";

console.log(arr3.toUpperCase());
console.log(arr3.includes("o"));

