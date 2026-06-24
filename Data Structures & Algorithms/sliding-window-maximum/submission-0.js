class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let ans = [];
        let deque = [];
        let l =0;
        let r = 0;
        while(r<nums.length){
            
            while(deque.length>0 && nums[deque[deque.length-1]]<=nums[r]){
                deque.pop();
            }

            deque.push(r);

            if(l>deque[0]){
                deque.shift();
            }

            if(r-l+1===k){
                ans.push(nums[deque[0]]);
                l++;
            }
            r++;
        }
        return ans;
    }
}
