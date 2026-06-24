class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set();
        let i=0,j=0;
        while(j<nums.length){
            if(j-i>k){
                set.delete(nums[i]);
                i++;
            }
            if(set.has(nums[j])){return true;}
            set.add(nums[j]);
            j++;
        }
        return false;
    }
}
