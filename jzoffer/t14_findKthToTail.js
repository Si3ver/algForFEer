/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    var p = head, q = head, i = 0;
    for(; p !== null; ++i){
        if(i >= k){
            q = q.next;
        }
        p = p.next;
    }
    return i < k ? null : q;
}