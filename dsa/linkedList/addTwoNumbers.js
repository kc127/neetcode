function addNumbers(l1, l2) {
  if (!l1 && !l2) return null;
  if (!l1) return l2;
  if (!l2) return l1;

  let curr1 = l1;
  let curr2 = l2;
  let dummyHead = new Node(-1);
  let head = dummyHead;
  let carry = 0;
  while (curr1 || curr2) {
    let x = curr1 ? curr1.val : 0;
    let y = curr2 ? curr2.val : 0;
    let sum = (x + y + carry)%10;
    carry = Math.floor((x+y)/10);
    head.next = new Node(sum);
    head = head.next;

    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  return dummyHead.next;
}

