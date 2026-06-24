class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        for(let i=0;i<nums.length;i++){
            let index = Math.abs(nums[i])-1;

            if(nums[index]<0){return Math.abs(nums[i]);}

            nums[index] = nums[index] * -1;
        }
        // console.log(nums)
        return -1;
    }
}
