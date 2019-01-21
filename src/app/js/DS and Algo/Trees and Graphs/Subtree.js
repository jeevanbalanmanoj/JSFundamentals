

const { Tree, Node } = require('./Tree.js');
const t1 = new Tree();
t1.root = new Node(10);
t1.root.left = new Node(5);
t1.root.right = new Node(25);
t1.root.right.right = new Node(50);
t1.root.right.right.right = new Node(100);
//t1.inorder(t1.root);

const t2 = new Tree();
t2.root = new Node(25);
t2.root.right = new Node(50);
t2.root.right.right = new Node(100);
//t2.root.right.left = new Node(100);

//t2.root.right.right.right =new Node(100);
//t2.root.right.right.left =new Node(100);

//t2.inorder(t2.root);
//console.log(t1.isIdentical(t1.root, t2.root));
const result = t1.hasIdentical(t1.root, t2.root);
if (result !== null)
    console.log("Subtree at ", result.data);
else
    console.log("Not a substree");

