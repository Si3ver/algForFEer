// trick 利用头结点，避免后面的判断
// 不断添加两个链表中小的那个头结点
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
  var p1 = pHead1, p2 = pHead2, p3 = new ListNode(-1), pHead3 = p3;
  while (p1 != null && p2 != null) {
    if (p1.val < p2.val) {
      p3.next = p1;
      p1 = p1.next;
    } else {
      p3.next = p2;
      p2 = p2.next;
    }
    p3 = p3.next;
  }
  p3.next = (p1 === null ? p2 : p1);
  return pHead3.next;
}
