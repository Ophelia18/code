let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(Array.from(setOfNumbers)[setOfNumbers.size - 1]);

///////////////////////////////////////////////////

let myFriends = ['Osama', 'Ahmed', 'Sayed', 'Sayed', 'Mahmoud', 'Osama'];

// Needed Output
// (4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];

console.log(Array.from(new Set(myFriends.sort())));

/////////////////////////////////////////////////////////

let myInfo = {
   username: 'Osama',
   role: 'Admin',
   country: 'Egypt',
};

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let map = new Map(Object.entries(myInfo));
// map.set(Object.keys(myInfo)[0], myInfo.username)
// map.set(Object.keys(myInfo)[1], myInfo.role)
// map.set(Object.keys(myInfo)[2], myInfo.country)

console.log(map);
console.log(map.size);
console.log(map.has('role'));

//////////////////////////////////////////////////////////////////

let theNumber = 100020003000;

// Needed Output
// 123;

let mySet = new Set(theNumber.toString());

console.log(
   [...mySet]
      .filter(function (el) {
         return el != false;
      })
      .join(''),
);

//////////////////////////////////////////////////////////////////////

let theName = 'Elzero';

// Needed Output
// ["E", "l", "z", "e", "r", "o"];

console.log([...theName]);
console.log(theName.split(''));
console.log([...new Set(theName)]);
console.log(Array.from(theName));
console.log();

///////////////////////////////////////////////////////////////////////////

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output
// [1, 2, 3, 4, 5, 6];
console.log(numsOne.concat(numsTwo));
console.log([...numsOne, ...numsTwo]);
console.log([...new Set(numsOne).add(...numsTwo)]);
// console.log(Array.from(numsOne, numsTwo));
console.log(Array.from([numsOne, numsTwo]).flat());

numsOne.push(...numsTwo);
console.log(numsOne);

////////////////////////////////////////////////////////////////////////

let chars =  ['Z', 'Y', 'A', 'D', 'E', 10, 1];

let numbers = [];

let newChars = chars.filter(function (e) {
   if (typeof e === 'number') numbers.push(e);
   return typeof e === 'string';
});
let newArr = numbers.concat(newChars);
console.log(newArr);
newArr.copyWithin(0, numbers.length, numbers.length * 2);
console.log(newArr);

// Needed Output
// ["A", "B", "C", "A", "B", "C", "D", "E"];
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// // Needed Output
// ["A", "B", "C", "D", "A", "B", "C", "D", "E"];
// let chars = ["Z", "Y", "A", "D", "E", 10, 1];

// // Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"];

//////////////////////////////////////////////////////////////////////////////////////////

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

// Needed Output
// 210

console.log([...n1, ...n2].length * Math.max(...n2));
