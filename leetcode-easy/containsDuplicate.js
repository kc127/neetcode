var containsDuplicate = function(nums) {
  let unique = {};
  for (let i = 0; i < nums.length; i++) {
      let curr = nums[i];
      if (unique[curr] !== undefined) {
          return true;
      } else {
          unique[curr] = i;
      }
  }
  return false;
};