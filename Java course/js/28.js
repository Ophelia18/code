let date = new Date('Nov, 2, 81');
let now = new Date();

let age = now - date;

console.log(age);
console.log(age / 1000);
console.log(age / 1000 / 60);
console.log(age / 1000 / 60 / 60);
console.log(age / 1000 / 60 / 60 / 24);
console.log(age / 1000 / 60 / 60 / 24 / 365);



let date2 = new Date('jan, 1, 80');
date2.setSeconds(1);
console.log(date2);

// Needed Output
//"Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"



let date3 = new Date();
date3.setDate(0);
console.log(date3);
console.log(`Previous Month is ${date3.getMonth() + 1} and last day is ${date3.getDate()}`);
// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"

////////////////////////////////

let d1 = new Date('Nov, 2, 1981');
console.log(d1);
let d2 = new Date('1981-11-2');
console.log(d2);
// Needed Output

// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"

const t0 = performance.now();

for (let i = 0; i < 100000; i++){
   document.write(`${i}`);
}

const t1 = performance.now();

console.log(`${((t1 - t0) / 1000).toFixed(2)}`);


/////////////////////////////////////////////////////////////////


// Write Your Generator Function Here

function* gen() {
   let i = 14;
   while (true) {
      yield i;
      i++;
   }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}

////////////////////////////////////////////

function* genNumbers() {
   yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
   yield* ['A', 'B', 'B', 'B', 'C', 'D'];
}

// Write Your Generator Function Here

function* genAll() {

   let numSet = new Set();
   let letterSet = new Set();
   for (let num of genNumbers()) {
      numSet.add(num);
   }

   for (let lett of genLetters()) {
      letterSet.add(lett);
   }

   yield* numSet;
   yield* letterSet;

}

let gen1 = genAll();

console.log(gen1.next()); // {value: 1, done: false}
console.log(gen1.next()); // {value: 2, done: false}
console.log(gen1.next()); // {value: 3, done: false}
console.log(gen1.next()); // {value: 4, done: false}
console.log(gen1.next()); // {value: 5, done: false}
console.log(gen1.next()); // {value: "A", done: false}
console.log(gen1.next()); // {value: "B", done: false}
console.log(gen1.next()); // {value: "C", done: false}
console.log(gen1.next()); // {value: "D", done: false}

//////////////////////////////////////////////////////////////////////


