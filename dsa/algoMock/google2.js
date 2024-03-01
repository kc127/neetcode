Given two integers ‘m’ and ’n’, find count of all the stepping numbers in range [m, n].
A number is called stepping number if all adjacent digits have an absolute difference of 1.
321 is a Stepping Number while 421 is not.
Input: m = 11, n = 25

Assumptions/Observations/Edge Cases:
1. m and n can be the same number
2. m and n are inclusive
3. m <= n
3. absolute diff =  abs (a - b)
4. single digit number has 0 as adjacent digit WRONG
5. all single digit numbers are stepping numbers RIGHT

5
5 0
5 - 0 => 5


321 => 3 - 2 = 1
       2 - 1 = 1

421 => 4 - 2 = 2

Example 1: m = 11, n = 25

0   1  2 3   4  5  6  7 8  2   1  0 1   2 3  4  5   6 7  3
11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
 ^

output = 12 21 23 => 3

Example 2: m = 0, n = 0, output = 0;

Example 3: m = -2, n = -1,
-2, -1
output => 1

Approach:

  Idea 1: Naive  [total time complexity => O(diff(n - m)) * O(maxLength of number)]
                  space => O(diff(n - m))
      MAIN FUNC() => time complexity => O(diff(n - m))
      storing all the numbers from m to n in an array
      for each number in the array checking whether it's stepping number or not

      isSteppingNumber(number) => k length  => time complexity => O(max length of number)
        number = xyz
        convert number to string => "xyz"
        iterate through the string


      1.1 Naive Solution with Space O(1) without using an array



function countSteppingNumber(m, n) {    // m = -10, n = -1, output = -10, -9,....-1 => 10 and -1
  if (m === n) return 0;

  let count = 0;

  for (let i = m; i <= n; i++) {
    if (isSteppingNumber(i)) count++;
  }

  return count;
}

function isSteppingNumber(num) {
  if (Math.abs(num) <= 0 && Math.abs(num) >= 10) {
    return true;
  }

  let numToStr = String(num);


  if (numToStr[0] === "-" && numToStr.length === 2) {
    if (Math.abs(Number(numToStr)) === 1) {
      return true;
    } else {
      return false;
    }
  }

  for (let i = 0; i < numToStr.length - 1; i++) {
    let char1 = numToStr[i];
    let char2 = numToStr[i+1];

    if (Math.abs(Number(char1) - Number(char2)) !== 1) {
      return false;
    }
  }
  return true;
}




// Optimal Solution involves using Recursion, not a math problem

              5
        54        56
      543 545   565 567


            0
        +        -
        1         1


              1
        10+(1-1)0    10+(1+1)2
                    121(12*10 + (2-1))     123