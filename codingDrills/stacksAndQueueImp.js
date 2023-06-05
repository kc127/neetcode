// Stack definition
// Simulating Stack operations in JavaScript

// what's the code for a stack?

// let s = [];
// s.push(1);
// s.push(2);
// s.push(3);
// console.log(s.pop()); // => 3
// console.log(s.pop()); // => 2
// console.log(s.pop()); // => 1
// console.log(s.pop()); // => undefined


// Queue definition
// Simulating Queue operations in JavaScript

// what's the code for a queue?

// let q = [];
// q.push(1);
// q.push(2);
// q.push(3);
// console.log(q.shift(), q); // => 1
// console.log(q.shift(), q); // => 2
// console.log(q.shift(), q); // => 3
// console.log(q.shift(), q); // => undefined
/*

  T
  |
  1 >> 2
  |
  H

*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class QEmptyError extends Error {}
class Q {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  enq(value) {
    if(this.head === null){
      this.head = this.tail = new Node(value);
    }
    else {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    }
  }

  deq() {
   if (this.head === null) {
    throw new QEmptyError();
   }

   let nodeToBeDeq = this.head;
   this.head = this.head.next;
   // i'm pretty sure all of our tests will pass without this
   if (this.head === null) {
    this.tail = null;
   }
   return nodeToBeDeq.value;
  }
}


let q = new Q();
let gotError = false;
try {
  q.deq();
} catch (e) {
  gotError = true;
}
if (!gotError) { console.log ('expected exception but got none') }
else console.log("OK, got the error");

q.enq(1);
q.enq(2);
q.enq(3);

console.log(q.deq(), 'should be 1'); // => 1
console.log(q.deq(), 'should be 2'); // => 2
console.log(q.deq(), 'should be 3'); // => 3

gotError = false;
try {
  q.deq();
} catch (e) {
  gotError = true;
}
if (!gotError) { console.log ('expected exception but got none') }
else console.log("OK, got the error");

// console.log(q.tail);
console.log('----------------------');


//  Rotate string with a queue

// params: "abcdefg", 2
// returns: either "cdefgab" / "fgabcde"
// "abc", 3 or 0
// return abc
// "abc", 1
// return cab or bca
/*

  a b c, k = 1

  q = a, b , c
      b, c, a



*/

q = stack() // same order as recursion (BFS)
q = q() // opposite order as recursion (DFS)
q.push(work);
q.pop()

function rotateStringWithQueue(str, k) {
  k = k % str.length;

    let strQueue = new Q();
    let finalStr = [];

    for (let ch of str) {
      strQueue.enq(ch);
    }

    for (; k > 0; k--) {
      let chToBeDeq = strQueue.deq();
      strQueue.enq(chToBeDeq);
    }

    while (!strQueue.isEmpty()) {
      finalStr.push(strQueue.deq());
    }

    return finalStr.join('');
}

console.log(rotateStringWithQueue("abc", 10));