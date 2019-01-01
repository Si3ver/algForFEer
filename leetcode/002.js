/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var sum, c = 0, head = new ListNode(-1);
  var p = head;
  while (l1 || l2) {
    sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + c;
    c = Math.floor((sum) / 10);
    p.next = new ListNode(sum % 10);
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
    p = p.next;
  }
  if (c){
    p.next = new ListNode(c);
  }
  return head.next;
};