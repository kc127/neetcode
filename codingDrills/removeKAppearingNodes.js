/*

Remove K-Appearing Nodes from Unsorted List

Given the head node of a singly linked list, find nodes where they have already appeared (k) or more times.

Return the head node of the new linked list, after deleting/removing the nodes.

If a node appears more than once in a list, only the nodes that are `kth` or higher must be deleted. You can still retain the nodes leading up to the `kth` occurrence.


EXAMPLES:

4 -> 3 -> X -> 2 -> 1, k = 2 should return 4 -> 3 -> 2 -> 1
                    ^

4 = 2 < k = 2 No, remove 4
3 = 1 < k
2 = 1 < k
1 = 1 < k


** ENGINEERING METHODS **

EXPLORE
  - possible to have duplicates
  - possible to have an null llist => return null or head
  - possible to have no duplicates
  - possible to gave 1-node
  - possible to have a unsorted list
  - can we modify the input list => yes
  - can k < 2  => yes, return null



BRAINSTORM/ APPROACHES
  1. Traverse the list to create a freq map to get the freq of values
  2. at each node
        2a. if count of curr node is equal to k => Remove node from list
        2b. else, increment the count
  3. return the modified list

PLAN

IMPLEMENT

TEST




*/
class ListNode {
  constructor(value = 0, next = null) {
    this.value = value,
    this.next = next;
  }
}

function removeKAppearingNodes(head, k) {
  if (!head.next) {
    return head;
  }
  if (k < 2) {
    return null;
  }

  let curr = head;
  let prev = null;
  let freqMap = {};

  while (curr) {
    if (!freqMap[curr.value]) {
      freqMap[curr.value] = 1;
    } else {
      freqMap[curr.value]++;
    }

    if (freqMap[curr.value] >= k) {
      prev.next = curr.next;
      curr = curr.next
    }

    prev = curr;
    curr = curr.next;
  }

  return head;
}

var LL1 = new ListNode(4,new ListNode(4,new ListNode(1,new ListNode(5))));

console.log(removeKAppearingNodes(LL1, 2)) // 4 -> 1 -> 5