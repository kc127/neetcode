/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  let mergedIntervals = [];
  intervals.sort((a,b) => a[0] - b[0]);
  mergedIntervals.push(intervals[0]);

  for (let i = 1; i < intervals.length; i++) {
      let currInt = intervals[i];
      let prevInt = mergedIntervals[mergedIntervals.length - 1];

      // yes - overlap exists
      if (prevInt[1] >= currInt[0]) {
          mergedIntervals[mergedIntervals.length - 1] = [prevInt[0], Math.max(prevInt[1], currInt[1])];
      } else {
          mergedIntervals.push(currInt);
      }
  }
  return mergedIntervals;
};