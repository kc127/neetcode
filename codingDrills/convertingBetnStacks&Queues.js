/**
Stacks and queues are related in more ways that just being opposite from each other in their access models. Each can be used to implement the other! Let's be clear, theses are not useful and no one should actually implement these classes in this manner but this is a great exercise for building skill and understanding with limited access data structures.

In this workout, we are providing (at least in Javascript) some very basic NaiveStack and NaiveQueue classes. These are also not recommended ways of implementing these, but we'll use them here as our fundamental units. Using NaiveStack, implement a Queue class. Then do the opposite: using NaiveQueue, implement a Stack class.


EXAMPLE(S)
Normal stack and queue operations should be tested.


FUNCTION SIGNATURE
Naive stack and queue implementations are provided here, and then shell classes to implement are below.

class NaiveStack {
  constructor() {
    this.array = []
  }

  push(value) {
    this.array.push(value)
  }

  pop() {
    return this.array.pop()
  }

  size() {
    return this.array.length
  }
}

class NaiveQueue {
  constructor() {
    this.array = []
  }

  enqueue(value) {
    this.array.push(value)
  }

  dequeue() {
    return this.array.shift()
  }

  size() {
    return this.array.length
  }
}

// Implement me:

NaiveQueue = [1, 2, 3]

pop()
      NaiveQueue.dequeue() = 1  , [2, 3]
      NaiveQueue.dequeue() = 2  , [3]
      NaiveQueue.dequeue() = 3    []

  NaiveQueue = [1, 2]

QueueWithStacks


class StackWithQueues {
  constructor() {}
  push(value) {}
  pop() {}
}

// Implement me:
class QueueWithStacks {
  constructor() {}
  enqueue(value) {}
  dequeue() {}
}

Notes:
- StackWithQueues can only be implemented using the NaiveQueue data structures & vice versa
- Stacks
  - LIFO -- Last In First Out
  - When pushing elements to the stack, they're placed on the "end"
  - When popping, we remove from the "end"

- Queue
  - FIFO -- First In First Out
  - When enqueueing we add to the "end"
  - When dequeueing we remove from the "start"

StacksWithQueues:
- needs 2 queues
  - inQueue
  - outQueue
- push:
  - enqueue to inQueue
  - dequeue all elements from outQueue and store in inQueue
  - switch inQueue and outQueue
- pop (constant time):
  - dequeue from out

QueuesWithStacks:
- needs 2 stacks
- enqueue (constant time):
  -
- dequeue:
  -
*/
class NaiveStack {
  constructor() {
    this.array = []
  }

  push(value) {
    this.array.push(value)
  }

  pop() {
    return this.array.pop()
  }

  size() {
    return this.array.length
  }
}

class NaiveQueue {
  constructor() {
    this.array = []
  }

  enqueue(value) {
    this.array.push(value)
  }

  dequeue() {
    return this.array.shift()
  }

  size() {
    return this.array.length
  }
}


class StacksWithQueues {
  constructor() {
    this.inQueue = new NaiveQueue()
    this.outQueue = new NaiveQueue()
  }

  push(value) {
    this.inQueue.enqueue(value);
    while(this.outQueue.size !== 0) {
      let valueToBeDeq = this.outQueue.dequeue();
      this.inQueue.enqueue(valueToBeDeq);
    }

    [this.inQueue, this.outQueue] = [this.outQueue, this.inQueue]
  }

  pop() {
    return this.outQueue.dequeue();
  }
}


































/**
https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions
https://neetcode.io/practice
https://docs.google.com/document/d/1AlvBk1M_vYvDm_d6LBEVR645qSoCay6d2BX_4jBXql8/edit?usp=sharing


3 Levels to Algorithm Mastery
1. Understanding the Base Algorithm
    - Sort problems by topic
    - Sort by difficult, easy -> hard
    - Grind out the easy questions and try to understand them as much as you can.
    - Look at the discussion/solution to get clarity if stuck.
2. Identifying Algorithm in Questions
    - For every question you do in the above section, go to the left tab and look at the "Similar Questions" section.
    - Do every question within 1-level-higher of the similar questions.
    - Really look at the question, and try and find hints to affirm that the algorithm you used previously applies to this question.
3. Modifying Algorithm for Specific Questions
    - As you do the above questions, solve the question utilizing your previous solution and change the pieces that need to be changed.
    - Recommend NOT looking at the solution/discussion until you feel like you're at the point of (mental/emotional) failure

Study Guide:
- Copy/Paste the Question and Implementation
- Write a paragraph summary in human-readable format explaining the solution
* Keep track of the questions that you didn't do well on
    - Come back to that question a week later
A week before any of your big interviews, allocate time to do questions filtered by company/frequency
    - These will have questions you'll most likely getsa
    - You should be more comfortable around questions like this, that you haven't seen before
    - And you'll get more exposure around those questions
    - NOTE: I got a shit ton of those most-frequent questions in my interviews
 */