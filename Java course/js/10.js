let zero = 0;

let counter = 3;

let my = ['Ahmed', 'Mazero', 'Elham', 'Osama', 'Gamal', 'Ameer'];

// Write Code Here
my.length = 4;
my.reverse();

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(-counter, -true)); // ["Elham", "Mazero"]

my.splice(0, 4, 'Elzero');
console.log(my[0]); // "Elzero"

console.log(my[0][4] + zero); // "rO"

let myFriends = ['Ahmed', 'Elham', 'Osama', 'Gamal'];
// eslint-disable-next-line no-unused-vars
let num = 3;

// Method
// myFriends.length = num
// console.log("Your Code Here"); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

let friends = ['Ahmed', 'Eman', 'Osama', 'Gamal'];

// Write Your Code Here
friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

let arrOne = ['C', 'D', 'X'];
let arrTwo = ['A', 'B', 'Z'];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrTwo.concat(arrOne).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = 'Go';
let words = [`${website}ogle`, 'Facebook', ['Elzero', 'Web', 'School']];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

let needle = 'JS';
let haystack = ['PHP', 'JS', 'Python'];

// Write 3 Solutions

let bol = haystack.includes(needle);

bol == true ? console.log('found') : console.log('not found');

let index = haystack.indexOf(needle);

index != -1 ? console.log('found') : console.log('not found');

let arr1 = ['A', 'C', 'X'];
let arr2 = ['D', 'E', 'F', 'Y'];
let allArrs = [];

// Your Code Here
allArrs.unshift(arr2.pop().toLowerCase());
allArrs.unshift(arr1.pop().toLowerCase());
allArrs.unshift(arr2.pop().toLowerCase());
console.log(allArrs.join('')); // fxy
