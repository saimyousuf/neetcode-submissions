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
        let l = l1;
        let r = l2;
        let sum =0;
        let carry = 0;
        let nnh = new ListNode();
        let h = nnh;
        while(l!=null && r!=null){
            let newNode = new ListNode();
            sum = r.val + l.val + carry;
            carry = Math.floor(sum/10);
            sum=sum%10;
           
            newNode.val = sum;
            h.next=newNode;
            h=h.next;
            l=l.next;
            r=r.next;
        };
    console.log(carry);
        while(l!=null){
            console.log("left ",h.val);
            let newNode = new ListNode();
            sum = l.val + carry;
            carry = Math.floor(sum/10);
            sum=sum%10;
            newNode.val = sum;
            h.next=newNode;
            h=h.next;
            l=l.next;
        }
        while(r!=null){
            let newNode = new ListNode();
            sum = r.val + carry;
            carry = Math.floor(sum/10);
            sum=sum%10;
            newNode.val = sum;
            h.next=newNode;
            h=h.next;
            r=r.next;
        }

        if(carry>0){
            let n = new ListNode(carry);
            h.next=n;
        }

    return nnh.next;

    }
}
