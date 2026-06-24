class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let total = 0;
        
        let curr = nums[0];
        let best = nums[0];

        let currMin = nums[0];
        let worst = nums[0];

        for(let i=0;i<nums.length;i++){
            total+=nums[i];

            if(i>0){
                curr = Math.max(nums[i],curr+nums[i]);
                best = Math.max(curr,best);

                currMin = Math.min(nums[i],currMin+nums[i]);
                worst = Math.min(currMin,worst);

            }
        }

        if(best<0)return best;

        return Math.max(best,total-worst);

    }
}
