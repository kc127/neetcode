/*
'''
Today, you will be given the problem to collect keys.

You are moving out the office and need to collect everyone's keys before they leave. Unfortunately, everyone has different schedules so you can't just collect all the keys at once. You want to visit the office as few times as possible to collect everyone's keys.

Given a [[Int]] representing people's schedules, return the least number of times you'll need to visit to collect keys.

Assumptions/Observations:
1. Given start and end times of employees
2. time is represented in 24 hour format
3. length of the input array represents the number of employees
3. at least one employee in the office

EXAMPLE(S)
ex 1
[[10, 16], [2, 8], [1, 6], [7, 12]]

1 2 3 4 5 6 7 8 9 10...12...16....24
                   ------------
  -------------
-----------
             -------------

1st visit: 2 - 6
2nd visit: 10 - 12

Should return 2. You could visit at 6 and then at 10 to collect all the keys.

ex 2
[[1, 2]] returns 1

ex 3
[[1, 2], [1, 2]] returns 1

ex 4
[[1, 2], [3, 4], [5, 6], [7, 8]] returns 4

ex 5
[[1, 10], [2, 3], [4, 6],[7, 8]] returns 3

2 - 3
4 - 6
7 - 8

ex 6
  ------------------
    ------------
      -----
 [[1, 10], [2, 8], [5, 7]] returns 1


Approaches:

  Idea 1: brute force
        [[10, 16], [2, 8], [1, 6], [7, 12]]
        [[ 1, 6 ], [ 2, 8 ], [ 7, 12 ], [ 10, 16 ]]

        [[ 1, 6 ], [ 6, 8 ], [ 7, 12 ], [ 10, 16 ]]


      - number of visits
      - sorting end times in ascending order:
      - iterate through the modified input
          - compare the first two schedules
              check to see if first and second can be merged
              if not:
                  increment number of visits
                  move forward
              else:
                   compare start times of first and second => greater was included as the new start time
                  compare end times of first and second => smaller was included as the new end time
      - return number of visits

  time: O(nlogn) > O(n)
  space: ?

FUNCTION SIGNATURE
func minVisits(schedule: [[Int]]) -> Int
'''

a, b, c
   i
     i+1

*/

function minVisits(schedule) {
  if (schedule.length === 1) return 1;

  let numVisits = 0;
  schedule.sort((a,b) => a[1] - b[1]);

  let overlapStart = schedule[0][0];
  let overlapEnd = schedule[0][1];
  let i = 1;
  console.log("sorted input", schedule);
  while (i < schedule.length) {
    let current = schedule[i];
    if (current[0] <= overlapEnd) {
        overlapStart = Math.max(overlapStart, current[0]);
        overlapEnd = Math.min(overlapEnd, current[1]);
    } else {
      overlapStart = current[0];
      overlapEnd = current[1];
      numVisits++;
    }
    i++;
  }

  return numVisits;
}

// console.log(minVisits([[10, 16], [2, 8], [1, 6], [7, 12]]), "expect 2");
// console.log(minVisits([[1, 2]]), "expect 1");
// console.log(minVisits([1, 2], [1, 2]), "expect 1");
console.log(minVisits([[1, 2], [3, 4], [5, 6], [7, 8]]), "expect 4");
console.log(minVisits([[1, 10], [2, 3], [4, 6],[7, 8]]), "expect 3");