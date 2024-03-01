/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
      let [prevStart, prevEnd] = prev;
      let [currStart, currEnd] = intervals[i];

      if (prevEnd > currStart) {
          return false;
      }
      prev = intervals[i];
  }
  return true;
};