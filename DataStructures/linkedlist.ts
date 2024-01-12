 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 head: ListNode = new ListNode(2,null);
 

class LinkedList {
    head: ListNode | null;

    constructor(){
        this.head = null;
    }

    //Add an element to the end of the list 
    push_back(val: number): void {
        let newNode = new ListNode(val);
        if(!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next)
        {
            current = current.next;
        }
        current.next = newNode;
    }

    push_front(val: number): void {
        let newNode = new ListNode(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop_back(): void{
        if(!this.head){
            return;
        }

        if(!this.head.next)
        {
            this.head = null;
            return;
        }

        let current = this.head;
        while(current.next?.next)
    }
}




function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return null;
};