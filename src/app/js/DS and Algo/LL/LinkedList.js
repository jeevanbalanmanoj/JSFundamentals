class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    push(d) {
        let n = new Node(d);
        if (this.head == null) {
            this.head = n;
            return;
        }
        n.next = this.head;
        this.head = n;
    }
    add(d) {
        let n = new Node(d);
        if (this.head == null) {
            this.head = n;
            return;
        }
        let ptr = this.head;
        while (ptr.next != null) {
            ptr = ptr.next;
        }
        ptr.next = n;
    };
    addFromArray(numbers) {
        numbers.forEach(number => this.add(number));
    }
    display() {
        for (let ptr = this.head; ptr != null; ptr = ptr.next) {
            console.log(ptr.data);
        }
    }
     length() {
        let count = 0;
        for (let ptr = this.head; ptr != null; ptr = ptr.next)
            count++;
        return count;
    }
}
module.exports = LinkedList;

