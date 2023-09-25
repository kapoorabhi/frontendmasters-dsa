// Time Complexity should be constant i.e. O(1)
class Queue {
    constructor() {
        this._storage = {};
        this._length = 0;
        this._headIndex = 0;
    }

    /**
     * Enqueues a new value at the end of the Queue
     * @param {*} value - the value to push
     */
    enqueue(value) {
        // argument validation
        if(value) {
            const lastIndex = this._length + this._headIndex;
            this._storage[lastIndex] = value;
            this._length++;
        }
    }

    /**
     * Dequeues the value from the beginning of the queue and returns it
     * @returns {*} the first and oldest value in the queue
     */
    dequeue() {
        if(this._length) {
            const firstVal = this._storage[this._headIndex];
            delete this._storage[this._headIndex];
            this._length--;
            this._headIndex++;
            return firstVal;
        }
    }

    /**
     * Returns the value at the beginning of the queue w/o removing it from the queue
     * @returns {*} the first and oldest value in the queue
     */
    peek() {
        if(this._length) {
            return this._storage[this._headIndex];;
        }
    }
}

// Instantiates the class and invokes the constructor
const myQueue = new Queue();

console.log('ENQUEUE Operation:', myQueue.enqueue('zero'));
console.log('ENQUEUE Operation:', myQueue.enqueue('one'));

console.log('DEQUEUE Operation:', myQueue.dequeue());
console.log('DEQUEUE Operation:', myQueue.dequeue());

console.log('ENQUEUE Operation:', myQueue.enqueue('two'));

console.log('PEEK Operation:', myQueue.peek());

console.log('ENQUEUE Operation:', myQueue.enqueue('three'));

console.log('QUEUE:', myQueue);
