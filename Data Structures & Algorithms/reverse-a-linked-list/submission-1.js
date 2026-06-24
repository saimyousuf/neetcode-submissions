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
     * @param {ListNode} h
     * @return {ListNode}
     */
    reverseList(h) {
        if(h===null || h.next===null){return h;}
        let p = null;
        let n =null;
        while(h!==null){
            let n = h.next;
            h.next=p;
            p=h;
            h=n;
        }
        return p;
    }
}
