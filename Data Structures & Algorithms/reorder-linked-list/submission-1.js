
class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        if (head == null || head.next == null) {
            return head;
        }

        let s = head;
        let f = head;

        while (s != null && f != null && f.next != null) {
            s = s.next;
            f = f.next.next;
        }

        console.log(s.val);
        let second = s.next;
        s.next = null;
        second = this.reverseList(second);

       let first = head;

       while(first!=null && second!=null ){
        let t1 = first.next;
        let t2 = second.next;
        first.next=second;
        second.next=t1;
        first=t1;
        second=t2;
       }

        return head;
    }

    reverseList(head) {
        if (head == null || head.next == null) {
            return head;
        }

        let p = null;

        while (head != null) {
            let nh = head.next;
            head.next = p;
            p = head;
            head = nh;
        }

        return p;
    }
}