/*
'''
Euclid's GCD algorithm

Euclid's algorithm for finding the greatest common divisor (GCD) of two numbers *a* and *b* is:

euclidGCD(a, 0) := a
euclidGCD(a, b) := gcd(b, a mod b)

Write a function that implements Euclid's algorithm and finds the GCD of two numbers.

Check out this video https://www.youtube.com/watch?v=Jwf6ncRmhPg
for more information on this very old algorithm.

Wikipedia https://en.wikipedia.org/wiki/Euclidean_algorithm also has a formal write-up.
EXPLORE:
    Assumptions/expected questions
    - neg numbers  => yes,
    - both a or b = 0 => yes
    - a === b => yes
    - no inf allowed

BRAINSTORM:
EXAMPLE(S)
euclidGCD(9, 27) == 9
          27 = 3 * 3 * 3
          9 = 3 * 3
euclidGCD(27, 9) == 9
euclidGCD(3, 1) == 1
euclidGCD(-3,-3) == -3


gcd(10, 5) = 5
    10 = 2 * 5
     5 = 5


PLAN:

SLOW VERSION gcd(a, b)
 1. make sure a <= b
 2. if a, b are both non-zero or a !== b
      - replace (a, b) with (a, b-a)
      - swap order if needed so that first entry is smallest
      - repeat step 2
 3. else: return the non-zero entry

  gcd(9, 27)
    gcd(9, 27-9) = gcd(9, 18)
    gcd(9, 18-9) = gcd(9, 9)
    gcd(9, 9) = gcd(9-9, 9-9)


FASTER VERSION    gcd(a,b)
 1. make sure a <= b
  2. if a, b are both non-zero && a !== b
    -b = a(result) + remainder
    -replace a, b with remainder and a
    -repeat step 2
  3. Else: return the non zero entry.


FUNCTION SIGNATURE
def euclidGCD(a: int, b: int) -> int:
'''

    5 / 2 = 2 * 2 + 1
          = divisor * quotient + remainder

    gcd(9, 27)    27 = 9(3) + 0     newA = 9, newB = r = 0
    gcd(a, b) = gcd(9, 0)


*/

function mainFunc(x, y) {
  let answer;
      function euclidGCD(a, b) {

        if(b < a) [a, b] = [b,a]

        if(a > 0 && b > 0 && a !== b) {
          // compute remainder
          euclidGCD(b % a, a)
        } else {
          answer = a !== 0 ? a : b;
        }
        return answer
      }
  return euclidGCD(x, y)

}

function gcd(a, b) {
  if (b === 0)
      return a

  console.log(a, b)
  return gcd(b, a % b)
}

/*
          a             b
          9            27
          0            9

           O(log(min(a, b)))

                n/2 => (n/2)/2 =>

  gcd(50, 4) => gcd(4, 50)
                gcd(50 % 4, 4) = gcd(2, 4) = gcd(smaller,larger)
                gcd(4%2, 4) = (0,2) gcd(b%a, newB = oldA)




*/


// console.log(euclidGCD(0, 0), ' expected 0');
// console.log(euclidGCD(9, 0), ' expected 9');
// console.log(euclidGCD(9, 9), ' expected 9');
// console.log(euclidGCD(9, 27), ' expected 9');
// console.log(euclidGCD(3, 1), ' expected 1');
// console.log(euclidGCD(10, 5), ' expected 5');
// console.log(euclidGCD(-10, 5), ' expected 5');


// console.log(euclidGCD(9, 27) == 9)
// console.log(euclidGCD(27, 9) == 9)
// console.log(euclidGCD(3, 1) == 1)
// console.log(euclidGCD(50, 1) == 1)
// console.log(euclidGCD(50, 2) == 2)
console.log(mainFunc(50, 4))
//console.log(gcd(50, 4))
// console.log(euclidGCD(100, 50) == 50)
// console.log(euclidGCD(23, 23) == 23)
// console.log(euclidGCD(10, 10) == 10)
// console.log(euclidGCD(31, 19) == 1)
// console.log(euclidGCD(1, 1) == 1)
// console.log(euclidGCD(4, 4))