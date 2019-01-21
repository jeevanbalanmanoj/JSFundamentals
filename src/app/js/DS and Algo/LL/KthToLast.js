const LinkedList = require("./LinkedList.js");


function KthToLastRec(head, k,count) {
    if (head == null)
        return 0;
    

    let forward = ll.head;
    for (let i = 0; i < k; i++) {
        if (forward != null)
        forward = forward.next;
        else
            return null;
    }
    while(forward.next!=null){
        ptr=ptr.next;
        forward=forward.next;
    }
    return ptr.data;
}

function KthToLast(ll, k) {
    let ptr = ll.head;
    let forward = ll.head;
    for (let i = 0; i < k; i++) {
        if (forward != null)
        forward = forward.next;
        else
            return null;
    }
    while(forward.next!=null){
        ptr=ptr.next;
        forward=forward.next;
    }
    return ptr.data;
}
ll = new LinkedList();
ll.addFromArray([5, 10, 15, 20]);
console.log(KthToLast(ll,2));
