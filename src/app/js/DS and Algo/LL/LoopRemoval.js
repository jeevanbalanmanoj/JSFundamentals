const LinkedList = require("./LinkedList.js");

class LinkedListCycleService {
    hasLoop(ll) {
        let slow = ll.head;
        let fast = ll.head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast)
                return true;
        }
        return false;
    };

    detectAndRemoveLoop(ll) {
        let slow = ll.head;
        let fast = ll.head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast)
                break;
        }
        if (fast == null || fast.next == null) {
            return;
        }
        /* k is number of non looping steps before the loop starts.
        Fast and slow meets at loop size - k step ( because slow is k steps ahead of fast. Fast needs loopsize - k steps to catch up)
        fast and slow is now k steps away from loop starting. 
        reset slow to start and make them move one step at a time. 
        After k steps, they both will be at start of loop
        */
        slow = ll.head;
        while (slow.next != fast.next) {
            slow = slow.next;
            fast = fast.next;
        }
        fast.next = null;
        return;
    }


    /*
    Create a loop by making the last node point to the second node
    */
    createLoop(ll) {
        let ptr = ll.head;
        while (ptr.next != null) {
            ptr = ptr.next;
        }
        ptr.next = ll.head.next;

    }
    /*
    // Inefficient way of detecting and removing loop by using extra space
    
     detectAndRemoveLoopWithSet() {
       const elements = new Set();
       ptr = ll.head;
       while (ptr.next != null) {
           if (elements.has(ptr.next)) {
               console.log("Loop found. Loops back to ", ptr.next.data);
               ptr.next = null;
               break;
           }
           elements.add(ptr);
           ptr = ptr.next;
       }
    }*/

}





linkedListCycleservice = new LinkedListCycleService();
ll = new LinkedList();
ll.addFromArray([5, 10, 15, 20]);
ll.display()
console.log("Has loop before introducing loop : ", linkedListCycleservice.hasLoop(ll));
linkedListCycleservice.createLoop(ll);
console.log("Has loop after introducing loop : ", linkedListCycleservice.hasLoop(ll));
linkedListCycleservice.detectAndRemoveLoop(ll);
console.log("Has loop after introducing loop : ", linkedListCycleservice.hasLoop(ll));
console.log("Linkedlist after loop removal ");
ll.display();


