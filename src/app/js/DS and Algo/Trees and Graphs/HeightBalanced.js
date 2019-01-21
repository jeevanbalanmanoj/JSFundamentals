

const { Tree, Node } = require('./Tree.js');
const t1 = new Tree();
t1.root = new Node(10);
t1.root.left = new Node(5);
t1.root.left.left = new Node(1);

t1.root.right = new Node(25);
t1.root.right.left = new Node(2);

t1.root.right.right = new Node(50);
t1.root.right.right.right = new Node(100);
if (t1.isBalanced())
    console.log("Balanced");
else
    console.log("Unbalanced");

