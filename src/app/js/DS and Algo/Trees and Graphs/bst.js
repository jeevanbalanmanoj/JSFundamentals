    class Node {
    constructor(data) {
        this.left = this.right = null;
        this.data = data;
    }
}
class BST {
    constructor() {
        this.root = null;
    }

    insertRec(data,root){
        if (this.root === null) {
            this.root = node;
            return;
        }
        if(root==null)
            return;           

        if(data<root.data)
            let result = this.insert(root.left);
        else
        let result = this.insert(root.left);


    }

    insert(data) {
        const node = new Node(data);
        if (this.root === null) {
            this.root = node;
            return;
        }
        let ptr = this.root;
        let save = this.root;
        while (ptr != null) {
            save = ptr;
            if (data < ptr.data)
                ptr = ptr.left;
            else
                ptr = ptr.right;
        }
        if (data < save.data)
            save.left = node;
        else
            save.right = node;
    }
    inorder(root) {
        if (root === null)
            return;
        this.inorder(root.left);
        console.log(root.data);
        this.inorder(root.right);

    }
}
module.exports = BST;
