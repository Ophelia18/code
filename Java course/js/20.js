// let prompetMsg = prompt("Print Number From - To", "Ex. 5 - 12");

// let arr = prompetMsg.split("-");

// if (arr[0] < arr[1]) {
//     for (let i = arr[0]; i <= arr[1]; i++) {
//         console.log(i);
//     }
// }
// else {
//     for (let i = arr[1]; i <= arr[0]; i++) {
// 		console.log(i);
// 	}
// }

setTimeout(popup, 3000);

function popup() {
   let msg = document.createElement('div');
   msg.style.cssText =
      'background-Color: #f5f3f4; text-Align: center; width: 600px; height: 100px; margin: auto; position: relative; top: 50vh; padding-top: 40px; padding-bottom: 40px; transform: translateY(-100%)';

   let h2 = document.createElement('h2');
   h2.textContent = 'Welcome';

   let p = document.createElement('p');
   p.textContent = 'Welcome to Elzero Web School';

   let cls = document.createElement('div');
   cls.style.cssText =
      'background-Color: red; border-Radius: 50%; color: white; position: absolute; width: 30px; height: 30px; right: -10px; top: -10px; font-weight: bold; display: flex; justify-content: center; align-items: center';

   cls.textContent = 'x';

   msg.append(h2);
   msg.append(p);
   msg.append(cls);

   document.body.append(msg);

   cls.onclick = function () {
      msg.style.display = 'none';
   };
}

let desc = document.createElement('div');
desc.textContent = '10';
desc.style.cssText =
   'margin: auto; width: 50px; height: 50px; padding: 20px; text-align: center; background-color: pink';

document.body.append(desc);

let counter = setInterval(function () {
   desc.textContent -= 1;
   if (desc.textContent == 5) {
      window.location.href = 'http://elzero.org';

   }
   if (desc.textContent == 0) {
      clearInterval(counter);
      window.open(
         'https://Elzero.org',
         '_blank',
         'width=400,height=400,left=200,top=10',
      );
   }
}, 1000);
