/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(p1, p2)
{
    var p = new ListNode(-1);
    var root = p;
    while(p1 !== null && p2 !== null){
        if(p1.val < p2.val){
            p.next = p1;
            p = p1;
            p1 = p1.next;
        }else{
            p.next = p2;
            p = p2;
            p2 = p2.next;
        }
    }
    p.next = p1===null ? p2 : p1;
    return root.next;
}

// ---test---
function ListNode(x){
    this.val = x;
    this.next = null;
}
function printLinkList(list)
{
    var arr = [];
    while(list !== null){
        arr.push(list.val);
        list = list.next;
    }
    console.log(arr);
}
function constructLinkList(arr)
{
    var root = new ListNode(-1);
    var p = root;
    console.log(p);
    for(var i = 0; i < arr.length; ++i){
        var node = new ListNode(arr[i]);
        p.next = node;
        p = node; 
    }
    return root.next;
}
function main()
{
    var arr1 = [1, 3, 5, 7], arr2 = [2,4,5,6,8,10];
    var list1 = constructLinkList(arr1);
    var list2 = constructLinkList(arr2);
    var res = Merge(list1, list2);
    printLinkList(res);
}
main();
