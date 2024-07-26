/*
Queue
[DNode,Type,DNode] 


*/



class DoublyListNode<Type> {
    prev: DoublyListNode<Type> | null;
    val: Type | null;
    next: DoublyListNode<Type> | null;

    constructor(prev: DoublyListNode<Type> | null = null ,val: Type | null = null, next: DoublyListNode<Type> | null = null) {
        this.prev = prev;
        this.val = val;
        this.next = next;
    }
}



class Queue<Type> {
    private left: DoublyListNode<Type> = new DoublyListNode();
    private right: DoublyListNode<Type> = new DoublyListNode();
    private root: DoublyListNode<Type> = new DoublyListNode();
    
    constructor (){
        this.left.next = this.right;
        this.right.prev = this.left;
        this.root.next = this.right;
        this.root.prev = this.left;
    }

    enqueue(){
        
    }



}