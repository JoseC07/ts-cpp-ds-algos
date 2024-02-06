export class ListNode{
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null)
    {
        this.val = (val=== undefined ? 0 : val)
        this.next = (next=== undefined ? null : next)
    }

}

export class LinkedList{
    head: ListNode | null
    constructor(){
        this.head = this.head;
    }

    get(val): undefined  {
        
    }
}
