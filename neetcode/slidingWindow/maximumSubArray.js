/* Maximum Subarray

Given an array, find the subarray with the maximum sum

-2 1 -3 4 -1 2 1 -5 4 returns 6
   l
      r

  left        right       range       currSum             maxSum
   0            1         [-2, 1]      -2+1 = -1          max(-1, -inf) = -1
   0            2         [-2, 1, -3]   -1 + -3 = -4

   create two pointers left and right initialized to 0
   create a map with sum as key and left/right as value
   create a currSum, initialize to 0
   create a maxSum
   maxLeft, maxRight
   while right is within the array range
      add arr[right] to currSum
      if currSum > maxSum
          maxSum = currSum
          maxLeft = left
          maxRight = right

   return maxSum
 */
// if we only wany to output the sum
function maxSubArray (nums) {
  let currSum = -Infinity;
  let maxSum = -Infinity;
  for (let num of nums) {
    currSum = Math.max(currSum + num, num);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

// if we want to also output the indices
   var maxSubArray = function(nums) {
    let currSum = -Infinity;
    let maxSum = -Infinity;
    let left = 0;
    let right = 0;
    let mLeft = 0;
    let mRight = 0
    while (right < nums.length) {
        if (currSum + nums[right] < nums[right]) {
            left = right
            currSum = nums[right];
        } else {
            currSum = currSum + nums[right];
        }
        if (maxSum < currSum) {
            maxSum = currSum;
            mLeft = left;
            mRight = right;
            console.log(maxSum, left, right)
        }
        right++;
    }
    console.log(mLeft, mRight)
    return maxSum;
};