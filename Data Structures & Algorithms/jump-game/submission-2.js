class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let maxReach = 0;
        let i =0;
        while(i<nums.length){
            if(i>maxReach){return false;}
            maxReach = Math.max(i+nums[i],maxReach);
            if(maxReach>=nums.length-1){return true;}
            i++;
        }
        return true;
    }
}
