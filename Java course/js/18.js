// let par = document.querySelector("p");
// par.remove();

// let start = document.createElement("div");
// let end = document.createElement("div");
// let element = document.querySelector(".our-element");

// start.className = start;
// end.className = end;
// start.textContent = "Start";
// end.textContent = "End";

// start.title = "start element";
// end.title = "end element";

// start.setAttribute("date-value", "start");
// end.setAttribute("date-value", "end");

// element.before(start);
// element.after(end);

// let element = document.querySelector("div");

// console.log(element.lastChild);

// document.addEventListener("click", (e) => {
//         console.log(`This is ${e.target.tagName}`);
//     });

let add = document.querySelector('.classes-to-add');
let remove = document.querySelector('.classes-to-remove');
let element = document.querySelector('.current');
let classes = document.querySelector('.classes-list').lastElementChild;
let result = {};
add.onblur = function () {
   if (add.value !== '') {
      let c = add.value.toLowerCase().split(' ');
      for (let i = 0; i < c.length; i++) {
         element.classList.add(c[i]);
      }
      add.value = '';
      newFunction();
   }
};

remove.onblur = function () {
   if (remove.value !== '') {
      let c = remove.value.toLowerCase().split(' ');
      for (let i = 0; i < c.length; i++) {
         element.classList.remove(c[i]);
      }
      remove.value = '';
      newFunction();
   }
};

function newFunction() {
   while (classes.firstChild) {
      classes.removeChild(classes.firstChild);
   }
   if (element.classList.length === 0)
      classes.textContent = 'No Classes to show';
   let arr = [...element.classList].sort();

   for (let i = 0; i < arr.length; i++) {
      result = document.createElement('div');
      result.textContent = arr[i];
      result.style.backgroundColor = '#fc601a';
      result.style.paddingLeft = '20px';
      result.style.paddingRight = '20px';
      result.style.paddingTop = '10px';
      result.style.paddingBottom = '10px';
      result.style.borderRadius = '5px';
      result.style.textAlign = 'center';
      result.style.width = 'fit-content';
      result.style.display = 'inline-block';
      result.style.color = 'white';
      result.style.fontWeight = 'bold';
      result.style.marginLeft = '40px';
      result.style.marginBottom = '20px';
      classes.append(result);
   }
}
