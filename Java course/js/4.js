let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(a ** parseInt(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(d));
console.log(Math.round(d));
console.log(Math.trunc(d));
console.log(Math.floor(d));

// Use Variables b + d To Get This Valus
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil(b / Math.ceil(d))); // 67 => Number

console.log(-Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER % 10);

let myVar = '100.56789 Views';

console.log(parseInt(myVar)); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

let flt = 10.4;

console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(flt.toFixed(0)); // 10

console.log(Math.floor(Math.random() * 5));
