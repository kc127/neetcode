/**
 *
 * function reduce(head, accumulator, initialVal) - returns single value
function map(head, mapper) - returns new list
function any(head, test) - returns true if at least one value passes the test function
function all(head, test) - returns true if ALL of the values in the list pass the test function

*/


//function reduce(head, accumulator, initialVal) - returns single value



class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

let head = new Node(1, new Node(2, new Node(3, new Node(4))));



function reduce (node, accumulator, initialVal) {
  let totalSum = initialVal;
  let curr = node;
  while (curr) {
    totalSum = accumulator(curr.val, totalSum);
    curr = curr.next;
  }
  return totalSum;
}

function sumAccumulator(val1, val2){
   return val1 + val2;
}

function multiplyAccumulator(val1, val2){
  return val1 * val2;
}


var totalSum  = reduce(head,sumAccumulator, 0)
var totalMultiplicatedValue  = reduce(head,multiplyAccumulator, 1)


console.log(totalSum);
console.log(totalMultiplicatedValue);

/*
        head    accumulator     initialVal      output
        head     sum()             0

*/


//function map(head, mapper) - returns new list
function map(head, mapper) {
  const sentinel = new Node(null);
  let mappedHead = sentinel;
  let curr = head;
  while (curr) {
    mappedHead.next = new Node(mapper(curr.val));
    mappedHead = mappedHead.next;
    curr = curr.next;
  }
  return sentinel.next;
}

function plusOne(val) {
  return val + 1;
}

function doubleMapper(value){
  return value*2;
}

var printLL = (head) =>{

  while(head != null){
      process.stdout.write(head.val+"->");
      head = head.next;
  }
    // console.log();
}
console.log(printLL(map(head, plusOne))); // 2, 3, 4, 5
console.log(printLL(map(head, doubleMapper)));



//1
//function any(head, test) - returns true if at least one value passes the test function
/*
any()

   [1, 2, 3] should return true

   test = isOdd

all()
    [1, 2, 3] should return false
   test = isOdd
*/
/*

*/
function reduce (node, accumulator, initialVal) {
  let totalSum = initialVal;
  let curr = node;
  while (curr) {
    totalSum = accumulator(totalSum, curr.val);
    curr = curr.next;
  }
  return totalSum;
}


/**
  Takes 2 values
  param1  :  boolean
  param2 : integer which needs to be tested
**/

function isOdd(int) {
  if (int % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
//(prev, curr) => (prev && test(curr))
function oddAccumulator(v1, v2) {
  return v1 || isOdd(v2);
}

function any(head, oddAccumulator) {
  return reduce(head, accumulator, false);
}
console.log(any(head,oddAccumulator));



// function isOdd(int) {
//   if (int % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }


//2
//function all(head, test) - returns true if ALL of the values in the list pass the test function

function all(head, test) {
  return reduce(head, (prev, curr) => (prev && test(curr)), true);
}


