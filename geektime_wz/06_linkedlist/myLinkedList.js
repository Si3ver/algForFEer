// 《剑指offer》中链表相关的题
// t3  从尾到头打印链表
// t14 链表中倒数第k个结点
// t15 反转链表
// t16 合并两个排序的链表
// t25 复杂链表的复制
// t26 二叉搜索树与双向链表
// t36 两个链表的第一个公共结点
// t55 链表中环的入口结点
// t56 删除链表中重复的结点

class ListNode {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {

  constructor () {
    this.head = new ListNode(-1);
    this.length = 0;
  }

  getLength () {
    return this.length;
  }

  getHead () {
    return this.head;
  }
  // 取第k个结点，第零个是头结点-1
  getKthNode (k){
    var pNode = this.head, pos = 0;
    while (pNode != null && pos < k){
      pNode = pNode.next;
      ++pos;
    }
    return pos < k ? null : pNode;
  }

  insert (idx, newVal) {
    var newNode = new ListNode(newVal);
    if (idx < 0 || idx > this.length){
      return;
    }else if(idx === 0){         // 插入元素变为头元素
      newNode.next = this.head.next;
      this.head.next = newNode;
      ++this.length;
    }else{                      // 其他位置
      var pPrev = this.getKthNode(idx-1);
      newNode.next = pPrev.next;
      pPrev.next = newNode;
      ++this.length;
    }
  }

  append (newVal){
    var newNode = new ListNode(newVal);
    var tail = this.getKthNode(this.length);
    tail.next = newNode;
    ++this.length;
  }

  remove (idx) {
    if (idx <= 0 || idx > this.length){
      return;
    }else{
      var pPrev = this.getKthNode(idx - 1);
      if (pPrev.next != null){
        pPrev.next = pPrev.next.next;
        --this.length;
      }
    }
  }
}

function display(pHead) {
  var pNode = pHead,
    res = [];
  while (pNode != null) {
    res.push(pNode.val);
    pNode = pNode.next;
  }
  console.log(`linkedlist content: ${res}`);
}

function printListFromTailToHead(head) {
  var arr = [], p = head;
  while (p != null) {
    arr.unshift(p.val);
    p = p.next;
  }
  return arr;
}

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

function ReverseList(pHead) {
  var pNewHead = null,
    pNode = pHead,
    pPrev = null,
    pNext = null;
  while (pNode != null) {
    pNext = pNode.next;
    if (pNext == null)
      pNewHead = pNode;
    pNode.next = pPrev;
    pPrev = pNode;
    pNode = pNext;
  }
  return pNewHead;
}

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

// ---Test---
var l = new LinkedList();
l.insert(-20, 500);
l.insert(-40, 600);
l.append(700);
l.insert(300, 550);
var pHead = l.getHead();
display(pHead);
l.insert(1, 300);
pHead = l.getHead();
display(pHead);

console.log(`从尾到头输出链表内容:${printListFromTailToHead(pHead)}`);
var k = 2;
console.log(`倒数第${k}个元素:${FindKthToTail(pHead, k).val}`);

pHead = ReverseList(pHead);
display(pHead);

var ll1 = new LinkedList();
ll1.insert(100, 30);
ll1.insert(100, 32);
ll1.insert(100, 43);
ll1.insert(100, 50);
ll1.insert(100, 50);
ll1.insert(100, 78);
var ll2 = new LinkedList();
ll2.insert(100, 30);
ll2.insert(100, 40);
ll2.insert(100, 50);
ll2.insert(100, 60);
ll2.insert(100, 70);
ll2.insert(100, 80);
var pHead1 = ll1.getHead(), pHead2 = ll2.getHead();
var pMerge = Merge(ll1, ll2);
display(pMerge);
