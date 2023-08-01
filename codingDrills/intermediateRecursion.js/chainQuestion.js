/*

Define a chain of a list L as a sequence of elements from L, not necessarily contiguous, that are arranged in ascending order in L. For instance, chains in the list [1, 3, 2, 4], include [1], [1, 3], [1, 3, 4], [1, 2, 4], and [1, 4].

Given an input list, compute the length of its longest chain. List elements are guaranteed to be unique. Examples:

getLengthOfLongestChain([1, 2, 3, 4])              -> 4  // [1, 2, 3, 4]
getLengthOfLongestChain([4, 3, 2, 1])              -> 1  // [1], [2], [3], or [4]
getLengthOfLongestChain([1, 3, 2, 4])              -> 3  // [1, 3, 4] or [1, 2, 4]
getLengthOfLongestChain([1, 3, 2, 4, 5, 8, 6, 7])  -> 6  // [1, 2, 4, 5, 6, 7]
getLengthOfLongestChain([10, 2, 7, 3, 6, 1, 4, 5]) -> 4  //

*/

function solution(list) {
  let longest = 0;
  let longestArray = [];
  function helper(index) {

      if (index >= list.length) {
          return;
      }

      for (let i = index; i < list.length; i++) {
          if (longestArray.length === 0 || longestArray[longestArray.length - 1] < list[i]) {
              longestArray.push(list[i]);
              console.log(longestArray)
          }
          if (longestArray.length > longest) {
          longest = longestArray.length;
          console.log(longest, longestArray)
      }
          helper(index + 1);
          longestArray.pop();
      }
  }
  helper(0);
  return longest;
}