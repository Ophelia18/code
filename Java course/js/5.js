let a = 'Elzero Web School';

// Include This Method In Your Solution [slice, charAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// 8 H
console.log(a[13].toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.split(' ', 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${a.substr(0, 6)}  ${a.substr(-6)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
   a[0].toLowerCase() +
      a.slice(1, a.length - 1).toUpperCase() +
      a[a.length - 1].toLowerCase(),
); // eLZERO WEB SCHOOl

let userName = 'Elzero';
console.log(userName[3]); // e
console.log(userName.charAt(3)); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.substr(3, 1)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.split('z', 1)); // eee

let word = 'Elzero';
let letterZ = 'z';
let letterE = 'e';
let letterO = 'O';

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
