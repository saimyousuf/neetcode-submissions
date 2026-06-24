class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let dq = [];
        let r =0;

        let ans = [];

        while(r<nums.length){
            if(dq.length > 0 && dq[0]<=r-k){
                dq.shift();
            }
            while(dq.length>0 && nums[dq[dq.length-1]] < nums[r] ){
                dq.pop();
            }
            dq.push(r);
            if(r >= k-1){
            ans.push(nums[dq[0]]);
            }
            r++;
        }
        return ans;

    }
}
