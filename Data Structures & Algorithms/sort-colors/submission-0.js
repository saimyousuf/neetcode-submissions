class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let l = 0;
        let r = nums.length-1;
        let i =0;
        while(i<=r){
            if(nums[i]===0){
                let temp = nums[l];
                nums[l] = nums[i];
                nums[i] = temp;
                l++;
                i++;
            }
            else if(nums[i]===2){
                let temp = nums[r];
                nums[r] = nums[i];
                nums[i]=temp;
                r--;
            }
            else{
                i++;
            }
        }
        return nums;
    }
}
