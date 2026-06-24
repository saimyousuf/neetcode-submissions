class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        for(let i =0;i<nums.length;i++){
            while(nums[i]>=1 && nums[i]<= nums.length && nums[i]!==nums[nums[i] -1 ]){
                let ci = nums[i]-1;
                [nums[i],nums[ci]]=[nums[ci],nums[i]];
            }
        }

        for(let i =0;i<nums.length;i++){
            if(nums[i]!==i+1){
                return i+1;
            }
        }
        return nums.length+1;
    }
}
