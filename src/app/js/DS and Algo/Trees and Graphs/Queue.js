class Queue {
    constructor() {
        this._items = [];
    }
    enqueue(...items) {
        items.forEach(item => this._items.push(item))
        return this._items;
    }
    dequeue() {
        if (this.isEmpty())
            return;
        const item = this._items[0];
        this._items.splice(0, 1);
        return item;
    }
    peek() {
        //peek at the first item from the queue
        return this._items[0]
    }

    size() {
        //get the length of queue
        return this._items.length
    }

    isEmpty() {
        //find whether the queue is empty or no
        return this._items.length === 0
    }

}

module.exports = Queue;
