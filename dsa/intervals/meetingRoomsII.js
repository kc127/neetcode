/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  let meetingRooms = 0;
  let endTimes = [];
  let startTimes = [];

  for (let [start, end] of intervals) {
      startTimes.push(start);
      endTimes.push(end);
  }
  startTimes.sort((a,b) => a-b);
  endTimes.sort((a,b) => a-b);

  for (let i = 0, j = 0; i < startTimes.length; i++) {
      if (startTimes[i] < endTimes[j]) {
          meetingRooms++;
      } else {
          j++;
      }
  }
  return meetingRooms;
};