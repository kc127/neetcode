/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let left = 1;
      let right = n;
      let targetIndex = -1;
      while (left <= right) {
          let mid = left + Math.floor((right - left)/2);
          let isMidBad = isBadVersion(mid);
          if (isMidBad) {
              targetIndex = mid;
              right = mid - 1;
          } else {
              left = mid + 1;
          }
      }
      return targetIndex;
  };
};