/*
Queue
*/

class DoublyListNode<Type> {
    prev: DoublyListNode<Type> | null
    val: Type | null
    next: DoublyListNode<Type> | null

    constructor(prev?: DoublyListNode<Type> | null ,val?: Type | null, next?: DoublyListNode<Type> | null) {
        this.prev = (val===undefined ? null : prev)
        this.val = (val===undefined ? null : val)
        this.next = (next===undefined ? null : next)
    }
}

class Queue<Type> {
    private left: DoublyListNode<Type> = new DoublyListNode<Type>(null);

    constructor(){
        this.items = new Array<Type>;
    }

    enqueue(x: Type):void{
        this.items.push(x);
    }

    dequeue(): Type | null {
        if(this.items.length === 0){
            return null;
        }

        this.items

    }
    
}