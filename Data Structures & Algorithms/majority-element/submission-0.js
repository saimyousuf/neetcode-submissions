class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let i =1;
        let mj = nums[0];
        let count =1;
        while(i<nums.length){
            if(nums[i]==mj){count++;}
            else{
                count--;
                if(count<0){
                    mj = nums[i];
                    count=1;
                }
            }
            i++;
        }
        return mj;
    }
}
