/*

Next Greater Element

Given a list of positive and distinct integers, find the next greater element for each element. The next greater element (NGE) of an element is the next element which is greater than the current element's value. Formally, the NGE of element A[i] is A[j] where A[j] > A[i], j > i, and j is the lowest possible index that meets this criterion.

For example in the array [1, 3, 2, 5, 4, 8], the NGE of 3 is 5 since 5 is greater than 3 and the index of element 5 is the lowest among all elements to the right of 3 which satisfies the 'greater than' relation.


EXAMPLE(S)
next_greater_element([2, 7, 3, 5, 4, 6, 8]) == [7, 8, 5, 6, 6, 8, -1]
next_greater_element([5, 4, 3, 2, 1]) == [-1, -1, -1, -1, -1]
next_greater_element([1, 2, 3]) == [2, 3, -1]
next_greater_element([1,2,2,2]) == [2, -1, -1, -1] INVALID INPUT
next_greater_element([2, 2, 2, 1]) == [-1, -1, -1, -1]. INVALID
next_greater_element([1]) == [-1]
next_greater_element([]) == ([]) INVALID INPUT

Approaches:

IDEA: Traverse from end to start
        compare element at end index

        1, 2, 3, 4
        e-1 e

      i) arr[e-1] < arr[e]    replace arr[e-1] with arr[e]

      [0,0,0,-1]
       i) arr[e-1] < arr[e]    replace arr[e-1] with arr[e]
        - [0, 0, 4, -1]
space: O(n) because we will creating a new array
time: O(n)

BAD IDEA 2: Sort the input array array and then loop from right to left
    [5, 4, 3, 2, 1] ->

IDEA 3: Two Pointers
        i = 0, j = i + 1
        Loop from right to left
          [5, 4, 3, 2, 1]
              i  j
           if (arr[j] < arr[i])
                j++
                if j is out of bounds, replace arr[i] with -1
                    i++
                    reset j
           if (arr[j] > arr[i])

Time: O(n*n) because of i and j
Space: O(1)

FUNCTION SIGNATURE
def findNextGreaterElements(input: List[int]) -> List[int]


*/
function findNextGreaterElements(nums) {
  if (nums.length <= 1) return nums;
  let i = 0;
  let j = 0;

  while (i < nums.length-1) {
    j = i + 1;
    while (j < nums.length  && nums[j] < nums[i]) {
      j++;
    }
    if (j < nums.length && nums[j] > nums[i]) {
      nums[i] = nums[j];
    } else if (j >= nums.length -1) {
      nums[i] = -1;
    }
    i++;
  }

  nums[nums.length - 1] = -1;
  return nums;
}
/*


    [1, 2, 3, 4, 5]
        i
    s = 5, 4
    result = [-1, -1, 4, 5, -1]
from collections import deque

def findNextGreaterElements(input):

    # base case
    if not input:
        return

    n = len(input)
    result = [-1] * n

    # create an empty stack
    s = deque()

    # process each element from right to left
    for i in reversed(range(n)):
        # loop till we have a greater element on top or stack becomes empty.
        while s:
            # pop elements that aren't greater than the current element
            if s[-1] <= input[i]:
                s.pop()
            # the next greater element is now on the top of the stack
            else:
                result[i] = s[-1]
                break
        # push current element into the stack
        s.append(input[i])

    return result

*/

console.log(findNextGreaterElements([5, 4, 3, 2, 1])) // [-1, -1, -1, -1, -1]
console.log(findNextGreaterElements([1, 2, 3, 4, 5])) // [-1, -1, -1, -1, -1]

console.log(findNextGreaterElements([2, 7, 3, 5, 4, 6, 8])) // [7, 8, 5, 6, 6, 8, -1]
// findNextGreaterElements([5, 4, 3, 2, 1]) == [-1, -1, -1, -1, -1]
console.log(findNextGreaterElements([1, 2, 3])) // [2, 3, -1]
// next_greater_element([1]) == [-1]
