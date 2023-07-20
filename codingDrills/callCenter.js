/*
'''
❓ PROMPT
Design a simplified call center system that connects incoming calls to available operators.

The system should provide the following features:

* Add or release operators.
* Accept incoming calls.
* Assign calls to operators in the order they were received.
* If no operators are available, the calls should be queued and connected to an operator once one becomes available.

Implement a function that takes a list of actions and processes them. Each action is a tuple containing two strings.

The first string represents the action type ("add_operator", "receive_call", or "release_operator"), and the second string represents the ID of the operator or call.

Example(s)
actions = [
    ("add_operator", "A"),         # Add operator A
    ("add_operator", "B"),         # Add operator B
    ("receive_call", "1"),         # Receive call 1, connect it to operator A (first available)
    ("receive_call", "2"),         # Receive call 2, connect it to operator B (next available)
    ("release_operator", "A"),     # Release operator A from call 1
    ("receive_call", "3"),         # Receive call 3, connect it to operator A (first available after release)
    ("release_operator", "B"),     # Release operator B from call 2
    ("receive_call", "4"),         # Receive call 4, connect it to operator B (first available after release)
]

Output: [('1', 'A'), ('2', 'B'), ('3', 'A'), ('4', 'B')]

*/
function processCallCenterActions(actions) {
  let receivedCallsInQ = [];
  let operatorsAvailableQ = [];
  let callWithOperators = [];

  for (let [action, id] of actions) {
    if (action === "add_operator") {
      operatorsAvailableQ.push(id);
    } else if (action === "receive_call") {
      receivedCallsInQ.push(id);
      if (operatorsAvailableQ.length !== 0) {
         let operator = operatorsAvailableQ.shift();
         let firstId = receivedCallsInQ.shift();
         callWithOperators.push([firstId, operator]);
      }
    } else if (action === "release_operator") {
      operatorsAvailableQ.push(id);
    }
  }

  while (operatorsAvailableQ.length !== 0 && receivedCallsInQ.length !== 0) {
    let operator = operatorsAvailableQ.shift();
    let firstId = receivedCallsInQ.shift();
    callWithOperators.push([firstId, operator]);
  }


  return callWithOperators;
}

// let actions = [
//   ["add_operator", "A"],
//   ["add_operator", "B"],
//   ["receive_call", "1"],
//   ["receive_call", "2"],
//   ["release_operator", "A"],
//   ["receive_call", "3"],
//   ["release_operator", "B"],
//   ["receive_call", "4"],
// ]

// console.log(processCallCenterActions(actions));

// Test Case 1: No calls received
let actions = [
  ["add_operator", "A"],
  ["add_operator", "B"]
];
let result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([]));

// Test Case 2: No operators available
actions = [
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["receive_call", "3"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([]));

// Test Case 3: Multiple operators and calls, no releases
actions = [
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["receive_call", "3"],
  ["receive_call", "4"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B']]));

//Test Case 4: Alternating adding operators and receiving calls
actions = [
  ["add_operator", "A"],
  ["receive_call", "1"],
  ["add_operator", "B"],
  ["receive_call", "2"],
  ["add_operator", "C"],
  ["receive_call", "3"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B'], ['3', 'C']]));

// Test Case 5: Complex Operation with releases
actions = [
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["release_operator", "A"],
  ["receive_call", "3"],
  ["release_operator", "B"],
  ["receive_call", "4"],
  ["receive_call", "5"],
  ["receive_call", "6"],
  ["release_operator", "A"],
  ["release_operator", "B"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B'], ['3', 'A'], ['4', 'B'], ['5', 'A'], ['6', 'B']]));

// Test Case 6: Releasing operators after calls
actions = [
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["release_operator", "A"],
  ["release_operator", "B"],
  ["receive_call", "3"],
  ["receive_call", "4"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B'], ['3', 'A'], ['4', 'B']]));

// Test Case 7: Releasing operators without any calls
actions = [
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["release_operator", "A"],
  ["release_operator", "B"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([]));

// Test Case 8: Releasing operators while calls are waiting
actions = [
  ["receive_call", "1"],
  ["receive_call", "2"],
  ["add_operator", "A"],
  ["add_operator", "B"],
  ["release_operator", "A"],
  ["receive_call", "3"],
  ["release_operator", "B"],
  ["receive_call", "4"]
];
result = processCallCenterActions(actions);
console.log(JSON.stringify(result) === JSON.stringify([['1', 'A'], ['2', 'B'], ['3', 'A'], ['4', 'B']]));

/* official solution */
function processCallCenterActions(actions) {
  let operatorQueue = [];
  let callQueue = [];
  let connections = [];

  for (let [action, id] of actions) {
      if (action === "add_operator") {
          if (callQueue.length > 0) {
              // If there are calls waiting, connect the operator with the first call in the queue
              let callId = callQueue.shift();
              connections.push([callId, id]);
          } else {
              // If there are no waiting calls, add the operator to the operator queue
              operatorQueue.push(id);
          }
      } else if (action === "receive_call") {
          if (operatorQueue.length > 0) {
              // If there are operators available, connect the call with the first operator in the queue
              let operatorId = operatorQueue.shift();
              connections.push([id, operatorId]);
          } else {
              // If there are no operators available, add the call to the call queue
              callQueue.push(id);
          }
      } else if (action === "release_operator") {
          if (callQueue.length > 0) {
              // If there are calls waiting, connect the released operator with the first call in the queue
              let callId = callQueue.shift();
              connections.push([callId, id]);
          } else {
              // If there are no waiting calls, add the released operator back to the operator queue
              operatorQueue.push(id);
          }
      }
  }

  return connections;
}