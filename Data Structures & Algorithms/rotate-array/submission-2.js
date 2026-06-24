class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
        k = k%n;
        this.reverse(nums,0,n-1);
        this.reverse(nums,0,k-1)
        this.reverse(nums,k,n-1);
    }

    reverse(nums,l,r){
        while(l<r){
            [nums[l],nums[r]] = [nums[r],nums[l]];
            l++;
            r--;
        }
    }
}
