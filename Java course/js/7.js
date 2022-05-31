let a = 41;

// if (a < 10) {
//     console.log(10);
// } else if (a >= 10 && a <= 40) {
//     console.log("10 To 40");
// } else if (a > 40) {
//     console.log("> 40");
// } else {
//     console.log("Unknown");
// }

a < 10
   ? console.log(10)
   : a >= 10 && a <= 40
      ? console.log('10 to 40')
      : a > 40
         ? console.log('> 40')
         : console.log('Unknown');

// Write Previous Condition With Ternary If Syntax

let st = 'Elzero Web School';

// W Position May Change
if (st[st.indexOf('W')].toLowerCase() === 'w') {
   console.log('Good');
}

if (st.length !== 'string') {
   console.log('Good');
}

if (typeof st.length === 'number') {
   console.log('Good');
}

if (st.slice(0, 6).repeat(2) === 'ElzeroElzero') {
   console.log('Good');
}

// Test Case 1
let num = 9; // "009"

if (num < 10) {
   console.log(`00${num}`);
}

// Test Case 2
num = 20; // "020"

if (num > 10 && num < 100) {
   console.log(`0${num}`);
}

// Test Case 3
num = 110; // "110"

if (num >= 100) {
   console.log(num);
}

let num1 = 9;
let str = '9';
let str2 = '20';

if (num1 == str) {
   console.log('{num1} Is The Same Value As {str}');
   if (num1 !== str) {
      console.log('{num1} Is The Same Value As {str} But Not The Same Type');
   }
}

if (num1 != str2 || typeof num1 !== typeof str2) {
   console.log('{num1} Is Not The Same Value Or The Same Type As {str2}');
}

if (typeof str2 === typeof str && str != str2) {
   console.log('{str} Is The Same Type As {str2} But Not The Same Value');
}

// Output
('{num1} Is The Same Value As {str}');
('{num1} Is The Same Value As {str} But Not The Same Type');
('{num1} Is Not The Same Value Or The Same Type As {str2}');
('{str} Is The Same Type As {str2} But Not The Same Value');

let num4 = 10;
let num2 = 30;
let num3 = '30';

if (num3 > num4 && typeof num3 !== num2) {
   console.log(
      '30 Is Larger Than 10 And Type string Not The Same Type As number',
   );
   if (num3 == num2) {
      console.log(
         '30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number',
      );
   }
   if (typeof num3 !== typeof num4) {
      console.log(
         '{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}',
      );
   }
}

// Needed Output
('30 Is Larger Than 10 And Type string Not The Same Type As number');
('30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number');
('{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}');
