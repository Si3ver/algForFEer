/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    if(root === null){
        return;
    }
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    Mirror(root.left);
    Mirror(root.right);
}