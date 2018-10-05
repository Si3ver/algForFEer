/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    let pNewHead = null,
        pNode = pHead,
        pPrev = null;
    while(pNode !== null){
        let pNext = pNode.next;
        if(pNext === null) pNewHead = pNode;
        pNode.next = pPrev;
        // 向后遍历
        pPrev = pNode;
        pNode = pNext;
    }
    return pNewHead;
}