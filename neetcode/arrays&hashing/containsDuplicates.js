/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let dupes = new Set();

  for (let num of nums) {
      if (dupes.has(num)) return true;
      dupes.add(num);
  }
  return false;
};