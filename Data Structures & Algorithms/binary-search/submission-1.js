class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length-1;
        
        while(l<=r){
        let mid = Math.floor(l+(r-l)/2);
        let temp = nums[mid];
        if(temp===target){
            return mid;
        } 
        if(temp<target){
            l=mid+1;
        }
        else{
            r = mid-1;
        }
        }

        return -1;
    }
}
