// t14 链表中倒数第k个结点
// 快指针和慢指针
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
  var pQuick = head,
    pSlow = head;
  while (k > 0) {
    if (pQuick != null) {
      pQuick = pQuick.next;
    } else {
      return null;
    }
    --k;
  }
  while (pQuick != null) {
    pQuick = pQuick.next;
    pSlow = pSlow.next;
  }
  return pSlow;
}
