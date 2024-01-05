/*
base case
sub problem
accumulation strategy/return strategy
*/

// functionA -> function B -> function C

class Node{
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}


// Linked List Length
// call the function with head as perimeter
// if head is null return 0;
// return 1 + function with head.next

function lengthList(head){
  if(head === null){
    return 0;
  }
  return 1 + lengthList(head.next)
}

const ll1 = new Node(1,new Node(12, new Node(30, new Node(4))));
const ll2 = null;
console.log(lengthList(ll1) === 4);
console.log(lengthList(ll2) === 0);


// LLinked List Find Max/Min — show similarities in the pattern with the unwinding of the stack when the base case is complete

/*
  MAX
  Base case: if head is null return -infinity
  return the comparison of current value and max of sub linked list
*/


/*
-1 -> 1 -> 0 -> null

max null = -inf
max(0->null) = max(0) and max(null)
max(1->0->null) = max(1) and max(0->null)
*/

function max(head) {
  if(head === null) return -Infinity;
  return Math.max(head.value, max(head.next));
}

function min(head) {
  if(head === null) return Infinity;
  return Math.min(head.value, min(head.next));
}

console.log(max(ll1))
console.log(min(ll1))

/*
Fibonacci

fib(n)
base case:
  fib(1) = 1
  fib(0) = 0
recursive case:
  return fib(n-1) + fib(n-2)

fib(2) = fib(1) + fib(0)

                   fib(n)
        fib(n-1)              fib(n-2)
    fib(n-1-1)  fib(n-1-2)

O(2^n)
*/

/*
Given a keypad as shown in the diagram, and an N digit number which is represented by array a[ ], the task is to list all words which are possible by pressing these numbers.

Input: N = 3, a[] = {2, 3, 9}
Output:
count of possible responses - by building it out

2 = a or b or C
3 = d or e or f
4 = g or h or i

def wrapper(n_array):
 valid_solutions = []
 len_of_target = len(n_array)
 recursive(string, digits):
 if len(string) = len_of_target:
  valid_solutions.append(solution)
  return
 '' [2, 3, 4]
  recursive('a', [3,4])
      recursive('ad', [4])
        recursive('adg', [])
        recursive('adh', [])
        recursive('adi', [])
      recursive('ae', [4])
      recursive('af', [4])

  recursive('b', [3, 4])
  recursive('c', [3, 4])

                              a(2)           b(2)  c(2)
                          d(3) e(3) f(3)
                      g(4)

 O(branch^depth * depth)


Explanation: When we press 2,3,4 then
adg, adh, adi, ... cfi are the list of
possible words.
Example 2:

Input: N = 3, a[] = {3, 4, 5}
Output:


Explanation: When we press 3,4,5 then
dgj, dgk, dgl, ... fil are the list of
possible words.
*/