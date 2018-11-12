// 2018-11-12 从上往下打印二叉树
// tip: 层序遍历，借助辅助结构 队列！
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function PrintFromTopToBottom(root)
{
    var queue = [], res = [];
    if (root != null) queue.push(root);
    while (queue.length > 0) {
        var node = queue.shift();
        res.push(node.val);
        if (node.left != null)
            queue.push(node.left);
        if (node.right != null)
            queue.push(node.right);
    }
    return res;
}
