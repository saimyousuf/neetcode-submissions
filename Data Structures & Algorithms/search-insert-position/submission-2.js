class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l =0;
        let r =nums.length-1;
        let m = 0;
        
        while(l<=r){
             m = Math.floor(l + (r-l)/2);
            if(nums[m]===target){
                return m;
            }
            else if( nums[m]<target){
                l = m+1;
            }
            else{
                r=m-1;
            }
        }
        return l; 
        // nums[index]<target?index+1:index;
        // return index;
    }
}
