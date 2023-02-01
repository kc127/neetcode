/** optimal O(n) approach but not refactored */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {

  let product = [];
  let prefix = [];
  let postfix = [];
  let output = [];
  prefix[0] = nums[0];
  postfix[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
      prefix[i] = prefix[i-1] * nums[i];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
      postfix[i] = postfix[i+1] * nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
          output[i] = postfix[i+1];
      } else if (i === nums.length - 1) {
          output[i] = prefix[i-1];
      } else {
          output[i] = prefix[i-1] * postfix[i+1];
      }
  }

  return output;
};
/** optimal and refactored code */
