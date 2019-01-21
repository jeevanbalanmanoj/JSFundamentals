class Node {
    constructor(data) {
        this.left = this.right = null;
        this.data = data;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }
    inorder(root) {
        if (root === null)
            return;
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);
    }

    hasIdentical(roott1, roott2) {
        if (roott1 === null)
            return null;

        let child = this.hasIdentical(roott1.left, roott2);
        if (child !== null)
            return child;
        if (this.isIdentical(roott1, roott2))
            return roott1;
        child = this.hasIdentical(roott1.right, roott2);
        if (child !== null)
            return child;
        return null;
    }

    isIdentical(rootA, rootB) {
        if (rootA === null && rootB === null)
            return true;
        else if (rootA === null || rootB === null)
            return false;
        else
            return (rootA.data === rootB.data &&
                this.isIdentical(rootA.left, rootB.left)
                && this.isIdentical(rootA.right, rootB.right));
    }

    isBalanced() {
        const flag = {
            isBalanced: true
        }
        this.isBalancedRec(this.root, flag);
        return flag.isBalanced;
    }
    isBalancedRec(root, flag) {
        if (root === null)
            return 0;
        if (!flag.isBalanced)
            return;
        const leftHeight = this.isBalancedRec(root.left, flag);
        if (!flag.isBalanced)
            return;
        const rightheight = this.isBalancedRec(root.right, flag);
        if (Math.abs(leftHeight - rightheight) > 1)
            flag.isBalanced = false;
        const height = 1 + Math.max(leftHeight, rightheight);
        return height;
    }
    bfs() {
        const Queue = require("./Queue.js")

        const queue = new Queue();
        queue.enqueue(this.root);
        let item;
        while (!queue.isEmpty()) {
            item = queue.dequeue();
            console.log(item.data);
            if (item.left !== null)
                queue.enqueue(item.left)
            if (item.right !== null)
                queue.enqueue(item.right)
        }
    }
    bfsLevel() {
        const Queue = require("./Queue.js")

        let queue = new Queue();
        queue.enqueue(this.root);
        let item;
        let count = 1;
        let nextCount = 0;
        
        let parents = new Queue();


        while (!queue.isEmpty()) {
            console.log("\n");
            parents = queue;
            queue = new Queue();
            while (!parents.isEmpty()) {
                let parent = parents.dequeue();
                console.log(parent.data);
                if (parent.left !== null)
                    queue.enqueue(parent.left)
                if (parent.right !== null)
                    queue.enqueue(parent.right)

            }
        }
    }
}
module.exports = { Tree, Node };