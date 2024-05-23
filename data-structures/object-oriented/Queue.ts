/*
Queue
*/

class DoublyListNode<Type> {
    prev: ListNode | null
    val: Type | null
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class Queue<Type> {
    private left: DoublyListNode = new DoublyListNode<Type>(null);

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