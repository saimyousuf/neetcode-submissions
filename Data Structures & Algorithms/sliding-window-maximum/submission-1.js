class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let l =0;
        let r = 0;
        let deque = [];
        let ans = [];
        while(r<nums.length){
            while(deque.length>0 && nums[deque[deque.length-1]]<=nums[r] ){
                deque.pop();
            }
            if(deque.length>0 && deque[0]<l){
                deque.shift();
            }
            deque.push(r);
            if(r-l+1===k){
                ans.push(nums[deque[0]]);
                l++;
            }
            r++;
        }
        return ans;
    }
}
