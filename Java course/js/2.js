let theTitle = 'Elzero',
   theDes = 'Elzero Web School',
   theDate = '25/10';

let markup = `<div>
   <h2>Hello ${theTitle}</h2>
   <p>${theDes}</p>
   <span>${theDate}</span>
</div>`;

document.write(markup.repeat(4));

// document.write(markup);
// document.write(markup);
// document.write(markup);

let numOne = 10;
let numTwo = 20;

console.log('10' + '20');
console.log(typeof '1020');
console.log(`${numOne}${numTwo}`);
console.log(typeof '1020');
console.log('20' + '\n' + '10');
console.log(`${numTwo}
${numOne}`);

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log(
   '`I\'m In' +
      '\n' +
      '\\\\' +
      '\n' +
      'Love \\\\ """ \'\'\'' +
      '\n' +
      '++ with ++' +
      '\n' +
      '\\"""\\"""' +
      '\n' +
      '""JavaScript""``',
);

let a = 21;
let b = 20;

console.log('_' + (a + '_' + b).repeat(4) + '_'); // _21_2021_2021_2021_20_
