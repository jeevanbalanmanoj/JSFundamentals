const LinkedList = require("./LinkedList.js");
class LLOperations {

    reverse(ll) {
        let p, q, r = null;
        q = ll.head;
        while (q != null) {
            r = q.next;
            q.next = p;
            p = q;
            q = r;
        }
        ll.head = p;
    }
    addReversed(a, b) {
        let ptrA = a.head;
        let ptrB = b.head;
        let carry = 0;
        let sum = 0;
        let result = new LinkedList();
        while (ptrA !== null && ptrB !== null) {
            sum = ptrA.data + ptrB.data + carry;
            carry = Math.floor(sum / 10);
            sum = sum % 10;
            result.add(sum);
            ptrA = ptrA.next;
            ptrB = ptrB.next;
        }

        if (ptrB != null)
            ptrA = ptrB;

        while (ptrA != null) {
            sum = ptrA.data + carry;
            carry = math.floor(sum / 10);
            sum = sum % 10;
            result.add(sum);
            ptrA = ptrA.next;
        }
        return result;
    }
    add(a, b) {
        let lenghtA = a.length();
        let lenghtB = b.length();
        let ptrA = a.head, ptrB = b.head;
        if (lenghtB > lenghtA) {
            let tmp;
            tmp = ptrA;
            ptrA = ptrB;
            ptrB = tmp;
        }
        let skipCount = Math.abs(lenghtA - lenghtB);
        const newB = new LinkedList();
        newB.head = ptrB;
        //Padding with zeros
        for (let i = 0; i < skipCount; i++)
            newB.push(0);
        let result = llops.addSameLength(ptrA, newB.head);
        result.display();
    }

    addSameLength(a, b) {
        const result = new LinkedList();
        let carry = this.addRec(a, b, result);
        if (carry === 1)
            result.push(1);
        return result;
    }
    addRec(a, b, result) {
        if (a === null || b === null)
            return 0;
        let carry = this.addRec(a.next, b.next, result);
        let sum = a.data + b.data + carry;
        carry = Math.floor(sum / 10);
        sum = sum % 10;
        result.push(sum);
        return carry;
    }

}

const a = new LinkedList();
const b = new LinkedList();
a.addFromArray([7, 1, 6]);
b.addFromArray([5, 9, 2]);
const llops = new LLOperations();
//(llops.addReversed(a, b)).display();
//(llops.add(a, b));
const c = new LinkedList();
c.addFromArray([1, 2, 3, 4]);
llops.reverse(c);
c.display();





