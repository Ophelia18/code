document.write('<h1>Elzero</h1>');

document.querySelector('h1').style.color = 'blue';
document.querySelector('h1').style.fontSize = '80px';
document.querySelector('h1').style.fontWeight = 'bold';
document.querySelector('h1').style.textAlign = 'center';
document.querySelector('h1').style.fontFamily = 'Arial';

console.log(
   '%cElzero %cWeb %cSchool',
   'color: red; font-size: 40px',
   'color: green; font-weight: bold; font-size: 40px',
   'font-size: 40px; color: white; background-color: blue'
);

console.group('Group 1');
console.log('message one');
console.log('message two');
console.group('Child Group');
console.log('message one');
console.log('message two');
console.group('Grand Child Group');
console.log('message one');
console.log('message two');
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group('Group 2');
console.log('message one');
console.log('message two');

console.table(['Marwa', 'Dalia', 'Samia']);

