/*
Problem:

Given an array of positive integers, find the first element that occurs k number of times. If no element occurs k times, return -1. You may assume k is greater than 0.

Examples:
• Given an array: [1, 2, 2, 3, 3], k: 2 // returns 2
• Given an array: [], k: 1 // returns -1

Solution 1: HashMap/Dictionary
-- 1a. Until element of k frequency is found, build HashMap
-- 1b. Or length of array

Solution 2: Check other elements for k occurrences

*/

// time = O(k), space = O(n)
function optimalHash(arr, k){
  let hash = {}

  for (let i = 0; i < arr.length; i++){
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1
    } else {
      hash[arr[i]]++
    }

    if (hash[arr[i]] === k){
      return arr[i]
    }
  }
  return -1
}

// time = O(n), space = O(n)
function regularHash(arr, k){
  let freqMap = {};

  for (let elem of arr) {
    if (!freqMap[elem]) {
      freqMap[elem] = 1;
    } else {
      freqMap[elem]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (freqMap[elem] === k) {
      return elem;
    }
  }
  return -1;
}

// time = O(n^2), space = O(1)
function nonOptimal(arr, k){
  for(let i = 0; i < arr.length; i++){
    let counter = 1;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] === arr[j]){
        counter++;
      }
    }
    if(counter === k){
      return arr[i];
    }
  }
  return -1;
}

let arr1 = [9, 5, 6, 1, 2,2, 3, 3, 3]
let arr2 = []
let arr3 = [56,89,69,56,96,89]
let arr4 = [1,2,3,4,5]
let arr5 = [2, 2, 2]
let arr6 = [2, 2, 2,4,4] // k = 2


console.log(optimalHash(arr1, 3), ' expect 3');
console.log(optimalHash(arr2, 2), ' expect -1');
console.log(optimalHash(arr3, 2), ' expect 56');
console.log(optimalHash(arr4, 2), ' expect -1');
console.log(optimalHash(arr5, 2), ' expect 2');