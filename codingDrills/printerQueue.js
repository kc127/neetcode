/*
'''
❓ PROMPT
You are asked to design a simple printer queue.

The printer can only perform one operation at a time and processes the print jobs in the order they are added to the queue. The actions parameter is a list of tuples, where each tuple contains one of the following commands:

("add", "document_name"): Add a new document to the print queue.
("print",): Print the next document in the queue.
("cancel", "document_name"): Cancel a document in the queue. If the document is not in the queue, do nothing.
The function should return a list of strings representing the names of the printed documents in the order they were printed.

Example(s)
actions = [
    ("add", "doc1"),    # Add 'doc1' to the queue
    ("add", "doc2"),    # Add 'doc2' to the queue
    ("print",),         # Print 'doc1' from the queue to the printed queue
    ("cancel", "doc1"), # Remove 'doc1' from the queue (do nothing)
    ("add", "doc3"),    # Add 'doc3' to the queue
    ("print",),         # Print 'doc2' from the queue to the printed queue
    ("print",)          # Print 'doc3' from the queue to the printed queue
]

result = printer_queue(actions)
print(result)  # Output: ['doc1', 'doc2', 'doc3']

<space />

Hint: What is the difference between a stack and a queue, and why do we use a queue in this question?

A: Queues follow First-In-First-Out (FIFO) principle, whereas Stacks are Last-In-First-Out (LIFO) principle. We use a queue in this particular problem because the documents added to the queue should be printed in the order it was added.


🔎 EXPLORE
List your assumptions & discoveries:
 - we are creating two Queues, one to store the docs, second queue to store the docs that have been printed

Insightful & revealing test cases:
 - can the input actions be empty => yes
 - can we have duplicate input elements => no
 - can we have incorrect input elements => no

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Traversal approach
Time: O(n)
Space: O(n + n) ~ O(2n) ~ O(n)


📆 PLAN
Outline of algorithm #:
    Create a empty queue (array) to add docs to be printed
    Create a empty printedQueue (array) to store already printed docs
    Traverse the input actions and at each actions
        if action is add => add the doc to queue
        if action is cancel => remove doc from queue
        if action is print => remove doc from queue
                              add doc to printed queue


🛠️ IMPLEMENT
function printerQueue(actions) {) // returns list
def printer_queue(actions: list) -> list:


🧪 VERIFY
Run tests. Methodically debug & analyze issues.

'''
*/

function printerQueue(actions) {
  let queue = [];
  let printedQueue = [];

  for (let action of actions) {
    let op = action[0];
    let doc = action[1];

    if (op === 'add') {
      queue.push(doc);
    } else if (op === 'cancel') {
      if (queue.indexOf(doc) !== -1) {
        let idx = queue.indexOf(doc)
        queue.splice(idx, 1)
      }
    } else {
      if (queue.length > 0) {
        printedQueue.push(queue.shift());
      }
    }
  }
  return printedQueue;
}

// Test Case 1: Basic operations
let actions = [
  ["add", "doc1"],
  ["add", "doc2"],
  ["print"],
  ["print"]
];
let result = printerQueue(actions);
console.log(result);  // Output: ['doc1', 'doc2']

// Test Case 2: Cancel operation
actions = [
  ["add", "doc1"],
  ["add", "doc2"],
  ["cancel", "doc2"],
  ["print"],
  ["print"]
];
result = printerQueue(actions);
console.log(result);  // Output: ['doc1']

// Test Case 3: Cancel non-existent document
actions = [
  ["add", "doc1"],
  ["cancel", "doc2"],
  ["print"],
  ["print"]
];
result = printerQueue(actions);
console.log(result);  // Output: ['doc1']

// Test Case 4: Empty input
actions = [];
result = printerQueue(actions);
console.log(result);  // Output: []

// Test Case 5: Complex operations
actions = [
  ["add", "doc1"],
  ["add", "doc2"],
  ["print"],
  ["cancel", "doc1"],
  ["add", "doc3"],
  ["print"],
  ["print"],
  ["cancel", "doc4"],
  ["add", "doc5"],
  ["print"],
  ["add", "doc6"],
  ["cancel", "doc6"],
  ["print"],
];
result = printerQueue(actions);
console.log(result);  // Output: ['doc1', 'doc2', 'doc3', 'doc5']