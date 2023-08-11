'''
 Given an array of 0s, 1s, and 2s, arrange the integers so that they are placed together.

 =========================================
1. Explore
- Understand the problem by asking clarifying questions and clearing up ambiguities
- Convert the abstract into the concrete using examples
- Categorize the examples and make insightful & revealing test scenarios
=========================================
===Discoveries===
 - input array does not need to contain all three integers
 -

===Happy Cases===
 array1 = [0, 1, 0, 2], output = [0, 0, 1, 2] or [1, 2, 0, 0] or [2, 1, 0, 0]
 array2 = [0, 1], output = [0, 1]

===Edge Cases===
 Empty Array?
 array3 = [], output = []

===Bad Cases (can be same as edge cases)===

=========================================
2. Brainstorm
- Discuss possible algorithms
- Focus on problem-solving instead of implementation
- Discuss the space and time complexities of the solution(s)
=========================================
===Option(s)===
 Hashtable then append or overwrite init array t: O(n), s: O(1) or O(n)
 Sorting the array t: O(nlgn), s: O(1) or O(n)
 3 - pointer solution t: O(n), s: O(1

 [0, 1, 0, 2, 1, 0, 2]
  s
                    e
  c

=========================================
3. Plan
- Agree on a solution to execute
- Avoid thought gaps by documenting a concrete outline, the level of detail is up to you
- The more detail, the easier the implementation becomes

As an engineer, you should determine when you're getting diminishing returns from
spending too much time in the Plan stage and move onto the Implement stage.
This balance is different for each person and each problem.
=========================================
===Outline===

[0, 0, 0, 1, 1, 2, 2]
       s
             e
             c

[0, 1, 0, 2, 1, 2, 2]
    z
             t
    c

init zeroPointer to start at index 0
init twosPointer to start at index n - 1
init currPointer to start at index 0

while currPointer <= twosPointer
  if the value at the currPointer is 0
     swap
     increment zeroPointer
     increment currPointer
  if the value at the currPointer is 2
     swap
     decrement twosPointer
  if the value at the currPointer is 1
     increment currPointer

=================================================
4. Implement
- Focus on implementation instead of problem-solving
- Refer back to your outline as needed
- Rely on your hours of coding practice
=================================================
// Code
'''

def sortColors(nums):
    zeroPointer = 0
    twosPointer = len(nums) - 1
    currPointer = 0

    while currPointer <= twosPointer:
        if nums[currPointer] == 0:
            tmp = nums[currPointer]
            nums[currPointer] = nums[zeroPointer]
            nums[zeroPointer] = tmp
            currPointer += 1
            zeroPointer += 1
        elif nums[currPointer] == 2:
            tmp = nums[currPointer]
            nums[currPointer] = nums[twosPointer]
            nums[twosPointer] = tmp
            twosPointer -= 1
        else:
            currPointer += 1

    return nums

print(sortColors([0, 1, 0, 2, 1, 2, 2])) # [0, 0, 1, 1, 2, 2, 2]
print(sortColors([2, 1, 0, 2, 1, 2, 2])) # [0, 1, 1, 2, 2, 2, 2]
print(sortColors([]))     # []
print(sortColors([1]))    # [1]
print(sortColors([0, 1])) # [0, 1]
