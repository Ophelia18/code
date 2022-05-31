let input = document.querySelectorAll('input');
let select = document.querySelector('select');

if (window.sessionStorage.text) {
   input[0].value = window.sessionStorage.getItem('text');
}

if (window.sessionStorage.email) {
   input[1].value = window.sessionStorage.getItem('email');
}

if (window.sessionStorage.number) {
   input[2].value = window.sessionStorage.getItem('number');
}

if (window.sessionStorage.option) {
   select.value = window.sessionStorage.getItem('option');
}

input[0].onblur = function () {
   window.sessionStorage.setItem('text', input[0].value);
};

input[1].onblur = function () {
   window.sessionStorage.setItem('email', input[1].value);
};

input[2].onblur = function () {
   window.sessionStorage.setItem('number', input[2].value);
};

select.onclick = function () {
   window.sessionStorage.setItem('option', select.value);
};
