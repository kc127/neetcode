/*
Here is the set of problems for this sprints (share with Fellows):

Return the reverse of the array
            l r
Input: [1,2,3,4,5,6]
Output: [5,4,3,2,1]


[1,2,3,4,5,6]
Output: [2,1]


Input: []
Output: []

Input:[1]
Output: [1]

Approach 1:
- Left and right pointers
Time: O(N)
Space: O(1)

Approach 2: Iterate backwards and add to new array (not in place)
Time: O(N)
Space: O(N)

Approach 3: Iterate forward and add to new array (not in place)
Time: O(N^2)
Space: O(N)


Sum two arrays, array1 forwards and array2 in reverse

array1 = [1, 2, 3]
array2 = [4, 6, 10]

return [11, 8, 7]
i = 0
i++ = 1

arr.length-1-i = j

Approach 1: In place, one or two pointers
Time: O(N)
Space: O(1)

Approach 2: Extra space, traverse both at same time and push to result
Time: O(N)
Space: O(N)


Given an array of integers, return an array of elements that match their index.

Assumption: create new output array


Approach: Iterate through and find elements that == index, push to result array

Time: O(N)
Space: O(N)

Input: [9,1,2,7]
Output: [1,2]

[0,1,2,3,4,5]

Input: [1, 2, 4]
Output: []

Input: [0, 0]
Output: [0]

Input: []
Output: []

*/
// Victor
function leftRight(arr){
  let i = 0;
  let j = arr.length - 1;
  while(i <= j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
}

// Jose
function backwards(arr) {
  if (arr.length === 0 || arr.length === 1) return arr;
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i]);
  }
  return res;
}

// Ruth
function inPlace(arr1, arr2){
  let length = arr1.length;

  for(let i = 0; i < length; i++){
    arr1[i] += arr2[length - i - 1]
  }
  return arr1;
}

// Amrita
function extraSpace(arr1, arr2)
{
  let i = 0;
  let res = [];
  while(i < arr1.length)
  {
    res[i] = arr1[i] + arr2[arr2.length-1-i];
    i++;
  }
  return res;
}


function matchIndex(arr){
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === i) {
      output.push(i);
    }
  }
  return output;
}

let input = [1,2,3];
let input2 = [0,1,2,3,4,5];
let input3 = [9,0,2,3,100,5];
let input4 = [0]
// let input5 = [0, 0, 0]
// let input5a = [0, 0, 0]

let input6 = [1, -1]

console.log(matchIndex(input))
console.log(matchIndex(input2))
console.log(matchIndex(input3))
console.log(matchIndex(input4))
console.log(matchIndex(input6))




// let input7 = [1, -1]

// console.log(extraSpace(input, input2)) // 11, 8, 7
// console.log(extraSpace(input3, input4)) // 15, 15, 15


// console.log(extraSpace(input5, input5a)) // [0, 0, 0]
// console.log(extraSpace(input6, input7)) // [0, 0]
//console.log(extraSpace(input5, input5)) // [0, 0, 0]

//console.log(extraSpace(input6, input6)) // [0, 0]

// console.log(extraSpace(input, input2))
// console.log(extraSpace(input3, input4))

// console.log(leftRight(input));
// console.log(backwards(input));

// console.log(leftRight(input2));
// console.log(backwards(input2));

// console.log(leftRight(input3));
// console.log(backwards(input3));

// console.log(leftRight(input4));
// console.log(backwards(input4));inPlace, input2