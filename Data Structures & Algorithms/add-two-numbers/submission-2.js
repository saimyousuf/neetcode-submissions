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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {

        let carry = 0;
        let nnh = new ListNode();
        let curr = nnh;

        while(l1!=null || l2!=null || carry!==0){
            let val1 = l1 == null? 0 : l1.val;
            let val2 = l2 == null? 0 : l2.val;

            let sum = val1+val2+carry;
            carry = Math.floor(sum/10);

            let node = new ListNode();
            node.val = sum%10;
            curr.next = node;
            curr = curr.next;

            if(l1!==null)l1=l1.next;
            if(l2!==null)l2=l2.next;

        }
        return nnh.next;
    }
}
