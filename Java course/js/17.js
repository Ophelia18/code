// for (let i = 0; i < 100; i++){
// 	let myElement = document.createElement("div");
// 	let heading = document.createElement("h3");
// 	let par = document.createElement("p");
// 	let textHeading = document.createTextNode(`product ${i + 1}`);
// 	let textPara = document.createTextNode(`description ${i + 1}`);

// 	myElement.className = "product";
// 	heading.appendChild(textHeading);
// 	par.appendChild(textPara);

// 	myElement.appendChild(heading);
// 	myElement.appendChild(par);

// 	// document.body.appendChild(myElement);
// }

// let myElement = document.body.childNodes[0]

// console.log(myElement);

// for (let i = 0; i < 10; i++){

//     let myImg = document.images[i];
//     myImg.src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     myImg.alt = "Elzero Logo";
//     console.log(document.images[i]);
// }

// let dollar = document.querySelector("[type = 'number']");
// let result = document.querySelector(".result");

// dollar.onkeyup = function () {
//     result.textContent = `${dollar.value} USD  = ${(dollar.value * 15.6).toFixed(2)} EGP`;
// }

// dollar.onclick = function () {result.textContent = `${dollar.value} USD  = ${(dollar.value * 15.6).toFixed(2)} EGP`;
// };

// dollar.onmouseleave = function () {
// 	result.textContent = `${dollar.value} USD  = ${(
// 		dollar.value * 15.6
// 	).toFixed(2)} EGP`;
// };

// let one = document.querySelector('.one');
// let two = document.querySelector('.two');

// one.textContent = two.textContent;

// two.textContent = `${one.getAttribute('title')} 2`;

// let img = document.querySelectorAll("body > img");

// for (let i = 0; i < img.length; i++) {
//     if (img[i].hasAttribute("alt")) {
//         img[i].alt = "Old";
//     }
//     else {
//         img[i].alt = "Elzero New";
//     }
// }

let btn = document.querySelector('[value=\'Create\']');
let num = document.querySelector('[type=\'number\']');
let text = document.querySelector('[type=\'text\']');
let type = document.querySelector('select');
let results = document.querySelector('.results');
let result = {};

results.style.paddingTop = '50px';

btn.onclick = function (e) {
   e.preventDefault();

   document.querySelectorAll('.box').forEach((el) => {
      el.style.display = 'none';
   });

   for (let i = 0; i < num.value; i++) {
      if (type.value === 'Div') result = document.createElement('div');
      else result = document.createElement('section');

      result.className = 'box';
      result.id = `id- ${i + 1}`;

      result.textContent = text.value;
      result.style.backgroundColor = '#fc601a';
      result.style.paddingLeft = '50px';
      result.style.paddingRight = '50px';
      result.style.paddingTop = '10px';
      result.style.paddingBottom = '10px';
      result.style.borderRadius = '5%';
      result.style.textAlign = 'center';
      result.style.width = 'fit-content';
      result.style.display = 'inline-block';
      result.style.color = 'white';
      result.style.fontWeight = 'bold';
      result.style.marginLeft = '40px';
      result.style.marginBottom = '20px';
      results.appendChild(result);
   }
};
