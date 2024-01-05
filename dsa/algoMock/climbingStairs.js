
/*
'''
Given an input N representing n number of stairs, compute the number of ways to reach the n'th stair if you can climb either 1 or 2 stairs at a time.

Assumptions/Edge Cases/Observations:
1. We are at least given 1 stair.

EXAMPLE(S)
Input: 1
Output: 1
Explanation: There is only one way to climb one stair: (1)

Input: 2
Output: 2
Explanation: There are 2 ways to climb 2 stairs: (1,1) and (2)

Input: 4
Output: 5
Explanation: Here are the ways to climb 4 stairs: (1,1,1,1), (1,1,2), (1,2,1), (2,2)
                                                              (2,1,1)

Input: 3
Output: 3 ways
  1, 1, 1
  1, 2
  2, 1

FUNCTION SIGNATURE
func numWaysToClimb(input: n) -> Int
'''

Input: n = 4
Output: 5 (1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (1, 2, 1), (2, 2)


Approaches/Ideas:

Input: 5 , Output: 5
(1, 1, 1, 1, 1) *
(2, 1, 1, 1)
(1, 2, 1, 1)
(1, 1, 2, 1)*
(1, 1, 1, 2)*
(2, 2, 1)
(1, 2, 2)
(2, 1, 2)



                               (*)
                           1        2
                       1         2
                    1       2   1   2*
                  1   2*  1*
              1*

Brute Force: Backtracking

    stairs => 0 to n-1

      MAIN FUNC(n)
        waysToClimb = 0
          BACKTRACKING FUNC (index, pathSum)
            if index is not in range
                stop
            if pathSum is greater than n
               stop
            if pathSum is equal to n,
               increment waysToClimb

            iterate from index to n-1
                BACKTRACKING(index + 1, pathSum + 1)
                BACKTRACKING(_, pathSum + 2)

        BACKTRACKING (0, 0)
    return waysToClimb


BACKTRACKING (0, 0)
BACKTRACKING (,1)

Expected Questions
Q: Can the climber overshoot? (i.e. if input is 2, is (1, 2) a valid climb?)
A: No, the sum of the climbs must be exactly equal to the input for it to be valid.

Hints
The number of ways at N is equivalent to the sum of the number of ways of previous step possibilities. This uses induction- what method can we solve problems like this? (backtracking, DP)

The number of ways at n is equal to numOfWays(n-1) + numOfWays(n-2). Is this similar to the Fibonacci sequence?

numOfWays(5) = numOfWays(4) + numOfWays(3) + numOfWays(2) + numOfWays(1)

*/
function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fib(n-2) + fib(n-1);
}

function numOfWays(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;



}


// Java DP solution:

public class Solution {
  public int climbStairs(int n) {
      if (n == 1) {
          return 1;
      }
      int[] dp = new int[n + 1];
      dp[1] = 1;
      dp[2] = 2;
      for (int i = 3; i <= n; i++) {
          dp[i] = dp[i - 1] + dp[i - 2];
      }
      return dp[n];
  }
}

numWaysToClimb(1) = 1
numWaysToClimb(2) = 2
numWaysToClimb(3) = 3
numWaysToClimb(4) = 5
numWaysToClimb(5) = 8
numWaysToClimb(20) = 10946

var climbStairs = function(n) {

  let arr = [];
  arr[1] = 1;
  arr[2] = 2;

  for( let i = 3; i <= n; i++){
      arr[i] = arr[i-1] + arr[i-2]
  }
  return arr[n]
};

var climbStairs = function(n){
  // First two pointers store the first two numbers of the Fibonacci sequence
  let prev = 0;
  let curr = 1;
 // Our third pointer is used to store one side while we update the above two pointers.
  let tmp;

  // We use a for loop to iterate from 1 up to our number n with our constraints  being: 1 <= n <= 45
  for(let i = 1; i <= n; i++){
       // We store one side in our third pointer
       tmp = prev;
       // We then update that side to be equal to the other pointer
       // This is because the next number is equal to the sum of the previous two numbers.
      prev = curr;
     // Next we add tmp which now holds our lower number to curr which holds our upper number to get our next number.
    curr += tmp;
 }
 // Outside of our loop we return curr which stored our cumulative total while we iterated.
 return curr;
}

/*

PROBLEM 1
To reach step n=1
  Path1: 1
  No. of ways (or paths) = 1

PROBLEM 2
To reach step n=2
  Path1: 1->2 (Taking 1 step at a time)
  Path2: 2 (Taking 2 steps to reach step2)
  No. of ways (or paths) = 2

To reach step n=3
  It can be reached from step 1 by taking one step or from
   step 2 by taking 2 steps. i.e from the n-1 or n-2, there is
  one distinct way to reach n. To all the paths that reach
  n-1 and n-2, this contributes one extra way (->3) to the path.
    In other words, the number of ways to reach n=3, is the count
    of all the ways to reach step1 and step2.
    Thus, the distinct number of ways to reach n,
       ways(n) = ways(n-2) + ways(n-1)
      ways(3) = 2
    Path1: 1->3
    Path2: 1->2->3
    Path3: 2->3
    No. of ways (or paths) = 3

*, * , *

{
  1: 1
  2: 2
  3: 3
  4:
}

* * * *
To reach step n = 4

      num(4) = num(4-1) + num(4-2)
             = num(3) + num(2)

  It can be reached from step 2 or step 3.
  To all the paths that reach step 2 or step 3, adding (->4)
  gets us the distinct paths to reach step 4.
  Path1: 1->2->4
    Path2: 2->4
    Path3: 1->3->4
    Path4: 1->2->3->4
  Path5: 2->3->4

  ways(n) = ways(n-2) + ways(n-1)
  ways(4) = ways(2) + ways (3) = 2 + 3 = 5
  No. of ways (or paths) = 5

To reach n = 5
   It can be reached from step 3 or step step 4.
   To all the paths that reach step3 or step4, adding (->5) gets
   us the distinct paths to reach step5.
   ways(n) = ways(n-2) + ways(n-1)
   ways(5) = ways(3) + ways (4) = 3 + 5
   No. of ways (or paths) = 8


*/