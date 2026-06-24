class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let j = 0;
        let i =0;
        while(j<nums.length){
            if(nums[j]!=val){
                let temp = nums[i];
                nums[i]=nums[j];
                nums[j] = temp;
                i++;
            }
            j++;
            
        }
        return i;
    }
}
