/*


/*
'''
You given a total number of dice, the number of faces on each dice and a total, write a function that determines the total number of ways to throw the dice to get the target sum.

If the number of faces on a dice is X, then numbers on each face will be 1, 2, ..., X. So a dice with 5 faces will have numbers 1, 2, 3, 4 and 5.



EXAMPLE(S)
n = 1, faces = 6, total = 3 returns 1 (must throw face 3)
n = 3, faces = 6, total = 7 returns 15
n = 2, faces = 5, total = 8 return 3
n = 2, faces = 6, total = 1 returns 0 (no ways to get 1 with two dice)
n = 2, faces = 6, total = 13 returns 0 (With two six sided dice, max is 12)

1....faces
      5, 3
      3, 5
      4, 4
 n = 3, faces = 5, total = 8 return ...

      5, 2, 1
      1, 5, 2
      2, 5, 1
      1, 2, 5
      2, 1, 5
      5, 1, 2

      _5 _ _
      ...

      dp state - dp[numberOfDices][total]

      bottom approach - minimum subproblem for which we already know the answer
      dp[0][n] = 0
      dp[1][t] = t > 0 && t <= faces ? 1 : 0

      dp[t][n] =


                total
             0 1 2 3
 (n)      1  0 X X X




*/

// kanchan
function number_ways_kanchan(n, faces, total) {
  let dp = new Array(n+1).fill().map(() => new Array(total+1).fill(0));
  for (let t = 1; t <= total; t++) {
    dp[1][t] = (t > 0 && t <= faces) ? 1 : 0;
  }

  for (let d = 2; d <= n; d++) {
    for (let t = 1; t <= total; t++) {
      for (let f = 1; f <= Math.min(faces, t); f++) {
        dp[d][t] += dp[d-1][t-f];
      }
    }
  }
  return dp[n][total]
}


console.log(number_ways_kanchan(1, 6, 3), " expect 1");
console.log(number_ways_kanchan(3, 6, 7), " expect 15");
