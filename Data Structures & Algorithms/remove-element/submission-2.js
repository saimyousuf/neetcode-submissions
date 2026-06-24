class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let i =0;
        let j=0;
        while(i<nums.length && j<nums.length){
            if(nums[j]!==val){
                nums[i]=nums[j];
                i++;
            }
            j++;
        }
        return i;
    }
}
