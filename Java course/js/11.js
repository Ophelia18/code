// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// // 10;
// // 20;
// // 30;
// // 50;
// // 60;
// // 70;
// // 80;
// // 90;
// // 100;

// for (let i = start; i <= end; i += start) {
//     if (i === exclude) continue;
// 	console.log(i);
// }

// let start = 10;
// let end = 0;
// let stop = 3;

// Output
// 10;
// 09;
// 08;
// 07;
// 06;
// 05;
// 04;
// 03;

//

// let start = 1;
// let end = 6;
// let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// --4

// for (let i = start; i <= end; i++) {
//     console.log(i);
//     for (let j = breaker; j < end;) {
//         console.log(`-- ${j}`);
//         j += breaker;
//     }
// }

// let index = 10;
// let jump = 2;
// let end = 0;

// for (let i = index; i > end; ) {
// 	// Write Your Code Here
//     if (i < jump * jump) break;
//     console.log(i);
//     i -= jump;
// }

// Output
// 10;
// 8;
// 6;
// 4;

// let letter = "a";
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];

// // Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");

// let j = 1;
// for (let i = 0; i < friends.length; i++) {

//     if (friends[i].includes(letter.toUpperCase))
//         continue;

//     if (friends[i].includes(letter)) {

//         console.log(`${j} => ${friends[i]}`);
//         j++;
//     }
//     else
//         continue;
// }

// let start = 0;
// let swappedName = 'elZerO';

// // Output
// // ("ELzERo");

// let swapped = swappedName.split('');
// for (let i = start; i < swappedName.length; i++) {
//    if (swapped[i] === swapped[i].toUpperCase()) {
//       swapped[i] = `${swapped[i].toLowerCase()}`;
//       console.log(swappedName[i]);
//    } else swapped[i] = `${swapped[i].toUpperCase()}`;
// }

// console.log(swapped.join(''));

let start = 0;
let mix = [1, 2, 3, 'A', 'B', 'C', 4];

// Output
// 2;
// 3;
// 4;

for (let i = start; i < mix.length; i++) {

   if (typeof(mix[i]) == 'string' || mix[i] == 1)
      continue;
   else
      console.log(mix[i]);
}
