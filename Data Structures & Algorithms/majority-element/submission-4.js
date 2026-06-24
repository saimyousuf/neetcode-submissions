class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let e = nums[0];
        let count = 1;
        let i = 1;
        while(i<nums.length){
            if(e===nums[i]){
                count++;
            }
            else{
                count--;
                if(count===0){
                    e=nums[i];
                    count=1;
                }
                
            }
            i++;
        }
        return e;
    }
}
