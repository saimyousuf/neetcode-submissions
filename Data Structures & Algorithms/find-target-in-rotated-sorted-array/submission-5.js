class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l =0;
        let r = nums.length-1;
        while(l<=r){
            let m = Math.floor(l + (r-l)/2);
            if(target===nums[m]){
                return m;
            }

            if(nums[l]<=nums[m]){
                if(nums[l]<=target && nums[m]>target){
                    r=m-1;
                }
                else{
                    l=m+1;
                }
            }
            else {
                if(nums[m]<target && nums[r]>=target){
                    l=m+1;
                }
                else{
                    r=m-1;
                }
            }

        }
        return -1;
    }
}
