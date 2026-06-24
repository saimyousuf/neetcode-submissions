class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let l =0;
        let h = nums.length;
        while(l<=h){
            let m = Math.floor(l + (h-l)/2);
            if(nums[m]===target){return m;}
            if(target>nums[m]){
                    l = m+1;
            }
            else{
                h=m-1;
            }
        }
        return l
    }
}
