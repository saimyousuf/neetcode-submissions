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
     * @return {void}
     */
    reorderList(head) {
        if(head==null || head.next==null){return head;}
        let s = head;
        let f = head;
        while(f!=null && f.next!=null){
            s=s.next;
            f=f.next.next;
        }
        let second = s.next;
        
       second = this.reverse(second); 
       s.next=null;
       let first = head;

       while(first!=null && second!=null){
        let t1 = first.next;
        let t2 = second.next;

        first.next=second;
        second.next = t1;

        first = t1;
        second=t2;

       }
       
    return head;
    }

    reverse(s){
        if(s==null  || s.next==null){
            return s;
        }
        let p = null;
        while(s!=null){
            let n = s.next;
            s.next=p;
            p=s;
            s=n;
           
        }
        return p;
    }

}
