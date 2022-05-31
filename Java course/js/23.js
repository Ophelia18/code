let ad = document.querySelector('.add');
let tasks = document.querySelector('.tasks');
let ls = [];

ad.style.cssText =
   'background-Color: #e8e8f9; border-Radius: 5px; width: 800px; padding: 20px; text-Align: center; margin: 20px auto 40px';
tasks.style.cssText =
   'background-Color: #e8e8f9; border-Radius: 5px; padding: 20px; margin: auto; width: 800px';

let input = document.querySelector('.add :first-child');
let btn = document.querySelector('.add :last-child');

input.style.cssText =
   'width: 500px; height: 40px; margin: 20px; border: 0px; border-radius: 5px; outline: 0; font-size: 20px; padding-left: 20px';

btn.style.cssText =
   'background-color: #ea482a; color: white; padding: 10px; width: 80px; border-Radius: 5px; border: 0px';

if (window.localStorage.tasks) {
   ls = window.localStorage.tasks.split(',');
   buildTasks(ls);
}

btn.onclick = function () {
   if (input.value !== '') {
      ls.push(input.value);
      window.localStorage.tasks = ls;
      input.value = '';
      buildTasks(ls);
   }
};

function buildTasks(ls) {
   while (tasks.children.length !== 0) {
      tasks.firstElementChild.remove();
   }
   for (let i = 0; i < ls.length; i++) {
      let task = document.createElement('div');
      let del = document.createElement('button');
      let text = document.createElement('span');
      text.textContent = ls[i];
      del.textContent = 'Delete';
      task.style.cssText =
         'width: 700px; height: 30px; border-radius: 5px; margin: 20px auto; background-color: white; display: flex; justify-content: space-between; padding:10px; align-items: center';
      del.style.cssText =
         'background-color: #ea482a; color: white; border-Radius: 5px; border: 0px; padding: 5px';
      task.append(text);
      task.append(del);
      tasks.append(task);

      del.onclick = function () {
         let remove = del.previousElementSibling.textContent;
         ls.splice(ls.indexOf(remove), 1);
         window.localStorage.tasks = ls;
         del.parentElement.remove();
      };
   }
}
