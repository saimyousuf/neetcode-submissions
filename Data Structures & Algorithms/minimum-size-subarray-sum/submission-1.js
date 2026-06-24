class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let sum =0;
        let l =0;
        let r =0;
        let ans = Infinity;
        while(r<nums.length){
            sum+=nums[r];

            while(sum>=target){
                ans = Math.min(ans,(r-l+1));
                sum-=nums[l];
                l++
            }

        r++;

        }
        return ans===Infinity?0:ans;
    }
}
