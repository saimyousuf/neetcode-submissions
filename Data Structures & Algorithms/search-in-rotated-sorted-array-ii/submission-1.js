class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        let l =0;
        let r = nums.length-1;

        while(l<=r){
            let m = Math.floor(l+(r-l)/2);
            if(nums[m]===target){return true;}
            if(nums[l] === nums[m] && nums[m]===nums[r]){
                l++;
                r--;
            }
            if(nums[l]<=nums[m]){
                if(target>=nums[l] && target<nums[m]){
                    r=m-1;
                }
                else{
                    l=m+1;
                }
            }
            else{
                // <=rnums[]
                if(target>nums[m] && target<=nums[r]){
                    l=m+1;
                }
                else{
                    r=m-1;
                }
            }

        }
        return false;
    }
}
