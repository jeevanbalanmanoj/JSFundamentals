const LinkedList = require("./LinkedList.js");


function isIntersecting(a, b) {

    let lenghtA = a.length();
    let lenghtB = b.length();
    let ptrA = a.head, ptrB = b.head;
    if (lenghtB > lenghtA) {
        let tmp;
        tmp =ptrA;
        ptrA=ptrB;
        ptrB=tmp;
    }
    let skipCount = Math.abs(lenghtA - lenghtB);

    for (let i = 0; i < skipCount; i++)
        ptrA = ptrA.next;


    while (ptrA != null && ptrB != null) {
        if (ptrA === ptrB)
            return ptrA.data;
        ptrA = ptrA.next;
        ptrB = ptrB.next;
    }
    return null;

}

llOne = new LinkedList();
llOne.addFromArray([1,2]);

llCommon = new LinkedList();
llCommon.addFromArray([3, 4, 5]);

llTwo = new LinkedList();
llTwo.addFromArray([100]);
//Adding intersection 
llOne.head.next.next = llCommon.head;
llTwo.head.next = llCommon.head;

console.log("LL #1");
llOne.display();

console.log("LL #2");
llTwo.display();

console.log("Intersecting node : ",isIntersecting(llOne, llTwo));