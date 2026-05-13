/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (!root) return;

    const alignNode = (node: TreeNode | null, tempNode: TreeNode | null = null): TreeNode | null => {
        if (!node) return tempNode;
        
        let temp = alignNode(node.right, tempNode);
        node.right = alignNode(node.left, temp);
        node.left = null;

        return node;
    }

    alignNode(root);
};