class FreqStack {
  constructor() {
    this.freqMap = new Map();
    this.stack = [];
  }

  push(val) {
    let freq = (this.freqMap.get(val) || 0) + 1;
    this.freqMap.set(val, freq)

    // check if element in stack
    if (!this.stack[freq]) {
      this.stack[freq] = [val];
    } else {
      this.stack[freq].push(val)
    }

  }

  pop() {
    //
    let stackSize = this.stack.length;
    let topValues = this.stack[stackSize - 1];

    let topValue = topValues.pop();
    if (topValues.length === 0) {
      this.stack.pop();
    }
    let newFreq = this.freqMap.get(topValue) - 1;

    this.freqMap.set(topValue, newFreq);

    console.log('freqMap', this.freqMap)
    console.log('stack', this.stack)
    return topValue;
  }
}

const freqStack = new FreqStack();
console.log(freqStack.push(5)); // The stack is [5]
console.log(freqStack.push(7)); // The stack is [5,7]
console.log(freqStack.push(5)); // The stack is [5,7,5]
console.log(freqStack.push(7)); // The stack is [5,7,5,7]
console.log(freqStack.push(4)); // The stack is [5,7,5,7,4]
console.log(freqStack.push(5)); // The stack is [5,7,5,7,4,5]
console.log(freqStack.pop());   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
console.log(freqStack.pop());   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
console.log(freqStack.pop());   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
console.log(freqStack.pop());   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].


/*
'''
Frequency Stack

Implement a stack that returns the most frequent element when the pop() method is called instead of the last element added. In the event of a tie, pop the last element added into the stack.

EXPLORE

  Assumptions/Observations/Edge Cases:
  1. Not returning anything while pushing, returning the most freq elem while poping
  2.

  Examples:
    push: no elements FreqStack = []
    pop(): return undefined;

    push(1)
    push(2)
    push(1)
    push(2)   [1, 2, 1, 2]  => {elem: freq} => {1: 2, 2: 2}
    pop() return 2 => {1: 2, 2: 1}
    pop() return 1 => {1: 1, 2: 1}
    pop() return 2 => {1: 1}

    push(1) [1], {1:1}
    pop(), return 1  {}


BRAINSTORM
      Idea 1: Two Hashmaps
            conditions:
              1. return the elem with HIGHEST Freq
              2. if there is a TIE, we have to return the last pushed elem (STACK)


      push() time: O(1), space: n + n = 2n = O(n)
          push: [5,7,5,7,4,5]
           1) build elemFreq {elem: freq} => {5: 3, 4: 1, 7: 2}
           2) build freqToElem map or a STACK
                  {1: [4, 5],
                   2: [4, 5],
                   3: [5]}

              [[4, 5, 7],[4, 5, 7],[5]]

      pop() time: O(1)
          how to get topValue ??
           let stackSize = stack.length;
           let topValues = stack[stackSize - 1]
           topValue = topValues.pop()

           decrement the freq of topValue from elemFreq map
              elemFreq[topValue] = elemFreq[topValue] - 1

          return topValue;

      Idea 2: Hashmap + Stack

PLAN
IMPLEMENT
VERIFY

EXAMPLE(S)
FreqStack freqStack = new FreqStack();
freqStack.push(5); // The stack is [5]
freqStack.push(7); // The stack is [5,7]
freqStack.push(5); // The stack is [5,7,5]
freqStack.push(7); // The stack is [5,7,5,7]
freqStack.push(4); // The stack is [5,7,5,7,4]
freqStack.push(5); // The stack is [5,7,5,7,4,5]
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,5,7,4].
freqStack.pop();   // return 7, as 5 and 7 is the most frequent, but 7 is closest to the top. The stack becomes [5,7,5,4].
freqStack.pop();   // return 5, as 5 is the most frequent. The stack becomes [5,7,4].
freqStack.pop();   // return 4, as 4, 5 and 7 is the most frequent, but 4 is closest to the top. The stack becomes [5,7].


FUNCTION SIGNATURE
class FreqStack:
    def push(val: int) -> None:
        pass

    def pop() -> Optional[int]:
        pass
'''
*/