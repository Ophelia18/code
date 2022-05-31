
var twoSum = function (nums, target) {
   let result = nums.map(function (el, i) {
      let value = target - el;
      let val = nums.lastIndexOf(value);
      return val !== -1 && i < val ? [i, val] : '';
   });
   let res = result.filter(el => el !== '' ? true : false).flat();
   return res;
};

let nums = [3,3];

console.log(twoSum(nums, 6));

///////////////////////////////////////////

var isPalindrome = function (x) {
   let str = x.toString();
   let arr = [...str];
   console.log();

   let reverse = arr.reverse().join('');
   console.log(reverse);

   return x == reverse ? true : false;
};

console.log(isPalindrome(121));

//////////////////////////////////////////////////////

var longestCommonPrefix = function (strs) {
   let result = strs.reduce(function (acc, cur) {
      if (acc === '') return acc;
      for (let i = 0; i < acc.length; i++) {
         if (acc[i] === cur[i])
            continue;
         else
            return cur.slice(0, i) || '';
      }
   });
   return result;
};

let strs = ['flower', 'flow', 'flight'];

console.log(longestCommonPrefix(strs));