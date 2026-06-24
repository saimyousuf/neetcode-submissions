class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let curr = nums[0];
        let best = nums[0];

        for(let i=1;i<nums.length;i++){
            curr=Math.max(nums[i],nums[i]+curr);
            best=Math.max(best,curr);
        }
        return best;
    }
}
