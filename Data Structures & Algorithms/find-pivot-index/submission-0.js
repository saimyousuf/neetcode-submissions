class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let left = new Array(nums.length);
        let right = new Array(nums.length);

        for(let i=0;i<nums.length;i++){
            left[i] = nums[i]+ (left[i-1]||0);
        }
        for(let r = nums.length-1;r>=0;r--){
            right[r] =nums[r]+(right[r+1]||0) ;
        }
        console.log(left)
        console.log(right)
        for(let i=0;i<nums.length;i++){
            if(left[i]==right[i]){return i;}
        }
        return -1;
    }
}
