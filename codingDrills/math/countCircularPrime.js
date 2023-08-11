/*
'''
Count Circular Primes

Find the number of circular primes less than or equal to upper bound.

The number 197 is called a circular prime because all rotations of the digits:
197, 971, and 719 are themselves prime.

There are 13 circular primes between 2 and 100:
2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, 97

EXAMPLE(S)
countCircularPrimes(100) == 13

2 should return 1
13 should return 7 = 2, 3, 5, 7, 11, 13,

Approach:
0. init a counter to 0
1. loop from 2 to the number
    check if the number is prime and is circular prime
        if YES: increment counter
2. return the counter


FUNCTION SIGNATURE
function countCircularPrimes(upperBound) {

'''


*/

function countCircularPrimes(upperBound) {
  let totalCount = 0;

  for (let num = 2; num <= upperBound; num++) {
     if (isPrime(num) && isCircularPrime2(num)) {
       totalCount++;
     }
  }
  return totalCount;
 }

 function isCircularPrime2(num) {
   const numStr = num.toString();
   const length = numStr.length;
  
   for (let i = 1; i < length; i++){
     const rotatedNumStr = numStr.substring(i) + numStr.substring(0, i);
     const rotatedNum = parseInt(rotatedNumStr);

     if (!isPrime(rotatedNum)) return false;
   }

   return true;
 }



 function isPrime(num) {
   if(num <= 1) return false;

   for (let i = 2; i <= Math.sqrt(num); i++){
     if (num % i === 0){
       return false;
     }
   }
   return true;
 }

 //Test Cases
//  function countCircularPrimes(upperBound) {
//   let count = 0

//   for (let num = 2; num <= upperBound; num++) {
//       if (!isPrime(num))
//           continue

//       let rotations = getRotations(num)
//       let circularPrime = true
//       for (let rotation of rotations)
//           circularPrime = circularPrime && isPrime(rotation)

//       if (circularPrime)
//           count++
//   }

//   return count
// }
// function getRotations(number) {
//   let rotations = new Set()

//   let digits = number.toString()
//   for (let startingIndex = 0; startingIndex < digits.length; startingIndex++) {
//       let rotatedNumStr = ""

//       for (let i = 0; i < digits.length; i++)
//           rotatedNumStr += digits[(startingIndex + i) % digits.length]

//       rotations.add(parseInt(rotatedNumStr))
//   }

//   return rotations
// }

// function isPrime(number) {
//   for (let i = 2; i <= Math.sqrt(number); i++)
//       if (number % i === 0)
//           return false

//   return true
// }

 console.log(countCircularPrimes(1) == 0)
 console.log(countCircularPrimes(2) == 1)
 console.log(countCircularPrimes(7) == 4)
 console.log(countCircularPrimes(100) == 13)
 console.log(countCircularPrimes(1000) == 25)
 console.log(countCircularPrimes(10000) == 33)
 console.log(countCircularPrimes(990) == 24) // omits 991