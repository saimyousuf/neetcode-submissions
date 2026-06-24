class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    rotate(nums, k) {
        let n = nums.length;
        k = k%n;
    const reverse = (arr,start,end)=>{
        while(start<end){
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    }

    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
    reverse(nums,k,n-1);

    }
}
