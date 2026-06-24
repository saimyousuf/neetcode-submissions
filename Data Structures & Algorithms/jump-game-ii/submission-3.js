class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let jumps = 0;
        let currentEnd = 0;
        let furthest = 0;
        
        for(let i=0;i<nums.length-1;i++){
            furthest = Math.max(i+nums[i],furthest);

            if(i===currentEnd){
                currentEnd=furthest;
                jumps++;
            }
    
        }
    return jumps;
    }
}
