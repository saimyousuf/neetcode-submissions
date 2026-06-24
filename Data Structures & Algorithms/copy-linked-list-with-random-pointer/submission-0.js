// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        if(head==null){return head;}
        const map = new Map();
        map.set(null,null);
        let curr = head;

        while(curr!=null){
            map.set(curr,new Node(curr.val));
            curr = curr.next;
        }
        curr = head;
        while(curr!=null){
        let copy = map.get(curr);
        // if(curr == null){copy.next = }
        copy.next = map.get(curr.next);
        copy.random = map.get(curr.random);
        curr=curr.next;
        }
    return map.get(head);
    }
}
