function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let helper = (preorder, inorder, preStart, preEnd, inStart, inEnd) => {
    if (preEnd <= preStart || inEnd <= inStart) {
        if (preEnd === preStart && inEnd === inStart) {
            return new TreeNode(preorder[preStart]);
        } else {
            return null;
        }
    }
    let rootVal = preorder[preStart],
        idx = inorder.indexOf(rootVal),
        leftLen = idx - inStart;
    let root = new TreeNode(rootVal);
    root.left = helper(preorder, inorder, preStart + 1, preStart + leftLen, inStart, idx);
    root.right = helper(preorder, inorder, preStart + leftLen + 1, preEnd, idx + 1, inEnd);
    return root;
}

let buildTree = (preorder, inorder) => {
    return helper(preorder, inorder, 0, preorder.length - 1, 0, inorder.length - 1);
}

// let arr1 = [3, 9, 20, 15, 7];
// let arr2 = [9, 3, 15, 20, 7];
let arr1 = [4, 1, 2, 3];
let arr2 = [1, 2, 3, 4];
var ret = buildTree(arr1, arr2);
console.log(JSON.stringify(ret, null, 2));
