class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        let max = 0;
        let l =0;
        let r =0;
        while(r<nums.length){
            if(nums[r]===0){
                k--;
            }

            while(k<0){
                if(nums[l]===0){
                    k++;
                }
                l++;
            }

            max =Math.max(max,(r-l+1));
            r++;
        }
        return max;
    }
}
