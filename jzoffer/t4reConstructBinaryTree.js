// 重建二叉树

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// 递归~
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    if(pre instanceof Array && vin instanceof Array && pre.length === 0 && vin.length === 0){
        return null;
    }else if(pre.length > 0 && vin.length > 0){
        var len1 = vin.indexOf(pre[0]);
        var pre1 = pre.slice(1, len1+1), pre2 = pre.slice(len1+1, pre.length);
        var vin1 = vin.slice(0, len1), vin2 = vin.slice(len1+1, vin.length);
        return {
            val: pre[0],
            left: reConstructBinaryTree(pre1, vin1),
            right: reConstructBinaryTree(pre2, vin2)
        };
    }
}

// test
/*
    1
   /  \
  2    3
 /    / \
4    5   6
 \      /
  7     8
*/
var pre = [ 1, 2, 4, 7, 3, 5, 6, 8];
var vin = [ 4, 7, 2, 1, 5, 3, 8, 6];
var tree = reConstructBinaryTree(pre, vin);
// console.log(tree, JSON.stringify(tree));
// 1. BFS打印二叉树
function bfs_traverse(root)
{
    var queue = [], res = [];
    if(root !== null){
        queue.unshift(root);
    }
    while(queue.length > 0){
        var item = queue.pop()
        res.push(item.val);
        if(item.left)
            queue.unshift(item.left);
        if(item.right)
            queue.unshift(item.right);
    }
    return res;
}
// 2. DFS-递归 先序打印二叉树
function dfs_traverse_recur(root)
{
    var res = [];
    recurse(root, res);
    return res;

    function recurse(root, res){
        if(root){
            res.push(root.val);
            recurse(root.left, res);
            recurse(root.right, res);
        }
    }
}
// 3. DFS-非递归 先序打印二叉树
function dfs_traverse(root)
{
    var res=[], stack = [], p = root;

    while(p !== null || stack.length > 0){
        while(p !== null){
            res.push(p.val);
            stack.push(p);
            p = p.left;
        }
        if(stack.length > 0){
            p = stack.pop();
            p = p.right;
        }
    }
    return res;
}

console.log('BFS层序遍历', bfs_traverse(tree));
console.log('DFS先序遍历(递归)', dfs_traverse_recur(tree));
console.log('DFS先序遍历(非递归)', dfs_traverse(tree));
