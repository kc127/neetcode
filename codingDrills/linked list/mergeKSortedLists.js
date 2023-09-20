/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

  let previous = null;

  for (let i = 0; i < lists.length; i++) {
    previous = mergeTwoLists(previous, lists[i]);
  }

  return previous;
}

var mergeTwoLists = function(list1, list2) {
    let dummyHead = new ListNode(0);
    let head = dummyHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            dummyHead.next = list1;
            list1 = list1.next;
        } else {
            dummyHead.next = list2;
            list2 = list2.next;
        }
        dummyHead = dummyHead.next;
    }

    if (list1) {
        dummyHead.next = list1;
    } else {
        dummyHead.next = list2;
    }

    return head.next;
};

