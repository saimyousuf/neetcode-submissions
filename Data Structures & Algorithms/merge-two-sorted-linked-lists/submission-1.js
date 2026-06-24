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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(h1, h2) {

        let curr = new ListNode();
        let start = curr;
        while(h1!=null && h2!=null){
            if(h1.val<h2.val){
                curr.next=h1;
                h1=h1.next;
            }
            else{
                curr.next=h2;
                h2=h2.next;
            }
            curr=curr.next;
        }
        
        if(h1!=null){
            curr.next=h1;
        }
        if(h2!=null){
            curr.next=h2;
        }

        return start.next;
    }
}
