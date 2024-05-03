// index.js - Lab 8 - Anon Functions and Callbacks
// Author: Sam Atilano <batilano@ucsc.edu>
// Date: 6 May

function isEven(x) {
    return (x % 2 ==0);
}


console.log("Is 1 even?", isEven(1));
console.log("is 2 even?", isEven(2));
console.log("Is 16 even?", isEven(16));
console.log("Is 25 even?", isEven(25));

array = [20, 40, 3, 569, 1038]
console.log("My array", array);

var result = array.map(isEven);

console.log("Test of eveness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})

console.log("Squareroot of array:", result);