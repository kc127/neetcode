
/*

Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

i - k <= r <= i + k,
j - k <= c <= j + k, and
(r, c) is a valid position in the matrix.

That is, for each element calculate the sum of all elements K distance away from this index in a square. Set that value in your answer matrix in the corresponding position.

Notice that for any k, the size of the area to be summed is a square of size 2k + 1 on each side. All of the positions in that area are distance k away from the center.

Example 1:

Input: mat = [
[1,2,3],
[4,5,6],
[7,8,9]],
k = 1

Output: [
[12,21,16],
[27,45,33],
[24,39,28]]
Explanation: The 3x3 area created from k=1 would encompass the entire 3x3 matrix at the (1,1) cell adding to 45. The (0,0) cell can only create a valid 2x2 square because up and to the left are out of bounds. It would add 1+2+4+5 = 12.

Example 2:

Input: mat = [
[1,2,3],
[4,5,6],
[7,8,9]],
k = 2

Output: [
[45,45,45],
[45,45,45],
[45,45,45]]
Explanation: The 5x5 area created from k=2 would encompass the entire 3x3 matrix at any index.

*/