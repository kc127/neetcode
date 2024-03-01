// Sonali Gupta

/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.


Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

Input: nums = [8], target = 8
Output: [0, 0]

Input: nums =  [5,7,7,8,8,8,8,10], target = 8
Output: [3,6]

Approach:

Idea 1: Binary Search Approach
      [5,8,8,8,8,10]    target = 8
       l
         m
           r



       [5,7,7,8,10]
        l
            m
                 r

        [8,8,8,8]
         l
            m
                r

  compute starting index:
    while left is less than or equal to right
        compute mid index
        if mid value is less than target
            left = mid + 1
        if mid value is greater than target
            right = mid - 1

        if mid value is target
            check if mid - 1 value is target
                YES: right = mid - 1
                NO: starting index = mid



Idea 2: Two Pointers Approach with left and right in opposite direction
    time : O(n) and space = O(1)

      [5,7,7,8,8,10]    target = 8
       l
                  r

      while left is less than or equal to right
            check if left value is target
                  yes: store the index as starting index
                  no: left++
            check if right value is target
                  yes: store the index as ending index
                  no: right--
*/

function findStartEndIndexInSortedArray(nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  let startIndex = findStartEndIndexInSortedArray(nums, target);
  let endIndex = findEndIndexInSortedArray(nums, target);

  return [startIndex, endIndex];
}

function findStartIndexInSortedArray(nums, target) {

  let startIndex = -1;
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = left + Math.floor((right - left)/2);

    if (nums[midIndex] === target) {
        if (midIndex - 1 >= 0 && nums[midIndex - 1] !== target) {
          startIndex = mid;
          break;
        } else if (midIndex - 1 >= 0 && nums[midIndex - 1] === target) {
          rightIndex = midIndex - 1;
        }
    } else if (nums[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return startIndex;
}

function findEndIndexInSortedArray(nums, target) {
  let endIndex = -1;
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let midIndex = left + Math.floor((right - left)/2);

    if (nums[midIndex] === target) {
        if (midIndex + 1 < nums.length && nums[midIndex + 1] !== target) {
          endIndex = mid;
          break;
        } else if (midIndex + 1 < nums.length && nums[midIndex + 1] === target) {
          leftIndex = midIndex + 1;
        }
    } else if (nums[midIndex] < target) {
      leftIndex = midIndex + 1;
    } else {
      rightIndex = midIndex - 1;
    }
  }
  return endIndex;
}

/*
 target = 8

0 1 2      5
5,7,7,8,8,10
l
     m
           r

m = 0 + 5/2 = 2

*/

/*
There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.



Example 1:

Input: rooms = [[1],[2],[3],[]]
Output: true
Explanation:
We visit room 0 and pick up key 1.
We then visit room 1 and pick up key 2.
We then visit room 2 and pick up key 3.
We then visit room 3.
Since we were able to visit every room, we return true.

Example 2:

Input: rooms = [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can not enter room number 2 since the only key that unlocks it is in that room.

Example 3:
Input: [[1],[]] return true

Assumptions:
- keys to your own room as well

      [[1,3],[3,0,1],[2],[0]]

    0: [1,3]





*/