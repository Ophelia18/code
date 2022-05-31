let ip = '2001:db8:3333:4444:5555:6666:7777:8888';

let ipRe =
   /[a-f0-9]{4}:[a-f0-9]{3}:[a-f0-9]{4}:[a-f0-9]{4}:[a-f0-9]{4}:[a-f0-9]{4}:[a-f0-9]{4}:[a-f0-9]{4}/;

console.log(ip.match(ipRe));

let specialNames = 'Os10O OsO Os100O Osa100O Os1000 Os100m';

// Output
// ['Os10O', 'OsO', 'Os100O']

let nameRe = /O[a-z0-9]{1,4}O/g;
console.log(specialNames.match(nameRe));

let phone = '+(995)-123 (4567)';

let phoneRe = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/;
console.log(phone.match(phoneRe));

let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/gi;

let url = 'http://fF--FFf.j-i';

console.log(url.match(re));

let date1 = '25/10/1982';
let date2 = '25 - 10 - 1982';
let date3 = '25 10 1982';
let date4 = '25 10 82';

let re2 = /\d{2}(\/|\s| - )\d{2}(\/|\s| - )\d{2,4}/g; // Write Pattern Here

console.log(date1.match(re2)); // "25/10/1982"
console.log(date2.match(re2)); // "25 - 10 - 1982"
console.log(date3.match(re2)); // "25 10 1982"
console.log(date4.match(re2)); // "25 10 82"

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re3 = /(https?:\/\/)?(www.)?\w+.\w+(:\d{4}\/\w+.php\?id=\d+&\w+=\w+)?/g; // Write Your Pattern Here

console.log(url1.match(re3));
console.log(url2.match(re3));
console.log(url3.match(re));
console.log(url4.match(re3));
console.log(url5.match(re3));
