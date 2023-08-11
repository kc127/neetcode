/*
Coding Drills: Recursion on Arrays

Recursion is certainly not the easiest approach to all of the following problems. However, it's useful to apply recursion on really easy problems to really understand the core pattern. Use recursion to write code for the following problems:


Sum all the elements in an array ([3,1,2,3,1] => 10)

Remove all target elements from an array ([3, 2, 1, 2, 3], 2 => [3,1,3])

Return true if an array has palindrome values ([3, 2, 1, 2, 3] => true, [3, 2, 1] => false)

Shift the elements in an array by 1 and move the last element to the first ([1, 2, 3, 4] => [4, 1, 2, 3])


*/

function removeTargets(arr, k, result = [], i = 0) {
  if (arr == null) {
    return null
  }

  if (i < arr.length) {
    return removeTargets(arr, k, pushIfNotTarget(result, arr[i], k), i + 1)
  }
  return result
}

function pushIfNotTarget(arr, el, k) {
  if (el != k) {
    arr.push(el)
  }
  return arr
}

// [3, 2, 1, 2, 3] // 2
function removeTargets(arr,k, i =0) {
  if(arr.length === 0) return;
  if(i === arr.length ) return;
  const el = arr[i];
  if(el === k) {
    arr.splice(i, 1);
    i--
  }
  removeTargets(arr,k, i+1);
}
const arr1= [3, 2, 1, 2, 3]
removeTargets(arr1, 2)
console.log(arr1) // [3,1,3]
const arr2= []
removeTargets(arr2, 2)
console.log(arr2) // []
const arr3= [1,2,3]
removeTargets(arr3, 4)
console.log(arr3) // [1,2,3]
const arr4= [1,1,1,1]
removeTargets(arr4, 1)
console.log(arr4) // [1,2,3]
// console.log(removeTargets([1,2,3], 4)) // [1,2,3]
// console.log(removeTargets(null, 1)) // null
// console.log(removeTargets([1,1,1,1], 1)) // []

// function shiftArray(arr, result=[]) {
//   if(arr.length <= 0) return result;
//   const [first, ...rest] = arr;
//   if(arr.length === 1) {
//     result.unshift(first);
//     return result;
//   }
//   result.push(first);
//   return shiftArray(rest, result)
// }

//Shift the elements in an array by 1 and move the last element to the first ([1, 2, 3, 4] => [4, 1, 2, 3])
/*
      1, 2, 3, 4
      i
        i
            i
              i
*/
function shiftArray(arr, i = 0) {
  // base case - when i is at the end, remove and unshift
  if (arr.length === 0) {
    return arr;
  }
  if (i === arr.length - 1) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
  }
  // recursive case
  return shiftArray(arr, i + 1);
}

// console.log(shiftArray([1,2,3,4]))
// console.log(shiftArray([1,2]))
// console.log(shiftArray([1]))
// console.log(shiftArray([]))

//Return true if an array has palindrome values ([3, 2, 1, 2, 3] => true, [3, 2, 1] => false)
/*
  [3, 2, 1, 2, 3]
   i           j
      >   <

*/
function isPalindrome(array, i = 0, j = array.length - 1) {
  if (i > j ) {
    return array[i] === array[j];
  }

  return array[i] === array[j] && isPalindrome(array, i + 1, j - 1);
}

// console.log(isPalindrome([3, 2, 1, 2, 3]), ' expect true');
// console.log(isPalindrome([3, 2, 1]), ' expect false');
// console.log(isPalindrome([2, 1, 1, 2]), ' expect true');
// console.log(isPalindrome([1]), ' expect true');
// console.log(isPalindrome([]), ' expect true');

function sum(arr) {
  if(arr.length === 0) return 0;

  return arr[0] + sum(arr.slice(1));

}

// console.log(sum([1,2,3,4]));
// console.log(sum([1,2]));
// console.log(sum([1]));
// console.log(sum([]));