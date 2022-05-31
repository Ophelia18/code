let friends = ['Ahmed', 'Sayed', 'Ali', 1, 2, 'Mahmoud', 'Amany'];
let index1 = 0;
let counter = 0;

// Output
// ("1 => Sayed");
// ("2 => Mahmoud");

while (counter < friends.length) {
   if (friends[counter][0] !== 'A' && typeof friends[counter] === 'string') {
      index1++;
      console.log(`${index1} => ${friends[counter]}`);
   }
   counter++;
}

let myAdmins = ['Ahmed', 'Osama', 'Sayed', 'Stop', 'Samera'];
let myEmployees = [
   'Amgad',
   'Samah',
   'Ameer',
   'Omar',
   'Othman',
   'Amany',
   'Samia',
   'Anwar',
];

let i = 0;
let x = 0;
let index = 0;
let j = 0;
while (myAdmins[i] !== 'Stop') {
   x++;
   i++;
}
document.write(`<div>We Have ${x} Admins</div>
<hr>
`);

for (let i = 0; i < x; i++) {
   document.write(
      `<div> The Admin for team ${i + 1} Is ${
         myAdmins[i]
      } <h3>Team Members</h3>`,
   );
   index = 0;
   j = 0;
   while (j < myEmployees.length) {
      if (myEmployees[j][0] === myAdmins[i][0]) {
         index++;
         document.write(`<p>- ${index} ${myEmployees[j]} </p>`);
      }
      j++;
   }
   // eslint-disable-next-line quotes
   document.write(`<hr> </div>`);
}
