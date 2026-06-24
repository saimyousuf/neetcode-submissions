class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let l =0;
        let jumps = nums[l];
        
        
        while(l<nums.length){
            jumps=Math.max(jumps,nums[l]);
            if(jumps<=0){break;}

            jumps--;
            l++;

        }
        if(l>=nums.length-1){
        return true;}
        return false;
    }
}
