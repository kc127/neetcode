function printSubSeq(str) {
  let x = 0;

  function helper(str, seq = "") {
    if (str.length === undefined){
      x++;
      if (x === 5) console.log(seq);
      return;
    }

    helper(str.slice(1), seq + str[0]);
    helper(str.slice(1), seq);

  }
  helper(str);
}

/*

        input                               line
    str = "JOHN", seq = ""          line 11 = helper("OHN", "J") =
    "OHN", "J"                      line 11 = helper("HN", "JO") = RETURN, line 12 = helper("HN", "J")
    "HN", "JO"                      line 11 = helper("N", "JOH") = RETURN, line 12 = helper("N", "JO") = RETURN
    "N", "JOH"                     line 11 = helper("", "JOHN") = RETURN, line 12 = helper("", "JOH") = RETURN
    "", "JOHN"                      x = 1 RETURN
    "", "JOH"                       x = 2 RETURN
    "N", "JO"                       line 11 = helper("", "JON") = RETURN, line 12 = helper("", "JO") = RETURN
    "" , "JON"                       x = 3, RETURN
    "", "JO"                          x = 4 RETURN
    "HN", "J"                         line 11 = helper("N", "JH") =
    "N", "JH"                         line 11 = helper("", JHN)
    "", "JHN"                           x = 5



          input                                 line
      0                             i = 2, start = 0, arr = [C, B, A], X = 1
      1                             i = 2, start = 1, arr = [C, A, B], X = 2
      2                             i = 2, start = 2, arr = [C, A, B], X = 3, backtrack(3) RETURNS, [C, A, B], i = 1, start = 2, arr = [C, B, A],
      3                             X = 4, perms = [[C, A, B]] RETURN


    input                             line
  0, 0                       x = 1, backtrack(1, 0)
  1, 0                        x = 2, backtrac(1, 1)
  1, 1                        x = 3, backtrack(1, 2)
  1, 2                        x = 4, backtrack(2, 2)
  2, 2                        x = 4, backtrack(3, 2)
  3, 2                        x = 5, backtrack(4, 2) (L)
  4, 2                        x = 6, backtrack(4, 3) (M)
  4, 3                        x = 7, backtrack(4, 4)  (N)
  4, 4                        x = 8, backtrack(3, 4)
  3, 4                        x = 9


    input                               line



Question 4. What is logged to the console by the following method?



*/
let board = [
  ["D", "P", "D", "A"],
  ["A", "V", "O", "G"],
  ["T", "O", "N", "Y"],
  ["J", "E", "S", "S"],
]

function findWord(board, word) {
  let x = 0;

  function validMove(row, col, idx) {
    return (
      row >= 0 &&
      row < board.length &&
      col >= 0 &&
      col < board[0].length &&
      board[row][col] !== "#" &&
      idx < word.length
    )
  }

  function hasWord(row, col, idx) {
    x++;
    if (x === 9) console.log("Visiting:", board[row][col]);

  }
}

findWord(board, "DOG");

/**
 * @param {number[]} nums
 * @return {number[][]}
 *
 * [1, 2, 3] = [[], [1], [2], [3], [1, 2], [2, 3], [1, 3]]

                                        *
   [1, 2, 3]                  [1]                                []
   [2, 3]             [1, 2]             [1]               [2]             []
   [3]        [1,2,3]        [1, 3]   [1,3]   [1]   [2, 3]      [2]       [3]     []


 */
 var subsets = function(nums) {
    let allSets = [];

    var backtrack = function(path = []) {
      for (let i = 0; i < nums.length; i++) {
        if (!path.includes(nums[i])) {
          path.push(nums[i]);
          backtrack(path);
          path.pop();
        }
      }
      allSets.push([...path]);
    }
    backtrack();
    return allSets;
};

/*
  insertion sort:


    4 2 1 3

    l = 4, 2, 1, 3
    r = 4


      sortArray([4,2,1,3])                  line 141 = sortArray([4,2]) = [2, 4]
                                            line 148 = sortArray([1,3]) = [1, 3]
      sortArray([4,2])                      line 141 = sortArray([4]) = [4] RETURN
                                            line 145 = sortArray([2]) = [2] RETURN
                                            line 147 = merge([4], [2]) = [2, 4]
*/
var sortArray = (nums) => {

  if (nums.length <= 1) {
    return nums;
  }

  //find the pivot
  let pivot = nums[0];
  let left = [];
  let right = [];

  // partition the array based on the pivot
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      right.push(nums[i])
    } else {
      left.push(nums[i])
    }
  }

  //sort left and right subarrays recursively
  left = sortArray(left);
  right = sortArray(right);

  // combine left and right sorted arrays around the pivot
  let sorted = left.concat(pivot, right);

  return sorted;
}

console.log(sortArray([2, 4, 1, 3]));