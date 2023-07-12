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


FUNCTION SIGNATURE
function countCircularPrimes(upperBound) {
def countCircularPrimes(upperBound: int) -> int:
'''

Iterate from 2 to the upper bound, and for each number
    If the number is not prime, skip it (optimization)
    Get all of the rotations of the prime number
    If all the rotations are prime, count the number as a circular prime
There is an even more efficient solution that utilizes the Sieve of Eratosthenes, but with this strategy, one must compute primes up beyond the upper bound in case a rotation is greater than the bound an we need to check to see if it is prime.

*/
function countCircularPrimes(upperBound) {
  let count = 0

  for (let num = 2; num <= upperBound; num++) {
      if (!isPrime(num))
          continue

      let rotations = getRotations(num)
      let circularPrime = true
      for (let rotation of rotations)
          circularPrime = circularPrime && isPrime(rotation)

      if (circularPrime)
          count++
  }

  return count
}

function getRotations(number) {
  let rotations = new Set()

  let digits = number.toString()
  for (let startingIndex = 0; startingIndex < digits.length; startingIndex++) {
      let rotatedNumStr = ""

      for (let i = 0; i < digits.length; i++)
          rotatedNumStr += digits[(startingIndex + i) % digits.length]

      rotations.add(parseInt(rotatedNumStr))
  }

  return rotations
}

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++)
      if (number % i === 0)
          return false

  return true
}

console.log(countCircularPrimes(1) == 0)
console.log(countCircularPrimes(2) == 1)
console.log(countCircularPrimes(100) == 13)
console.log(countCircularPrimes(1000) == 25)
console.log(countCircularPrimes(10000) == 33)
console.log(countCircularPrimes(990) == 24) // omits 991