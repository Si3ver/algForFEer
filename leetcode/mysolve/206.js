// 2019年01月04日17:23:17
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
var reverseList = function (head) {
  let cur = head, prev = null
  while(cur != null){
    let tmp = cur.next
    cur.next = prev
    prev = cur
    cur = tmp
  }
  return prev
};
