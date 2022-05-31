let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];

// Elzero
let result = mix.map(function (el) {
   return typeof el === 'string' ? el : '';
}).reduce(function (acc, current) {
   return `${acc + current}`;
});

console.log(result);

// let myString = 'EElllzzzzzzzeroo';

// // Elzero
// let result2 = myString
//    .split('')
//    .filter(function (el, index) {
//       return el != myString[index + 1];
//    })
//    .join('');

// console.log(result2);

let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];

// Elzero

let newArr = myArray.reduce(function (acc, el) {
   if (Array.isArray(el)) {
      el = el.join('');
   }
   return acc + el;
});
console.log(newArr);

let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C'];

// [-1, -10, 10, 20, -5, -3]

let letters = numsAndStrings.filter(function (el) {
   return typeof el === 'number';
}).map(function (el) {
   return -el;
});

console.log(letters);

let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let result4 = nums.reduce(function (acc, el) {
   return el % 2 ? acc + el : acc * el;
}, 1);

console.log(result4);

let myString = '1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z';

let solution = myString.split(',').filter(function (el) {
   return (isNaN(parseInt(el)));
}).join('').slice(true, myString.length).split('_').reduce(function (acc, el) {
   return `${acc} ${el}`;
});

console.log(solution); // Elzero Web School
