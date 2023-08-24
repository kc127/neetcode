/*

Given a list of times it takes for each car to complete a trip and a number of total trips, calculate the smallest amount of time it takes for the group of cars to collectively complete that many trips.

EXAMPLES
The minimum time for a group consisting of [1,1,3] and a cumulative goal of 11 trips is 5.

At the start, there are collectively 0 trips, [0, 0, 0].
On the 1st tick, there are 2 trips in total, [1,1,0].
On the 2nd tick, there are 4 trips in total, [2, 2, 0].
On the 3rd tick, there are 7 trips in total, [3, 3, 1].
On the 4th tick, there are 9 trips in total, [4, 4, 1].
On the 5th tick, there are 11 trips in total, [5, 5, 1].

1 1 3, goal = 11

50 + 50 + 50/3 = 100 + 1

0        50           100



*/

function minimumTimeTaken(times, trips) {
  let minTime = 0;
  let maxTime = Math.pow(10, 14);

  while (minTime < maxTime) {
    let midTime = Math.floor((minTime + maxTime)/2);
    let tripsSoFar = 0;
    for (let tripTime of times) {
      tripsSoFar += Math.floor(midTime/tripTime);
    }
    tripsSoFar < trips ? (minTime = midTime + 1) : (maxTime = midTime - 1);
  }

  return minTime;
}

