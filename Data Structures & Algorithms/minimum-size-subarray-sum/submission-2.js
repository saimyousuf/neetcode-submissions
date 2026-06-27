class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let l =0;
        let r=0;
        let sum = 0;
        let min = Infinity;
        while(r<nums.length){
            sum+=nums[r];
            while(sum>=target){
                min = Math.min(min,(r-l+1));
                sum-=nums[l];
                l++;
                
            }
            r++
        }
        return min==Infinity?0:min;
    }
}
