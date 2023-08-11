/*

Count the number of times a target value is in the binary tree
function count(root, target)


    5
   / \
  1   4
       \
        1

count(root, 1) -> 2
count(root, 4) -> 1
count(root, 10) -> 0


Approach 1: Recursive
1. root == null -> return 0
2a. if root == target ->  return (1 + recursive(left) + recursive (right))
2b. if root != target ->  return 0 + recursive(left) + recursive (right)

--------------------
1b:

1. root == null -> return 0
let result = 0

if root == target
  result += 1

result += recursive(left)
result += recursive(right)

return result


Approach 2: Stack

if root == null : return 0

stack = [ root ]
let count = 0
while( stack.length > 0 ) {

  let curr = stack.pop()

  if (curr.val == target ) count++

  if(curr.right != null) stack.push(curr.right)
  if(curr.left != null) stack.push(curr.left)

}

return count


Approach 3: Queue

if root == null : return 0

q = [ root ]
let count = 0
while( q.length > 0 ) {

  let curr = q.shift()

  if (curr.val == target ) count++

  if(curr.right != null) q.push(curr.right)
  if(curr.left != null) q.push(curr.left)

}

return count


*/


class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}



function count(root, predicate){
  if (root === null) {
    return 0
  }
  let result = 0

  if (predicate(root.val)) {
    result += 1
  }
  result += count(root.left, predicate)
  result += count(root.right, predicate)

  return result
}




// console.log(count(n1, lessThanZero))
// console.log(count(n1, lessThanZero))


/*
function count(root, predicate)

function match(value) // predicate signature, returns true or false


function lessThanZero (val) {
  if (val <0) return true;
  return false
}


*/

/*

Find the most frequent value in a binary tree


function findMostFrequent(root)


    5
   / \
  1   4
       \
        1

findMostFrequent(root) -> 1

1) have mostFreq = 0

2) if root.val in dict : dict[root.val] +=1
   else dict[root.val] = 1

3) if(dict[root.val] > mostFreq) mostFreq = root.val

4) push children

5) return mostFreq

*/

function findMostFrequent(root, predicate) {
  if(root === null){
    return -1;
  }
  let dict = {};
  let stack = [root]
  let mostFreqVal = root.val;
  let mostFreqCount = 1;
  while( stack.length > 0 ) {

    let curr = stack.pop();

    if(predicate(curr.val)) {
        if(!dict[curr.val]){
          dict[curr.val] = 1
        }
        else{
          dict[curr.val]++;
        }
        if(dict[curr.val]>mostFreqCount){
          mostFreqVal = curr.val;
          mostFreqCount = dict[curr.val]
        }
    }

    if(curr.right != null) stack.push(curr.right)
    if(curr.left != null) stack.push(curr.left)
  }

  return mostFreqVal;
}




/*

Find the most frequent value in a binary tree that matches a predicate.


function findMostFrequent(root, predicate)
function match(value) // predicate signature, returns true or false

*/



/*
Find the smallest positive value in a binary tree

function smallestPositive(root)

    5
   / \
  1   4
       \
       -1

smallestPositive(root) -> 1

    0
      -2


smallestPositive(root) -> 0

      -1
  -10      -20

smallestPositive(root) -> 0

      -1
  1         2

smallestPositive(root) -> 1

*/


function smallestPositive(root, predicate) {
  if (root == null) return 0

  let res = Infinity;
  let q = [ root ]

  while( q.length > 0 ) {

    let curr = q.shift()

    if(predicate(curr.val)) {
      if(curr.val > 0) {
        if(curr.val < res) {
          res = curr.val  // res = Math.min(res, curr.val)
        }

    }
  }
    if(curr.right !== null) q.push(curr.right)
    if(curr.left !== null) q.push(curr.left)

  }
  return res == Infinity ? 0 : res;
}


let n1 = new Node(1, new Node(3, new Node(3, new Node(2))), new Node(3, new Node(5, new Node (2), new Node(8))))

let n2 = new Node(-1, new Node(-3, new Node(-3, new Node(-2))), new Node(-3, new Node(5, new Node (-2), new Node(-8))))

function lessThanTen (val) {
  if (val < 3) return true;
  return false
}



console.log(smallestPositive(n1, lessThanTen))
console.log(smallestPositive(n2, lessThanTen))

