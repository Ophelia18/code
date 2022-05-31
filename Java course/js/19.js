let header = document.createElement('div');
header.style.display = 'flex';
header.style.justifyContent = 'space-Between';
header.style.alignItems = 'center';
header.style.padding = '25px';

let logo = document.createElement('div');
logo.textContent = 'Elzero';
logo.style.color = '#23a96e';
logo.style.fontWeight = 'bold';
logo.style.fontSize = '30px';
header.append(logo);

let menu = document.createElement('div');
let ul = document.createElement('ul');
ul.style.display = 'flex';
ul.style.flexDirection = 'row';
ul.style.listStyle = 'none';
let menu2 = ['Home', 'About', 'Services', 'Contact'];
for (let i = 0; i < 4; i++) {
   let li = document.createElement('li');
   li.style.paddingLeft = '20px';
   li.style.fontSize = '20px';
   li.style.color = '#bbb';
   li.textContent = menu2[i];
   ul.append(li);
}

menu.append(ul);
header.append(menu);
document.body.prepend(header);

let products = document.createElement('div');
products.style.backgroundColor = '#ececec';
products.style.padding = '20px';
products.style.display = 'grid';
products.style.gap = '20px';
products.style.gridTemplateColumns = 'repeat(3, 1fr)';

for (let i = 0; i < 15; i++) {
   let span = document.createElement('span');
   span.style.fontSize = '40px';
   span.style.display = 'block';
   span.style.paddingBottom = '20px';
   span.innerHTML = `${i + 1}`;

   let text = document.createTextNode('Product');

   let product = document.createElement('div');
   product.style.paddingTop = '20px';
   product.style.paddingBottom = '20px';
   product.style.display = 'flex';
   product.style.flexDirection = 'column';
   product.style.textAlign = 'center';
   product.style.backgroundColor = 'white';

   product.append(span);
   product.append(text);
   products.append(product);
}

document.body.append(products);

let footer = document.createElement('div');
footer.style.backgroundColor = '#23a96e';
footer.style.padding = '20px';
footer.style.textAlign = 'center';
footer.style.color = 'white';
footer.style.fontSize = '30px';

let footerText = document.createTextNode('Copyright 2021');
footer.append(footerText);

document.body.append(footer);
