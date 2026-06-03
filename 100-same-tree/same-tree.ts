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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const checkEqual = (nodeOne?: TreeNode, nodeTwo?: TreeNode) => {
        if (nodeOne?.val != nodeTwo?.val || typeof nodeOne != typeof nodeTwo) return false;

        if (!nodeOne && !nodeOne) return true;

        const leftValue = nodeOne.left === null && nodeTwo.left === null ? true : checkEqual(nodeOne?.left, nodeTwo?.left);
        const rightValue = nodeOne.right === null && nodeTwo.right === null ? true : checkEqual(nodeOne?.right, nodeTwo?.right)

        return leftValue && rightValue;
    }

    return checkEqual(p, q);
};