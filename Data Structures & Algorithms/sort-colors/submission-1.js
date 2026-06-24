class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l =0;
        let r = nums.length-1;
        let i=0;
        while(i<=r){
            if(nums[i]===0){
                [nums[l],nums[i]]=[nums[i],nums[l]];
                i++;
                l++;
            }
            else if(nums[i]==1){
                i++;
            }
            else if(nums[i]===2){
                [nums[r],nums[i]]=[nums[i],nums[r]];
                r--;
            }
        }
        return nums;
    }
}
