/*
'''
Suggest Meeting Times

You've been asked to write a function that finds all available time slots for scheduling a meeting between a group of people. The function should take as input a dictionary of schedules, where each key represents a person and the value is a list of busy intervals during the workday. The busy intervals are represented as tuples of start and end times. For example, the following schedule shows that Alice is busy from 8am to 10am and from 1pm to 2pm, while Bob is busy from 9am to 11am and from 2pm to 3pm:

schedules = {
    'Alice': [(8, 10), (13, 14)],
    'Bob': [(9, 11), (14, 15)],
}

The function should also take as input the duration of the meeting in hours, and should return a list of all available time slots during the workday where the meeting can be scheduled. A workday begins at 8am and ends at 5pm. A time slot is represented as a single integer that represents the start time of the slot in hours past midnight.

Your task is to implement the find_available_slots function that takes these inputs and returns the list of available time slots. Be sure to consider edge cases, such as when there are no busy intervals, when the meeting duration is longer than the workday, and when multiple start times are possible within a single free interval.

Assumptions
1. Solution should contain a list of start times.
2. Sorted input.


EXAMPLE(S)
schedules = {
    'Alice': [(8, 10),               (13, 14)],
                     (10, 13) = 3 hrs           (14, 17) = 3 hrs
    'Bob': [(9, 11),                (14, 15)],
                    (11,14) = 3 hrs           (15, 17) = 2 hrs
}

SOLUTION [11, 15] =(11am, 3pm)

Alice's availability
10 - 1
2 - 5

Bob's availability
8 - 9
11 - 2
3 - 5

Suggested Times
start - end
11 - 1  or 11 - 13
3 - 5   or 15 - 17

solution = [11, 15]

For example, if the meeting duration is 2 hours and the workday is from 8am to 5pm, the available time slots for the above schedule would be [11, 15], since those are the only times where both Alice and Bob are available for a meeting of 2 hours.

Approach:

Idea 1:


12 - 14

[(8, 9), (10, 12)]

[(9, 10), (14, 15)]


FUNCTION SIGNATURE
find_available_slots(schedules: dict, duration: int) -> list:
'''
*/

const START_TIME = 0;
const END_TIME = 1;

// 8              12 13
// 8                     15
//      10-------12
//          11------13


// [[10, 12], ...]
// [[11, 13], ...]

/*

Combine all the busy intervals from all schedules into a single list.
Sort the list of busy intervals by start time.
Merge any overlapping intervals into a single interval.
Find the "inverse" of the merged intervals, which represents the free time slots.
For each free time slot, find all possible start times for a meeting of the given duration.
Return a list of all available start times for the meeting.

time = n is the number of people, k is the size of the biggest intervals array  8 am - 5 pm
       O(nlogn) =>


*/

// function findAvailableSlots(schedules, duration = 2) {
//   // intialize current time to start time
//   const { Alice: aliceSchedule, Bob: bobSchedule } = schedules;

//   let currentTime = 8;
//   let alicePtr = 0;
//   let bobPtr = 0;

//   while (alicePtr < aliceSchedule.length && bobPtr < bobSchedule.length) {
//     const nextAlice = aliceSchedule[alicePtr];
//     const nextBob = bobSchedule[bobPtr];

//     let lesser
//     let lesserStartTime;
//     if (nextBob[START_TIME] < nextAlice[START_TIME]) {
//       // take the lesser, subtract the currentTime
//       lesserStartTime = nextBob[START_TIME];
//     } else {
//       lesserStartTime = nextAlice[START_TIME];
//     }
//     if (lesserStartTime - currentTime > duration) {
//       currentTime =
//     }




//     // should we increment alice or bob
//   }
// }


var schedules = {
  'Alice': [[8, 10], [13, 14]],
  'Bob': [[9, 11], [14, 15]],
  'Charlie': [[10, 12], [15, 16]],
}


console.log(findAvailableSlots(schedules, 2), '[]')

schedules = {
  'Alice': [[8, 10], [13, 14]],
  'Bob': [[10, 11], [14, 15], [16, 17]],
  'Charlie': [[11, 12], [15, 16]],
}

console.log(findAvailableSlots(schedules, 1), '[12]')


schedules = {
  'Alice': [[8, 9], [10, 11], [13, 14]],
  'Bob': [[9, 10], [14, 15]],
  'Charlie': [[11, 12], [15, 16]],
}

console.log(findAvailableSlots(schedules, 1), '[12, 16]');//[12, 16]

schedules = {
  'Alice': [[9, 10], [11, 12], [13, 14]],
  'Bob': [[10, 11], [12, 13], [14, 15]],
  'Charlie': [[15, 16]],
}

console.log(findAvailableSlots(schedules, 1), "[8, 16]")
