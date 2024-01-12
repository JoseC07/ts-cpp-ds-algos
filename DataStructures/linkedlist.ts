 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 //head: ListNode = new ListNode(2,null);
 

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

    //pop back: removes the last node from list
    pop_back(): void{
        //return if head is null
        if(!this.head){
            return;
        }

        //if only a head exists, set it to null and return
        if(!this.head.next)
        {
            this.head = null;
            return;
        }

        //if list is greater than two nodes.

        //set head as current
        let current = this.head;

        //iterate to the second to last position
        //while current.next exists and optionally the current.next?.next exists
        //EX: current = A -> current.next = B -> current.next.next = C -> and so on..
        //current.next?.next -> safe check for undefined or null values without runtime error.
        while(current.next?.next)
        {
            current = current.next;
        }

        //remove last element
        current.next = null;
    }
    // Method to remove the first node from the list
    pop_front(): void {
        if (!this.head) return; // If the list is empty, there's nothing to remove
        this.head = this.head.next; // Set the head to the second node, which removes the first node
    }

    size(): number {
        let count = 0; // Counter for the number of nodes
        let current = this.head; // Start at the head of the list
        while (current) {
            count++; // Increment the counter for each node
            current = current.next; // Move to the next node
        }
        return count; // Return the total count
    }

    // Method to check if the list is empty
    isEmpty(): boolean {
        return this.head === null; // Returns true if head is null, false otherwise
    }

    toString(): string {
        let elements = []; // Array to hold node values
        let current = this.head; // Start at the head of the list
        while (current) {
            elements.push(current.val); // Add each node's value to the array
            current = current.next; // Move to the next node
        }
        return elements.join(" -> "); // Return a string representation of the list
    }


}


let list: LinkedList = new LinkedList();

list.push_back(12);
list.push_back(13);
list.push_back(14);
console.log(list.toString());
list.push_front(11);
console.log(list.toString());
list.pop_back();
console.log(list.toString());
list.pop_front();
console.log(list.toString());
console.log("Size: " + list.size());
console.log("Is Empty: " + list.isEmpty());