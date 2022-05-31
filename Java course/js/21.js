let divs = document.querySelectorAll('div');

divs[0].style.cssText = 'margin: auto; padding: 20px; background-Color: #ccc; ';
divs[1].style.cssText =
   'margin: auto; padding: 20px; background-Color: #eee; text-align: center; color: black; font-family: cairo; font-size:16px; font-weight: bold ';

let select = document.querySelectorAll('select');

if (window.localStorage.fontFamily) {
   divs[1].firstElementChild.style.fontFamily =
      window.localStorage.getItem('fontFamily');
   select[0].value = window.localStorage.getItem('fontFamily');
}

if (window.localStorage.fontSize) {
   divs[1].firstElementChild.style.fontSize = `${window.localStorage.getItem(
      'fontSize',
   )}px`;
   select[1].value = window.localStorage.getItem('fontSize');
}

if (window.localStorage.color) {
   divs[1].firstElementChild.style.color = window.localStorage.getItem('color');
   select[2].value = window.localStorage.getItem('color');
}

select[0].onclick = function () {
   divs[1].firstElementChild.style.fontFamily = select[0].value;
   window.localStorage.setItem('fontFamily', select[0].value);
};

select[1].onclick = function () {
   divs[1].firstElementChild.style.fontSize = `${select[1].value}px`;
   window.localStorage.setItem('fontSize', select[1].value);
};

select[2].onclick = function () {
   divs[1].firstElementChild.style.color = select[2].value;
   window.localStorage.setItem('color', select[2].value);
};
