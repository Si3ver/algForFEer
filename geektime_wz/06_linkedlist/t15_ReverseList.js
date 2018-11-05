// t15 反转链表
// 右链表删除的头结点，让左链表添加到头部
// 注意点： 先得保存当前结点的后一个结点pNext，避免链断裂
// 中间共需要三个指针，pPrev、pNode、pNext。 核心代码是 pNode.next = pPrev
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
  var pNewHead = null,
      pNode = pHead,
      pPrev = null,
      pNext = null;
  while (pNode != null){
    pNext = pNode.next;
    if(pNext == null)
      pNewHead = pNode;
    pNode.next = pPrev;
    pPrev = pNode;
    pNode = pNext;
  }
  return pNewHead;
}
