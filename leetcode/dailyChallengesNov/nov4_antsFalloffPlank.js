/**

https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/description/?envType=daily-question&envId=2023-11-04

 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
  let totalTimeTaken = 0;
  for (let ant of left) {
      totalTimeTaken = Math.max(totalTimeTaken, ant);
  }
  for (let ant of right) {
      totalTimeTaken = Math.max(totalTimeTaken, n - ant);
  }
  return totalTimeTaken;
};