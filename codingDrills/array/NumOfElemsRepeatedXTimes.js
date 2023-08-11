/*
'''
Number elements repeated X times in array

Given an array and a target count X, return the number of elements that is repeated exactly X times.


EXAMPLE(S)
[1, 2, 3, 1, 2, 3], 2 == 3
[1, 2, 3, 1, 2, 3], 3 == 0
[1, 3, 3, 5, 5, 5, 5, 5, 3], 3 == 1
                   X
X = 1

one-pass approach

  create a totalCount variable
  create a hashmap to store num and its freq
  traverse through each num in array
    add or increment count of num in hashmap
    if count of num is equal to X => increment totalCount
    if count of num greater than X =>
        if X > 0 then decrement X by 1


FUNCTION SIGNATURE
function countExactOccurrences(arr, exactOccurrences) {
def countExactOccurrences(arr: list[int], exactOccurrences: int) -> int:
'''
*/
function countExactOccurrences(arr, X) {
  let totalCount = 0;
  let numFreq = {};

  for (let num of arr) {
    numFreq[num] = (numFreq[num] || 0) + 1;
    if (numFreq[num] === X) {
      totalCount++;
    } else if (numFreq[num] === X + 1) {
      totalCount = totalCount > 0 ? totalCount - 1 : 0
    }
  }
  return totalCount;
}

let arr = [1, 2, 3, 1, 2, 3]
console.log(countExactOccurrences(arr, 2) === 3)
console.log(countExactOccurrences(arr, 3) === 0)

arr = [1, 3, 3, 5, 5, 5, 5, 5, 3]
console.log(countExactOccurrences(arr, 1) === 1)
console.log(countExactOccurrences(arr, 3) === 1)
console.log(countExactOccurrences(arr, 5) === 1)

arr = [10,10,10,10]
console.log(countExactOccurrences(arr, 1) === 0)
console.log(countExactOccurrences(arr, 3) === 0)
console.log(countExactOccurrences(arr, 4) === 1)
console.log(countExactOccurrences(arr, 6) === 0)

arr = [100]
console.log(countExactOccurrences(arr, 1) === 1)
console.log(countExactOccurrences(arr, 5) === 0)
console.log(countExactOccurrences(arr, 100) === 0)

/*
Approach 1
Create a dictionary mapping from values to their counts. Iterate through the array, incrementing the count of each value by 1. Finally, iterate through the dictionary and count the elements that have a target count of X.
Approach 2
Create a cumulative count variable and a dictionary mapping from values to their counts. Iterate through the array, incrementing the count of each value by 1. After incrementing the count, if it matches X, increment your cumulative count variable. If after incrementing the count, the count is one more than the target, decrement the count variable (because you false-counted it the first time).




function countExactOccurrences(arr, exactOccurrences) {
  let counts = {};
  let totalCount = 0;
  for (let num of arr) {
    counts[num] = (counts[num] || 0) + 1;
    if (counts[num] == exactOccurrences) {
      totalCount++;
    } else if (counts[num] == exactOccurrences + 1) {
      totalCount = totalCount > 0 ? totalCount - 1 : 0;
    }
  }
  return totalCount;
}
*/