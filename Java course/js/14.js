// function getDetails(zName, zAge, zCountry) {
// 	function namePattern(zName) {
// 		let fName = zName.slice(0, zName.indexOf(" "));
// 		let lName = zName.slice(zName.indexOf(" "), zName.length);
// 		return `${fName} ${lName[1].toUpperCase()}.`;
// 	}

// 	function ageWithMessage(zAge) {
// 		// Write Your Code Here
// 		// 38 Is My Age => Your Age Is 38
// 		// 32 Is The Age => Your Age Is 32
// 		let index = zAge.indexOf(" ");
// 		let message = `Your Age is ${zAge.slice(0, index)}`;
// 		return message;
// 	}
// 	function countryTwoLetters(zCountry) {
// 		// Write Your Code Here
// 		// Egypt => You Live In EG
// 		// Syria => You Live In SY
// 		return `You live in ${zCountry.slice(0, 2).toUpperCase()}`;
// 	}
// 	function fullDetails() {
// 		// Write Your Code Here
// 		return `Hello  ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
// 	}
// 	return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY

// function urlCreate(protocol, web, tld) {
//     return `${protocol}://www.${web}.${tld}`;
// }

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// // function itsMe() {
// //     return `Iam A Normal Function`;
// // }

// let itsMe = (_) => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// function checker(zName) {
//     return function (status) {
//         return function (salary) {
//             return status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//     	};
//     };
// }

let checker = (zName) => (status) => (salary) =>
   status === 'Available'
      ? `${zName}, My Salary Is ${salary}`
      : 'Iam Not Avaialble';

console.log(checker('Osama')('Available')(4000)); // My Salary Is 4000
console.log(checker('Ahmed')('Not Available')()); // Iam Not Avaialble

function specialMix(...data) {
   // Your Code Here
   let sum = 0;
   for (let i = 0; i < data.length; i++) {
      if (Number.isInteger(parseInt(data[i]))) {
         sum += parseInt(data[i]);
      }
   }

   if (sum === 0)
      return 'All Is Strings';
   else
      return sum;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix('10Test', 'Testing', '20Cool')); // 30
console.log(specialMix('Testing', '10Testing', '40Cool')); // 50
console.log(specialMix('Test', 'Cool', 'Test')); // All Is Strings
console.log(specialMix(0, 0, 0));

/*
   Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...data) {
//   // Parameter ?
//     return `String [${data[0]}], [${data[1]}], [${data[2]}], [${data[3]}] => Done !`
// };

let names = (...data) => `String [${data.join('], [')}] => Done!`;



console.log(names('Osama', 'Mohamed', 'Ali', 'Ibrahim'));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => `${one + two + nums[0]}`;

function calc(one, two, ...nums) {
   return `${one + two + nums[0]}`;
}

console.log(calc(10, myNumbers[3], myNumbers[2])); // 80
