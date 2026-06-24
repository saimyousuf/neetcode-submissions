class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let l =0;
        let r =0;
        let set = new Set();
        while(r<nums.length){
            if(set.size>k){
                set.delete(nums[l]);
                l++;
            }
            if(set.has(nums[r])){
                return true;
            }
set.add(nums[r]);
r++;
        }
        return false;
    }
    
}
