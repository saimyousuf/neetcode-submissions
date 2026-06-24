class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let l =0;
        let r = 0;
        let count = 0;
        let p =1;
        while(r<nums.length){
            p = p*nums[r];

            while(p>=k && l<=r){
                p= p/nums[l];
                l++;
            }

            count += r-l+1;
            r++;
        }
        return count;
    }
}
