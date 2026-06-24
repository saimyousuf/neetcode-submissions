/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let f = head;
        let i =0;
        while(f!=null && i<n){
            f=f.next; 
            i++;
        }
        if(f==null){return head.next;}
        let s = head;
        while(f.next!=null){
            s=s.next;
            f=f.next;
        }
        s.next=s.next.next;
        return head;
    }
}
