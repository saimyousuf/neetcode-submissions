class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length-1;
        let res = new Array(n).fill(1);

        let left = 1;
        for(let l=0;l<=n;l++){
            res[l] = left;
            left=left*nums[l]; 
        }

        let right=1;
        for(let r=n;r>=0;r--){
            res[r]=right*res[r];
            right=right*nums[r];
        }
        return res;
    }
}
