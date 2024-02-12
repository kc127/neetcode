/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let left = [];
  let right = [];
  for (let interval of intervals) {
      if (interval[1] < newInterval[0]) {
          left.push(interval);
      } else if (interval[0] > newInterval[1]) {
          right.push(interval);
      } else {
          newInterval = [Math.min(interval[0],newInterval[0]),
                        Math.max(interval[1],newInterval[1])]
      }
  }
  left.push(newInterval);
  let merged = left.concat(right);
  return merged;
};

/** O(n) time and O(n) space */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let result = [];
    let i = 0;
    let n = intervals.length;
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    result.push(newInterval);

    while (i < n) {
        result.push(intervals[i]);
        i++;
    }
    return result;
};