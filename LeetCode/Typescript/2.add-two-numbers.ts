
// import { ListNode,LinkedList } from "../DataStructures/linkedlist";
/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
//  Definition for singly-linked list.
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }




function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l3 = new ListNode(0);
    let head: ListNode | null = l3;


    if(l1?.val === undefined)
        return l3;
    if(l2?.val === undefined)
        return l3;
    
    l3.next = new ListNode(l1?.val + l2?.val)
    l3 = l3.next;

    addTwoNumbers(l1.next, l2.next);

};


// @lc code=end

