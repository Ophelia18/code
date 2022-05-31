let a = 10;
let b = '20';
let c = 80;

console.log(++a + +b++ + +c++ - +a++); // 11 + 20 + 80 - 11 = 100
console.log(++a + -b + +c++ - -a++ + +a); // 13 + -21 + 81 + 13 + 14 = 100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); // 81 + 21 + 13 * 21 - 22 * 13 + 12 - 1
// 81 + 21 + 273 - 286 + 12 - 1 =100

let d = '-100';
let e = '20';
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * e); // 2000
console.log((-d * e) % f); // 173

console.log(10 * 20 + 15 + 3 + 190 - 10 - 400); // 0

let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(++num + --num - true); // 6

// Soultion Three
console.log(num * num - num); // 6

// Soultion Four
console.log(num - -num); // 6

// Solution Five
console.log(num ** --num - ++num); // 6

// Solution Six
console.log(num++ + --num); // 6

let num1 = '10';

// Solution One
console.log(num1 * (true + true)); // 20

// Solution Two
console.log(++num1 + --num1 - true); // 20

// Solution Three
console.log(); // 20

// Solution Four
console.log(); // 20
