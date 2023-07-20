/*
❓ PROMPT
Given an array of ints, compute recursively if there's a value immediately followed by that value times 10. We'll use the convention of considering only the part of the array that begins at the given index. In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.

Example(s)
array10x([1, 2, 20], 0) == True
array10x([3, 30], 0) == True
array10x([3], 0) == False

*/
function array10x(nums, index) {
  if (index >= nums.length - 1) {
    return false;
  }

  return nums[index] * 10 === nums[index + 1] || array10x(nums, index+1)
}

console.log(array10x([1, 2, 20], 0) === true)
console.log(array10x([3, 30], 0) === true)
console.log(array10x([3], 0) === false)
console.log(array10x([], 0) === false)
console.log(array10x([3, 3, 30, 4], 0) === true)
console.log(array10x([2, 19, 4], 0) === false)
console.log(array10x([20, 2, 21], 0) === false)
console.log(array10x([20, 2, 21, 210], 0) === true)
console.log(array10x([2, 200, 2000], 0) === true)
console.log(array10x([0, 0], 0) === true)
console.log(array10x([1, 2, 3, 4, 5, 6], 0) === false)
console.log(array10x([1, 2, 3, 4, 5, 50, 6], 0) === true)
console.log(array10x([1, 2, 3, 4, 5, 51, 6], 0) === false)
console.log(array10x([1, 2, 3, 4, 4, 50, 500, 6], 0) === true)