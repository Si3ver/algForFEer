/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let pHead = new ListNode(-1)
  pHead.next = head
  let pre = pHead
  while (pre.next && pre.next.next) {
    let a = pre.next,
      b = a.next
    pre.next = b        // swap 1
    let tmp = b.next
    b.next = a          // swap 2
    a.next = tmp        // swqp 3
    pre = a             // pre移动两步
  }
  return pHead.next;
};
