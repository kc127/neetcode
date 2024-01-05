function fibRecursive(n) {
  callCount++;
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}

let callCount = 0;
console.log(`fibRecursive(${10}) = ${fibRecursive(10)}, call count: ${callCount}`);

callCount = 0;
console.log(`fibRecursive(${12}) = ${fibRecursive(12)}, call count: ${callCount}`);



function fibMemoized(n) {
  // start out with the base cases in our memo.
  const memo = {1: 1, 2: 1}

  // This helper looks mostly like the strictly recursive version.
  function fib(n) {
    callCount++;

    // Check the memo for a previously computed answer.
    if (memo[n] !== undefined) {
      return memo[n];
    }

    // Store new answers in the memo before returning.
    memo[n] = fib(n-1) + fib(n-2);
    return memo[n];
  }
  return fib(n);
}

callCount = 0;
console.log(`fibMemoized(${10}) = ${fibMemoized(10)}, call count: ${callCount}`);

callCount = 0;
console.log(`fibMemoized(${12}) = ${fibMemoized(12)}, call count: ${callCount}`);

callCount = 0;
function fibDP(n) {
  // Just like memoization, we start with our base cases in the table.
  const table = {1: 1, 2: 1};

  // Now start small and build up without recursion!
  for (let i = 3; i <= n; i++) {

    callCount++
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n];
}

console.log(`fibDP(${10}) = ${fibDP(20)},call count: ${callCount}`);