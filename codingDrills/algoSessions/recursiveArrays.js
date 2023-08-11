/*

Typically two types of recursion =>
Tail Recursion (where last operation is a recursive call)
 AND
 Recursive Backtracking (example below at the every end)

Recursive function components:
1. Base case
2. General logic
3. Recursive call

Given an integer array and an integer, find whether the integer exists in the array. Return a boolean.

[1,2,3,4], target=5 -> false
[1,2,3,4], target=1 -> true

for (let i = 0; i < arr.length; i++){
  // logic
}

1. index >= arr.length -> return false
2. if target is found -> return true
3. recursive call with different index parameter


*/


function searchInteger(arr, target, index = 0) {
  if (index >= arr.length) return false;

  if (arr[index] === target) return true;

  return searchInteger(arr, target, index + 1);

}

// const array1 = [1, 2, 3, 4, 5];
// console.log(searchInteger(array1, 3)); // Output: true
// console.log(searchInteger(array1, 6)); // Output: false


/*
Given an integer array and an integer, return how many times the integer exists in the array.

[1,2,3,1], target=1 -> return 2
[1,2,3,4], target=7 -> return 0

1. index >= arr.length -> return 0
2. if target is found -> increment counter
3. recursive call with different index parameter

Approach 1:
Assign parameter called count
1,2,3,4,3 target = 3
function (arr, target, index, count)

1-> count = 0
2-> count = 0
3-> count = 1
4-> count = 1 -> 2
3-> count = 2 -> 2
out of bounds -> base case -> return 2

Involves returning true count at the very end instead of 0

1. Base case -> if index>=length, return count
2. If target is found -> increment counter
3. return recursiveCall()

Approach 2:
No global variable or count parameter
function (arr, target, index)
1,2,3,4,3 target = 3

1-> recurse on rest of array
2-> recurse
3-> return 1+recurse
4-> recurse
3-> return 1+recurse
out of bounds -> return 0

1-> 0+ recurse on rest of array -> 2
2-> 0+ recurse -> 2
3-> return 1+recurse() -> 1 + 1 -> 2
4-> recurse() -> 1
3-> return 1+recurse() -> 1 + 0 -> 1
out of bounds -> return 0

1. Base case -> if index>=length,
2. If target is found ->



function(){
  return 1 + Math.max(..., ...)
}


*/

function countTarget1(arr,target,index=0, count=0) {
  if(index >= arr.length){
    return count;
   }
   if(arr[index] === target){ //increment counter
      count+=1
   }
   return countTarget1(arr,target,index+1,count)
}

function countTarget(arr, target, index=0) {
  if (index >= arr.length) {
    return 0;
  }

  if (arr[index] === target) {
    return 1 + countTarget(arr, target, index + 1);
  }

  return countTarget(arr, target, index + 1);
}


// // Example usage:
// const array2 = [1, 2, 2, 3, 2, 4];
// console.log(countTarget(array2, 2)); // Output: 3
// console.log(countTarget(array2, 5)); // Output: 0

// console.log(countTarget1(array2, 2)); // Output: 3
// console.log(countTarget1(array2, 5)); // Output: 0



/*
Find mean of an integer array

[1,2,3]
1+2+3 / (3) = 6/3 = Output -> 2

[], return 0

mean = sum/length

1. Base case -> arr.length > 0 or empty array
   - empty array -> return 0
   - general case -> return sum/arr.length

return recurse(arr, index+1, sum+arr[index])


[1,2,3]
sum up all the values
1-> 1
2-> 3
3-> 6
out of bounds -> 6/3

[]
out of bounds -> return 0
sum = 0, arr.length = 0



*/

function findMeanRecursive(arr, index = 0, sum = 0) {
  if (arr.length === 0) {
    return 0;
  }

  if (index === arr.length) {
    return sum/arr.length;
  }

  return findMeanRecursive(arr, index + 1, sum + arr[index]);
}

const array3 = [1, 2, 3, 4, 5];
console.log(findMeanRecursive(array3)); // Output: 3


/*

EXAMPLE OF A RECURSIVE BACKTRACKING PROBLEM 

main function (){

  return backtracking()

}


backtracking(...){

  base case

  for (i = 0 ... ){
    take step
    backtrack()
    undo step
  }
  return
}


*/