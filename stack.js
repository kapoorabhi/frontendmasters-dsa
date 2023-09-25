// Time Complexity should be constant i.e. O(1)
// Both pop() and peek() methods will return undefined by default if the stack length is zero
// push() returns undefined by default after inserting a value or if the length condition is not met
class Stack {
    constructor() {
        this._storage = {};
        this._length = 0;
    }

    /**
     * Adds a new value at the end of the stack
     * @param {*} value - the value to push
     */
    push(value) {
        // Add typechecking as the storage object can't take functions etc.
        if(value) {
            this._storage[this._length] = value;
            this._length++;
        }
    }

    /**
     * Removes the value at the end of stack and returns it
     * @returns {*} the last and newest value in the stack
     */
    pop() {
        // Check if storage is empty
        if(this._length) {
            const lastVal = this._storage[this._length - 1];
            // One way is to delete the last value using "delete" keyword
            delete this._storage[this._length - 1];
            // Other way mentioned below is, setting the val to undefined
            // this._storage[this._length - 1] = undefined;
            this._length--;
            return lastVal;
        }
    }

    /**
     * Returns the value at the end of the stack w/o removing it
     * @returns {*} the last and newest value in the stack
     */
    peek() {
        if(this._length) {
            return this._storage[this._length - 1];;
        }
    }
}

// Instantiates the class and invokes the constructor
const myStack = new Stack();

// Pushes the value into stack and increment the length
myStack.push('zero');
myStack.push('one');
// {   _storage: {0: 'zero', 1: 'one'}
//     length: 2
// }

// Pops the last value from the stack
console.log('POP Operation:', myStack.pop());
// {   _storage: {0: 'zero'}
//     length: 1
// }

// Returns the last value from the stack
console.log('PEEK Operation:', myStack.peek());

console.log('STACK:', myStack);

