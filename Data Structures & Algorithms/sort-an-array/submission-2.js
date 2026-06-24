class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        for(let i=0;i<nums.length-1;i++){
            let swapped = false;
            for(let j=0;j<nums.length-1;j++){
                if(nums[j]>nums[j+1]){
                    let temp = nums[j+1];
                    nums[j+1]=nums[j];
                    nums[j]=temp;
                    swapped = true;
                }
            }
            if(!swapped){break;}
        }
        return nums;
    }
}
