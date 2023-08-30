/*
'''
You are given a series of inputs representing delivery events. Each event is represented by an array of length 3:

[1, 1591846068, 0]

- The first element is an order number
- The second is the timestamp
- The third is either 0 (representing a pickup) or 1 (representing a dropoff)

Given a series of events, return the total active time, calculated by the period of time where they have an active delivery (if they've dropped everything off, they are not considered active until they pick something up again).

EXAMPLE(S)
Input:
[1, 1591846068, 0] active phase 1 start
[2, 1591846070, 0]
[1, 1591846071, 1]
[2, 1591846080, 1] active phase 1 end
[3, 1591846090, 0] active phase 2 start
[3, 1591846102, 1] active phase 2 end

Output: 24


// Example 2:
Input:
[1, 1591846068, 0] active phase 1 start
[2, 1591846069, 0]
[3, 1591846070, 0]
[1, 1591846071, 1]
[2, 1591846080, 1]
[3, 1591846090, 1] active phase 1 end


FUNCTION SIGNATURE
function activeDeliveryTime(events) {
def activeDeliveryTime(events: [int]) -> int:
'''

EXPLORE:
-Base Cases:
--A single packagen picked and dropped off. Always atleast 2 elements.

Assumptions
1. Pickup always happens first.
2. Every order has a pickup and a dropoff.
3. It's possible for multiple orders to be picked up and dropped off at the same time.
4. Timestamp is always sorted (in ascending order).

BRAINSTORM:
- Stack solution:
-- output > total

-- No DS solution:
--- use integers to keep track of opened and closed

Pseudo code
-- totalTime Taken = 0
-- phaseStartTime Time = orders[0][1],
-- openPickups = 1, openDropoffs = 0
-- iterate through the list starting at index 1
    currentTimeStamp = el[1]
    1. if openPickups --- openDropoffs === 0
        get the difference between phaseStartTime and currentTimeStamp
        add the difference to totalTimeTaken

    2. if third value is dropoff or pickup, increment respective variables
    3. if curr value is a pickup AND if openPickups - openDropoff = 1
              - update phaseStartTime

-- return totalTimeTaken

Input:
[1, 1591846068, 0] active phase 1 start
[2, 1591846070, 0]
[1, 1591846071, 1]
[2, 1591846080, 1] active phase 1 end <- totalTime += ( currentTime - phaseStartTime), openPickups=2, openDropoffs=2
[3, 1591846090, 0] active phase 2 start <- update phaseStartTime, openPickups=3, openDropoffs=2
[3, 1591846102, 1] active phase 2 end

*/

function activeDeliveryTime(events) {
  let totalTimeTaken = 0;
  let phraseStartTime = events[0][1];
  let pickups = 1;
  let dropoffs = 0;

  for (let i = 1; i < events.length; i++) {
    let [id, currentTimeStamp, action] = events[i];
    if(action === 0){
      pickups++;
      if(pickups - dropoffs === 1){
        phraseStartTime = currentTimeStamp;
      }
    } else {
      dropoffs++;
    }

    if(pickups - dropoffs === 0){
      let active = currentTimeStamp - phraseStartTime;
      totalTimeTaken += active;
    }

  }
  return totalTimeTaken;
}

const example1 = [
  [1, 1591846068, 0],
  [2, 1591846069, 0],
  [3, 1591846070, 0],
  [1, 1591846071, 1],
  [2, 1591846080, 1],
  [3, 1591846090, 1]
];

console.log(activeDeliveryTime(example1), " expect 22 ");

let events2 = [[1, 1591846068, 0],
              [2, 1591846070, 0],
              [1, 1591846071, 1],
              [2, 1591846080, 1],
              [3, 1591846090, 0],
              [3, 1591846102, 1],]

console.log(activeDeliveryTime(events2), " expect 24 ");

let events3 = [[1, 1591846001, 0],
               [1, 1591846021, 1]]

console.log(activeDeliveryTime(events3), " expect 20 ");

const example4 = [
  [1, 1591846068, 0],
  [1, 1591846069, 1],
  [2, 1591846078, 0],
  [2, 1591846079, 1],
  [3, 1591846088, 0],
  [3, 1591846090, 1]
];

console.log(activeDeliveryTime(example4), " expect 4 ");


/*
function activeDeliveryTime(events) {
  const PICKUP = 0, DROPOFF = 1;
  let activeCount = 0;
  let totalTime = 0;
  let firstActiveTime = undefined;

  for (const [id, time, action] of events) {
    if (action === PICKUP) {
      if (activeCount === 0) {
        firstActiveTime = time;
      }
      activeCount++;
    } else if (action === DROPOFF) {
      // must be a drop off
      activeCount--;
      if (activeCount === 0) {
        totalTime += time - firstActiveTime;
        firstActiveTime = undefined;
      }

    }
  }

  return totalTime;
}
*/