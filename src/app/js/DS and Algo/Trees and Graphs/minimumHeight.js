

const { Tree, Node } = require('./Tree.js');
const t1 = new Tree();
function createMinBST(numbers) {

    bst = new Tree();
    bst.root = createMinBSTRec(numbers, 0, numbers.length - 1);
    return bst;
}

function createMinBSTRec(numbers, start, end) {
    if (end < start)
        return null;
    let mid = Math.floor((start + end) / 2);
    const n = new Node(numbers[mid]);
    n.left = createMinBSTRec(numbers, start, mid - 1);
    n.right = createMinBSTRec(numbers, mid + 1, end);
    return n;

}
createMinBST([1, 2, 3, 4, 5, 6, 7]);
bst.bfsLevel();