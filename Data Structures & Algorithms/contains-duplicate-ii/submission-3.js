class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let set = new Set();
        let i=0; let j=0;
        while(j<=nums.length-1){
            if(set.has(nums[j])){
                return true;
            }
            if(j-i>=k){
                set.delete(nums[i]);
                i++;
            }
            set.add(nums[j]);
            j++;
        }
        return false;
    }
}
