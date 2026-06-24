class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l =0;
        let r =nums.length-1;
        let diff = Infinity;
        let max_diff = Infinity;
        let m = 0;
        let index =0;
        while(l<=r){
             m = Math.floor(l + (r-l)/2);
            if(nums[m]===target){
                return m;
            }
            else if( nums[m]<target){
                diff=target-nums[m];
                // max_diff = Math.min(max_diff,diff);
                if(diff<max_diff){
                    index=m;
                    max_diff=diff;
                }
                l = m+1;
            }
            else{
                diff=nums[m]-target;
                if(diff<max_diff){
                    index=m;
                    max_diff=diff;
                }
                r=m-1;
            }
        }
        return nums[index]<target?index+1:index;
        // return index;
    }
}
