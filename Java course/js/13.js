function sayHello(theName, theGender) {
   // Your Code Here
   if (theGender == 'Male') console.log(`Hello Mr ${theName}`);
   else if (theGender == 'Female') console.log(`Hello Miss ${theName}`);
   else console.log(`Hello ${theName}`);
}

// Needed Output
sayHello('Osama', 'Male'); // "Hello Mr Osama"
sayHello('Eman', 'Female'); // "Hello Miss Eman"
sayHello('Sameh'); // "Hello Sameh"

function calculate(firstNum, secondNum, operation) {
   // Your Code Here
   if (secondNum === undefined) {
      console.log('Second Number Not Found');
      return;
   }

   if (operation === 'add' || operation === undefined)
      console.log(firstNum + secondNum);
   else if (operation === 'subtract') console.log(firstNum - secondNum);
   else if (operation === 'multiply') console.log(firstNum * secondNum);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600

function ageInTime(theAge) {
   // Your Code Here
   if (theAge > 100 || theAge < 10) console.log('Age out of Range');
   else {
      console.log(`Monthes = ${theAge * 12}`);
      console.log(`Weeks = ${theAge * 52}`);
      console.log(`Days = ${theAge * 365}`);
      console.log(`Hours = ${theAge * 365 * 24}`);
      console.log(`Minutes = ${theAge * 365 * 24 * 60}`);
      console.log(`Seconds = ${theAge * 365 * 24 * 60 * 60}`);
   }
}

ageInTime(1); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function multiply(...nums) {
   let sum = 1;

   for (let i = 0; i < nums.length; i++) {
      if (typeof nums[i] === 'string') continue;
      sum *= parseInt(nums[i]);
   }
   console.log(sum);
}

multiply(10, 20); // 200
multiply('A', 10, 30); // 300
multiply(100.5, 10, 'B'); // 1000

function createSelectBox(startYear, endYear) {
   // Your Code Here
   document.write('<select>');
   for (let i = startYear; i <= endYear; i++) {
      document.write(`<Option value="${i}">${i}</option>`);
   }
   document.write('</select>');
}

createSelectBox(2000, 2021);

function checkStatus(a, b, c) {
   let arr = [a, b, c];
   let userName = 'k';
   let age = 0;
   let ava = true;

   for (let i = 0; i < arr.length; i++) {
      switch (typeof arr[i]) {
      case 'string':
         userName = arr[i];
         break;
      case 'number':
         age = arr[i];
         break;
      case 'boolean':
         ava = arr[i];
         break;
      }
   }
   if (ava)
      console.log(
         `Hello ${userName}, Your Age is ${age} You Are Available For Hire`,
      );
   else
      console.log(
         `Hello ${userName}, Your Age is ${age} You Are Not Available For Hire`,
      );
}

// Needed Output
checkStatus(false, 'Osama', 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
checkStatus('Osama', 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, 'Osama', true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, 'Osama'); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
